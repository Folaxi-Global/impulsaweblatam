'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'standard'

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Checkout - ImpulsaWeb Latam</h1>
      <p className="text-slate-400 mb-6">Plan seleccionado: <span className="text-emerald-400 font-semibold">{plan}</span></p>
      
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <span>Mantenimiento por 6 meses</span>
          <span className="font-bold text-lg">$18.00 USD</span>
        </div>
        <p className="text-sm text-slate-400">Incluye hosting, subdominio y pasarela configurada.</p>
        
        {/* Botón de pago */}
        <button 
          onClick={() => alert('Redirigiendo a pasarela de pago...')}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition"
        >
          Pagar $18.00 USD
        </button>
      </div>
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-white p-8">Cargando pasarela...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
