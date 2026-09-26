import { NextResponse } from 'next/server'
import { MercadoPagoConfig, Payment } from 'mercadopago'

const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN || '' 
})

// Permite verificar que la URL responde si entras desde el navegador (GET)
export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'Webhook de ImpulsaWeb Latam activo' 
  }, { status: 200 })
}

// Recibe las notificaciones automáticas de Mercado Pago (POST)
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const topic = body.type || body.topic

    if (topic === 'payment') {
      const paymentId = body.data?.id
      const payment = new Payment(client)
      const paymentInfo = await payment.get({ id: paymentId })

      if (paymentInfo.status === 'approved') {
        console.log(`¡Pago aprobado! ID: ${paymentId}`)
      }
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error en webhook:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
