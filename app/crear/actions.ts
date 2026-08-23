
'use server'

import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'

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
    // 1. Validar que el subdominio no esté repetido en la base de datos
    const { data: existingSite, error: checkError } = await supabase
      .from('sites')
      .select('id')
      .eq('subdomain', formData.subdomain)
      .single()

    if (existingSite) {
      throw new Error('Este subdominio ya está en uso. Por favor, elige otro.')
    }

    // 2. Insertar el nuevo sitio web en la tabla 'sites' con estado pendiente
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
