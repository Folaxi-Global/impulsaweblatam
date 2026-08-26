'use server'

import { createClient } from '@supabase/supabase-js'

// Forzamos estrictamente el uso de la Service Role Key para evitar bloqueos por permisos
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

if (!supabaseServiceKey) {
  throw new Error('Falta configurar la variable de entorno SUPABASE_SERVICE_ROLE_KEY en Vercel.')
}

// Creamos el cliente de Supabase con privilegios de administrador de servidor
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false }
})

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
    if (!formData.subdomain) {
      return { success: false, error: 'El subdominio es obligatorio.' }
    }

    const { data: existingSite, error: checkError } = await supabase
      .from('sites')
      .select('id')
      .eq('subdomain', formData.subdomain)
      .maybeSingle()

    if (checkError) {
      console.error('Error al consultar subdominio:', checkError)
      return { success: false, error: `Error de lectura: ${checkError.message}` }
    }

    if (existingSite) {
      return { success: false, error: 'Este subdominio ya está en uso. Por favor, elige otro.' }
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
      console.error('Supabase Insert Error Completo:', insertError)
      return { success: false, error: `Error al guardar en la base de datos: ${insertError.message}` }
    }

    return { success: true, subdomain: formData.subdomain, country: formData.country }

  } catch (err: any) {
    console.error('[Action Error Catastrófico]:', err)
    return { success: false, error: err.message || 'Error inesperado en el servidor.' }
  }
}
