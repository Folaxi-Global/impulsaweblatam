'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const initialPlan = searchParams.get('plan') || 'standard'
  const [selectedPlan, setSelectedPlan] = useState(initialPlan)

  // Configuración de precios y beneficios por plan
  const planDetails = {
    standard: {
      name: 'Plan Estándar (Mantenimiento)',
      price: 18.00,
      period: 'por 6 meses',
      desc: 'Incluye hosting de alta velocidad, subdominio gratuito y pasarela de WhatsApp configurada.',
      features: ['Hosting en la nube', 'Subdominio (.impulsaweblatam.com)', 'Soporte técnico básico']
    },
    pro: {
      name: 'Plan Pro + Dominio Propio',
      price: 35.00,
      period: 'por 1 año',
      desc: 'Incluye el registro completo de tu dominio personalizado (.com o .cl), hosting y prioridad máxima.',
      features: ['Dominio Propio incluido (.com / .cl)', 'Hosting de ultra velocidad', 'Soporte prioritario 24/7', 'Certificado SSL avanzado']
    }
  }

  const currentPlan = planDetails[selectedPlan as keyof typeof planDetails] || planDetails.standard

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 max-w-2xl mx-auto font-sans">
      <div className="mb-8 text-center">
        <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          Activación Segura • ImpulsaWeb Latam
        </span>
        <h1 className="text-3xl font-extrabold mt-3">Finaliza tu Activación</h1>
        <p className="text-slate-400 text-sm mt-1">Selecciona el plan que mejor se adapte al crecimiento de tu marca.</p>
      </div>

      {/* Selector de Planes Interactivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div 
          onClick={() => setSelectedPlan('standard')}
          className={`p-5 rounded-2xl border cursor-pointer transition ${
            selectedPlan === 'standard' 
              ? 'bg-cyan-500/10 border-cyan-500 shadow-lg shadow-cyan-500/10' 
              : 'bg-slate-900 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="font-bold text-sm text-white mb-1">Plan Estándar</div>
          <div className="text-xs text-slate-400 mb-3">Ideal para empezar rápido.</div>
          <div className="text-lg font-black text-cyan-400">$18.00 USD</div>
        </div>

        <div 
          onClick={() => setSelectedPlan('pro')}
          className={`p-5 rounded-2xl border cursor-pointer transition relative overflow-hidden ${
            selectedPlan === 'pro' 
              ? 'bg-cyan-500/10 border-cyan-500 shadow-lg shadow-cyan-500/10' 
              : 'bg-slate-900 border-slate-800 hover:border-slate-700'
          }`}
        >
          <span className="absolute top-3 right-3 bg-cyan-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
            Recomendado 🚀
          </span>
          <div className="font-bold text-sm text-white mb-1">Plan Pro (Con Dominio)</div>
          <div className="text-xs text-slate-400 mb-3">Incluye dominio propio anual.</div>
          <div className="text-lg font-black text-cyan-400">$35.00 USD</div>
        </div>
      </div>

      {/* Resumen de la Orden */}
      <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <h2 className="font-bold text-base text-white">{currentPlan.name}</h2>
            <p className="text-xs text-slate-400 mt-0.5">{currentPlan.period}</p>
          </div>
          <span className="font-black text-2xl text-cyan-400">${currentPlan.price.toFixed(2)} USD</span>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Lo que incluye:</p>
          <ul className="space-y-2">
            {currentPlan.features.map((feature, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                <span className="text-cyan-400 font-bold">✓</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-slate-400 bg-slate-950/60 p-4 rounded-xl border border-slate-800/60 leading-relaxed">
          {currentPlan.desc}
        </p>
        
        {/* Botón de pago */}
        <button 
          onClick={() => alert(`Redirigiendo a pasarela de pago para el ${currentPlan.name}...`)}
          className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold py-4 rounded-xl transition shadow-lg shadow-cyan-500/25 cursor-pointer text-base"
        >
          Activar y Pagar ${currentPlan.price.toFixed(2)} USD
        </button>
      </div>

      <div className="text-center mt-6 text-xs text-slate-500">
        🔒 Transacción procesada de forma segura mediante pasarela cifrada.
      </div>
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center font-bold">Cargando pasarela de pago...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
