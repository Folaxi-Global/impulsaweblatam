'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const subdomain = searchParams.get('subdomain') || 'tudominio'
  const country = searchParams.get('country') || 'CL'
  
  const [loading, setLoading] = useState(false)

  const handleActivate = (gateway: string) => {
    setLoading(true)
    console.log(`Iniciando pago de $18 USD con ${gateway} para el subdominio: ${subdomain}`)

    // Aquí integrarás la redirección a Stripe o Mercado Pago según corresponda
    setTimeout(() => {
      alert(`Conectando con la pasarela de pago (${gateway})...`)
      setLoading(false)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-xl w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
        
        {/* Cabecera del Resumen */}
        <div className="text-center pb-6 border-b border-slate-800">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Paso 2 de 2 • Activación Inmediata
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold mt-4">Tu diseño web es 100% Gratis</h1>
          <p className="text-slate-400 text-sm mt-2">
            Solo activa tu cuota de mantenimiento semestral para publicar tu sitio web de forma permanente.
          </p>
        </div>

        {/* Resumen del Pedido */}
        <div className="my-6 bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Dirección web:</span>
            <span className="text-cyan-400 font-mono font-semibold">{subdomain}.impulsaweblatam.com</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Diseño y plantillas:</span>
            <span className="text-emerald-400 font-semibold">¡GRATIS! ($0)</span>
          </div>
          <div className="flex justify-between text-sm border-t border-slate-800/80 pt-3">
            <span className="text-slate-300 font-medium">Mantenimiento Semestral (6 meses):</span>
            <span className="text-white font-bold">$18.00 USD</span>
          </div>
        </div>

        {/* Botones de Pago Multi-Pasarela */}
        <div className="space-y-4">
          <button 
            onClick={() => handleActivate('Stripe')}
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition shadow-lg shadow-cyan-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? 'Procesando...' : 'Pagar con Tarjeta (Stripe - Internacional)'}
          </button>

          <button 
            onClick={() => handleActivate('Mercado Pago')}
            disabled={loading}
            className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-sky-600/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? 'Procesando...' : 'Pagar con Medios Locales (Mercado Pago)'}
          </button>
        </div>

        {/* Garantía y Seguridad */}
        <div className="mt-6 text-center text-xs text-slate-500 space-y-1">
          <p>🛡️ Pago 100% seguro y encriptado.</p>
          <p>Se renovará automáticamente cada 6 meses. Puedes cancelar cuando quieras con un solo clic.</p>
        </div>

      </div>
    </main>
  )
}
