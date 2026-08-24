'use server'

import { createClient } from '@supabase/supabase-js'

// Inicializamos Supabase en el servidor con las credenciales de entorno
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
    console.error('Error en createSiteAction:', err.message)
    return { success: false, error: err.message }
  }
}

// ==========================================
// 1. MÓDULO DE VOZ (ElevenLabs)
// ==========================================
async function generateVoiceBuffer(text: string, voiceId: string = '21m00Tcm4TlvDq8ikWAM') {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    throw new Error('Falta la clave de ElevenLabs en las variables de entorno (ELEVENLABS_API_KEY).');
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
    throw new Error(`Error en ElevenLabs API: ${errorData}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// ==========================================
// 2. MÓDULO DE ALMACENAMIENTO (Bunny.net)
// ==========================================
async function uploadBufferToBunny(fileBuffer: Buffer, fileName: string) {
  const storageZoneName = process.env.BUNNY_STORAGE_ZONE_NAME;
  const storagePassword = process.env.BUNNY_STORAGE_PASSWORD;
  const storageHost = process.env.BUNNY_STORAGE_HOST || 'storage.bunnycdn.com';

  if (!storageZoneName || !storagePassword) {
    throw new Error('Faltan las credenciales de Bunny.net en las variables de entorno.');
  }

  const url = `https://${storageHost}/${storageZoneName}/${fileName}`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      AccessKey: storagePassword,
      'Content-Type': 'application/octet-stream',
    },
    body: fileBuffer as any,
  });

  if (!response.ok) {
    throw new Error(`Error al subir a Bunny.net Storage: ${response.statusText}`);
  }

  return `https://${storageZoneName}.b-cdn.net/${fileName}`;
}

// ==========================================
// 3. ORQUESTADOR MAESTRO (Une IA + Cloud Storage)
// ==========================================
export async function processAndStoreMediaAction(textScript: string, customFileName?: string) {
  try {
    if (!textScript || textScript.trim() === '') {
      throw new Error('El guion de texto no puede estar vacío.');
    }

    // Paso A: Generar nombre de archivo único basado en timestamp
    const fileName = customFileName || `audio_${Date.now()}.mp3`;

    console.log('Iniciando síntesis de voz con ElevenLabs...');
    const audioBuffer = await generateVoiceBuffer(textScript);

    console.log('Subiendo archivo resultante a Bunny.net Storage...');
    const publicUrl = await uploadBufferToBunny(audioBuffer, fileName);

    console.log('¡Proceso completado con éxito!', publicUrl);
    return { success: true, url: publicUrl };

  } catch (err: any) {
    console.error('Error en processAndStoreMediaAction:', err.message);
    return { success: false, error: err.message };
  }
}
