'use server'

import { createClient } from '@supabase/supabase-js'

// Inicialización segura de Supabase en el servidor
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function createSiteAction(formData: {
  businessName: string
  subdomain: string
  category: string
  country: string
  whatsapp: string
  description: string
  template: string
}) {
  try {
    const { data: existingSite, error: checkError } = await supabase
      .from('sites')
      .select('id')
      .eq('subdomain', formData.subdomain)
      .single()

    if (existingSite) {
      throw new Error('Este subdominio ya está en uso. Por favor, elige otro.')
    }

    const { error: insertError } = await supabase
      .from('sites')
      .insert([
        {
          business_name: formData.businessName,
          subdomain: formData.subdomain,
          category: formData.category,
          country: formData.country,
          whatsapp: formData.whatsapp,
          description: formData.description,
          template: formData.template,
          status: 'pending_payment',
          created_at: new Date().toISOString()
        }
      ])

    if (insertError) {
      throw new Error(`Error al guardar en la base de datos: ${insertError.message}`)
    }

    return { success: true, subdomain: formData.subdomain, country: formData.country }

  } catch (err: any) {
    console.error('[Action Error] createSiteAction:', err.message)
    return { success: false, error: err.message }
  }
}

// ==========================================
// 1. MÓDULO DE VOZ ULTRA PRO (ElevenLabs)
// ==========================================
async function generateVoiceBuffer(text: string, voiceId: string = '21m00Tcm4TlvDq8ikWAM'): Promise<Buffer> {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    throw new Error('Falta la credencial ELEVENLABS_API_KEY en el entorno de producción.');
  }

  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': apiKey,
    },
    body: JSON.stringify({
      text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Fallo en ElevenLabs API (${response.status}): ${errorData}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// ==========================================
// 2. MÓDULO DE ALMACENAMIENTO CLOUD (Bunny.net)
// ==========================================
async function uploadBufferToBunny(fileBuffer: Buffer, fileName: string): Promise<string> {
  const storageZoneName = process.env.BUNNY_STORAGE_ZONE_NAME;
  const storagePassword = process.env.BUNNY_STORAGE_PASSWORD;
  const storageHost = process.env.BUNNY_STORAGE_HOST || 'storage.bunnycdn.com';
  // Soporte para CDN personalizada o Pull Zone configurada en variables de entorno
  const cdnHostname = process.env.BUNNY_CDN_HOSTNAME || `${storageZoneName}.b-cdn.net`;

  if (!storageZoneName || !storagePassword) {
    throw new Error('Faltan las credenciales de Bunny.net (Storage Zone Name o Password) en las variables de entorno.');
  }

  const uploadUrl = `https://${storageHost}/${storageZoneName}/${fileName}`;

  const response = await fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      AccessKey: storagePassword,
      'Content-Type': 'application/octet-stream',
    },
    body: fileBuffer as any,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Fallo al subir a Bunny.net Storage (${response.status}): ${response.statusText} - ${errorBody}`);
  }

  // Retorna la URL pública optimizada por CDN de producción
  return `https://${cdnHostname}/${fileName}`;
}

// ==========================================
// 3. ORQUESTADOR MAESTRO DE PRODUCCIÓN (IA + CDN)
// ==========================================
export async function processAndStoreMediaAction(textScript: string, customFileName?: string) {
  try {
    if (!textScript || textScript.trim() === '') {
      throw new Error('El guion de texto proporcionado para la síntesis multimedia está vacío.');
    }

    // Generador de identificador único a prueba de colisiones
    const sanitizedFileName = customFileName 
      ? customFileName.replace(/[^a-zA-Z0-9-_]/g, '_') 
      : `media_${Date.now()}_${Math.random().toString(36.substring(2, 7))}.mp3`;

    console.info(`[Media Pipeline] Iniciando síntesis de voz (ElevenLabs) para archivo: ${sanitizedFileName}`);
    const audioBuffer = await generateVoiceBuffer(textScript);

    console.info(`[Media Pipeline] Subiendo activo multimedia a la nube (Bunny.net)...`);
    const publicCdnUrl = await uploadBufferToBunny(audioBuffer, sanitizedFileName);

    console.info(`[Media Pipeline] Éxito total. Recurso disponible en: ${publicCdnUrl}`);
    return { success: true, url: publicCdnUrl };

  } catch (err: any) {
    console.error('[Pipeline Error Critical] processAndStoreMediaAction:', err.message);
    return { success: false, error: err.message };
  }
}
