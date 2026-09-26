import { NextResponse } from 'next/server'
import { MercadoPagoConfig, Payment } from 'mercadopago'

const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN || '' 
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Mercado Pago envía diferentes tipos de notificaciones (topic o type)
    const topic = body.type || body.topic

    if (topic === 'payment') {
      const paymentId = body.data?.id

      // Consultamos el detalle del pago directamente a la API de Mercado Pago
      const payment = new Payment(client)
      const paymentInfo = await payment.get({ id: paymentId })

      // Aquí puedes revisar si el pago fue aprobado
      if (paymentInfo.status === 'approved') {
        const externalReference = paymentInfo.external_reference // O puedes extraer datos del pago
        
        console.log(`¡Pago aprobado exitosamente! ID de pago: ${paymentId}`)
        
        // TODO: Aquí actualizas tu base de datos (por ejemplo, Supabase) 
        // para marcar la web del usuario o su mantenimiento como "Pagado/Activo".
      }
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error procesando webhook de Mercado Pago:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
