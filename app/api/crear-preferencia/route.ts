import { NextResponse } from 'next/server'
import { MercadoPagoConfig, Preference } from 'mercadopago'

// Configura el cliente de Mercado Pago usando tus credenciales de entorno
const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN || '' 
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { plan, subdomain } = body

    // Definir los planes de ImpulsaWeb Latam
    const planData: Record<string, { title: string; price: number }> = {
      standard: { title: `Plan Estándar - Web: ${subdomain}.impulsaweblatam.com`, price: 18.00 },
      pro: { title: `Plan Pro con Dominio - Web: ${subdomain}.impulsaweblatam.com`, price: 35.00 }
    }

    const selectedPlan = planData[plan] || planData.standard

    const preference = new Preference(client)

    const result = await preference.create({
      body: {
        items: [
          {
            id: plan || 'standard',
            title: selectedPlan.title,
            quantity: 1,
            unit_price: selectedPlan.price,
            currency_id: 'USD' // Puedes cambiar a 'CLP' si prefieres pesos chilenos
          }
        ],
        back_urls: {
          success: `${request.headers.get('origin')}/pago-exitoso?subdomain=${subdomain}`,
          failure: `${request.headers.get('origin')}/pago-fallido`,
          pending: `${request.headers.get('origin')}/pago-pendiente`
        },
        auto_return: 'approved',
      }
    })

    return NextResponse.json({ 
      init_point: result.init_point,
      preference_id: result.id 
    })

  } catch (error: any) {
    console.error('Error creando preferencia en Mercado Pago:', error)
    return NextResponse.json(
      { error: error.message || 'Error interno al procesar el pago' }, 
      { status: 500 }
    )
  }
}
