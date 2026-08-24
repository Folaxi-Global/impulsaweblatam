'use server'

import { createClient } from '@supabase/supabase-js'

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
