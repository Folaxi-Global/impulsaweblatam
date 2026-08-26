'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSiteAction } from './actions'

export default function CrearWebPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [step, setStep] = useState<'form' | 'preview'>('form')
  
  const [formData, setFormData] = useState({
    businessName: '',
    subdomain: '',
    category: 'servicios',
    country: 'CL',
    whatsapp: '',
    description: '',
    template: 'abogados' // Plantilla por defecto especializada
  })

  const handleSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')
    setFormData({ ...formData, subdomain: value })
  }

  const handleGeneratePreview = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      if (!formData.subdomain || formData.subdomain.length < 3) {
        throw new Error('El subdominio debe tener al menos 3 caracteres válidos.')
      }

      // Guardamos de manera preliminar en Supabase o pasamos a la vista previa
      const result = await createSiteAction(formData)

      if (!result.success) {
        throw new Error(result.error || 'Error al registrar el sitio web.')
      }

      // Cambiamos al paso de vista previa en vivo
      setStep('preview')
      setLoading(false)
    } catch (error: any) {
      console.error('Error al procesar el formulario:', error)
      setErrorMsg(error.message || 'Ocurrió un error al crear la web. Inténtalo de nuevo.')
      setLoading(false)
    }
  }

  const handleProceedToCheckout = () => {
    router.push(`/checkout?subdomain=${formData.subdomain}&country=${formData.country}`)
  }

  // --- VISTA PREVIA EN VIVO DE LA WEB DEL CLIENTE ---
  if (step === 'preview') {
    return (
      <div className="min-h-screen bg-slate-950 text-white relative">
        {/* Barra flotante superior de conversión */}
        <div className="sticky top-0 z-50 bg-slate-900/90 border-b border-cyan-500/30 backdrop-blur-md px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <div>
              <p className="text-sm font-bold">Vista Previa: <span className="text-cyan-400">{formData.subdomain}.impulsaweblatam.com</span></p>
              <p className="text-xs text-slate-400">Estilo seleccionado: <span className="uppercase text-slate-200">{formData.template}</span></p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setStep('form')}
              className="text-xs text-slate-400 hover:text-white px-3 py-2 transition"
            >
              ← Modificar datos
            </button>
            <button 
              onClick={handleProceedToCheckout}
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold px-6 py-2.5 rounded-xl text-xs md:text-sm transition shadow-lg shadow-cyan-500/25 cursor-pointer"
            >
              ¡Me encanta! Activar web ($18 USD) →
            </button>
          </div>
        </div>

        {/* Renderizado de la Plantilla en Vivo */}
        <div className="max-w-4xl mx-auto p-6 md:p-12 space-y-12">
          <div className="text-center space-y-4 pt-8 border-b border-slate-900 pb-12">
            <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs px-3 py-1 rounded-full uppercase font-semibold">
              Especialidad: {formData.template}
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">{formData.businessName || 'Tu Negocio'}</h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">{formData.description || 'Aquí irá la descripción detallada de lo que ofrece tu marca a los clientes.'}</p>
          </div>

          {/* Tarjeta de demostración orientada al rubro */}
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl space-y-6">
            <h3 className="text-xl font-bold text-cyan-400">Diseño optimizado para {formData.template}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Este es un vistazo de cómo tus clientes visualizarán tu plataforma digital. Los colores, las secciones y los botones de llamado a la acción están estructurados para maximizar la conversión en tu sector.
            </p>
            <div className="pt-4 flex gap-4">
              <span className="bg-cyan-500 text-slate-950 px-5 py-2.5 rounded-xl font-bold text-sm">Reservar / Consultar</span>
            </div>
          </div>

          {/* Botón flotante simulado de WhatsApp */}
          {formData.whatsapp && (
            <div className="fixed bottom-6 right-6 bg-emerald-500 text-slate-950 p-4 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm cursor-pointer hover:bg-emerald-400 transition z-40">
              💬 Escribir al {formData.whatsapp}
            </div>
          )}
        </div>
      </div>
    )
  }

  // --- FORMULARIO DE CREACIÓN Y SELECCIÓN DE PLANTILLA ---
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 selection:bg-cyan-500 selection:text-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Paso 1 de 2 • ImpulsaWeb Latam
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
            Crea tu web profesional <span className="text-cyan-400">100% Gratis</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2">Selecciona la plantilla ideal para tu rubro y previsualízala al instante.</p>
        </div>

        {errorMsg && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleGeneratePreview} className="bg-slate-900 border border-slate-800 p-6 md:p-10 rounded-2xl shadow-xl space-y-6">
          
          {/* Selección de Plantilla por Rubro */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">Elige tu Plantilla por Rubro</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'abogados', name: '⚖️ Abogados y Servicios Legales', desc: 'Formal, serio y enfocado en confianza y citas' },
                { id: 'barberia', name: '✂️ Barbería y Estética', desc: 'Diseño moderno, oscuro y visual para reservas' },
                { id: 'panaderia', name: '🥖 Panadería y Gastronomía', desc: 'Cálido, apetitoso y enfocado en productos' }
              ].map((t) => (
                <div 
                  key={t.id}
                  onClick={() => setFormData({...formData, template: t.id})}
                  className={`p-4 rounded-xl border cursor-pointer transition ${
                    formData.template === t.id 
                      ? 'bg-cyan-500/10 border-cyan-500 text-white shadow-md' 
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-white mb-1">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Nombre de tu Negocio o Marca</label>
            <input 
              type="text" 
              required
              placeholder="Ej: Estudio Jurídico Martínez / Barbería Don Pepe"
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Tu dirección web personalizada</label>
            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl overflow-hidden focus-within:border-cyan-500 transition">
              <input 
                type="text" 
                required
                placeholder="tudominio"
                value={formData.subdomain}
                onChange={handleSubdomainChange}
                className="w-full bg-transparent px-4 py-3 text-white focus:outline-none text-sm"
              />
              <span className="bg-slate-900 text-slate-400 px-3 py-3 text-xs border-l border-slate-800 select-none whitespace-nowrap">
                .impulsaweblatam.com
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">WhatsApp de contacto</label>
              <input 
                type="text" 
                required
                placeholder="+56912345678"
                value={formData.whatsapp}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Categoría</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition text-sm"
              >
                <option value="servicios">Servicios Profesionales</option>
                <option value="comercio">Comercio / Tienda</option>
                <option value="gastronomia">Gastronomía</option>
                <option value="salud">Salud y Belleza</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Breve descripción del negocio</label>
            <textarea 
              rows={3}
              required
              placeholder="¿Qué ofrece tu marca a los clientes?"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition text-sm"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer text-base flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Generando vista previa...</span>
              </>
            ) : (
              'Ver Vista Previa de mi Web'
            )}
          </button>
        </form>
      </div>
    </main>
  )
}
