'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSiteAction } from './actions'

// --- 1. COMPONENTES DE LAS PLANTILLAS ULTRA-MEJORADOS ---

function TemplateAbogados({ data }: { data: any }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-slate-100 font-sans">
      {/* Header Ficticio de la Web */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">⚖️</span>
          <span className="font-serif font-bold text-white text-sm md:text-base tracking-wide">{data.businessName || 'Estudio Jurídico'}</span>
        </div>
        {data.whatsapp && (
          <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition shadow-md">
            Consulta Directa
          </a>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative px-6 py-16 md:py-24 text-center space-y-6 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-32 bg-amber-500/10 blur-3xl pointer-events-none" />
        <span className="inline-block text-amber-400 text-xs font-semibold tracking-widest uppercase border border-amber-400/30 px-4 py-1.5 rounded-full bg-amber-400/10">
          Asesoría Jurídica Profesional & Confidencial
        </span>
        <h1 className="text-3xl md:text-6xl font-serif font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          {data.businessName || 'Protegemos sus derechos y su patrimonio'}
        </h1>
        <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
          {data.description || 'Brindamos soluciones legales estratégicas con un firme compromiso ético, experiencia comprobada y defensa rigurosa.'}
        </p>
        <div className="pt-4">
          {data.whatsapp && (
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-2xl text-sm transition shadow-xl shadow-amber-500/20">
              <span>📅 Agendar Cita con un Abogado</span>
            </a>
          )}
        </div>
      </div>

      {/* Secciones de Especialidades */}
      <div className="px-6 py-12 bg-slate-950 border-t border-slate-900 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-bold tracking-widest text-amber-400 uppercase">Áreas de Práctica</h2>
          <h3 className="text-2xl font-serif font-bold text-white">¿En qué podemos ayudarle?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition space-y-3">
            <div className="text-amber-400 text-2xl">📜</div>
            <h4 className="font-bold text-white text-base">Derecho Civil</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Contratos, herencias, testamentos, bienes raíces y resolución de disputas patrimoniales.</p>
          </div>
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition space-y-3">
            <div className="text-amber-400 text-2xl">⚖️</div>
            <h4 className="font-bold text-white text-base">Derecho Laboral</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Despidos injustificados, finiquitos, negociaciones colectivas y representación judicial.</p>
          </div>
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition space-y-3">
            <div className="text-amber-400 text-2xl">🏢</div>
            <h4 className="font-bold text-white text-base">Asesoría Corporativa</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Constitución de sociedades, pactos de socios, cumplimiento normativo y contratos comerciales.</p>
          </div>
        </div>
      </div>

      {/* Franja de Confianza / Testimonio */}
      <div className="px-6 py-12 bg-slate-900/40 border-t border-slate-900 text-center space-y-4">
        <div className="text-amber-400 text-sm tracking-widest">★★★★★</div>
        <p className="text-sm md:text-base text-slate-300 italic max-w-xl mx-auto">"Un equipo sumamente profesional. Me brindaron claridad legal y tranquilidad desde el primer momento."</p>
        <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">— Cliente Verificado</span>
      </div>
    </div>
  )
}

function TemplateBarberia({ data }: { data: any }) {
  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl text-neutral-100 font-sans">
      {/* Header Ficticio */}
      <header className="bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-bold text-sm">✂️</span>
          <span className="font-black uppercase tracking-wider text-white text-sm md:text-base">{data.businessName || 'Barbería Moderna'}</span>
        </div>
        {data.whatsapp && (
          <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs px-4 py-2 rounded-xl transition shadow-md">
            Reservar Cita
          </a>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative px-6 py-16 md:py-24 text-center space-y-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950">
        <div className="absolute top-0 right-0 w-80 h-36 bg-cyan-500/10 blur-3xl pointer-events-none" />
        <span className="inline-block text-cyan-400 text-xs font-black tracking-widest uppercase border border-cyan-400/30 px-4 py-1.5 rounded-full bg-cyan-400/10">
          Barbershop & Grooming Studio Exclusivo
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight max-w-3xl mx-auto leading-none">
          {data.businessName || 'Estilo, Actitud y Precisión'}
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {data.description || 'Cortes clásicos, degradados impecables, ritual de barba con toalla caliente y la mejor experiencia para potenciar tu imagen.'}
        </p>
        <div className="pt-4">
          {data.whatsapp && (
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold px-8 py-4 rounded-2xl text-sm transition shadow-xl shadow-cyan-400/20">
              <span>🚀 Reservar Turno por WhatsApp</span>
            </a>
          )}
        </div>
      </div>

      {/* Menú de Servicios */}
      <div className="px-6 py-12 bg-neutral-950 border-t border-neutral-900 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-black tracking-widest text-cyan-400 uppercase">Servicios Populares</h2>
          <h3 className="text-2xl font-black text-white uppercase">Nuestras Tarifas</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800 hover:border-cyan-500/50 transition space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-extrabold text-white text-base">Corte Fade / Clásico</h4>
              <span className="text-cyan-400 text-xs font-bold bg-cyan-400/10 px-2.5 py-1 rounded-lg">Top</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">Asesoría de visagismo, lavado, corte personalizado con máquina o tijera y peinado profesional.</p>
          </div>
          <div className="bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800 hover:border-cyan-500/50 transition space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-extrabold text-white text-base">Perfilado de Barba</h4>
              <span className="text-cyan-400 text-xs font-bold bg-cyan-400/10 px-2.5 py-1 rounded-lg">Ritual</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">Arreglo detallado con toalla caliente, aceites esenciales nutritivos y acabado con navaja tradicional.</p>
          </div>
          <div className="bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800 hover:border-cyan-500/50 transition space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-extrabold text-white text-base">Combo Full VIP</h4>
              <span className="text-cyan-400 text-xs font-bold bg-cyan-400/10 px-2.5 py-1 rounded-lg">Completo</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">Corte completo + barba profesional + mascarilla facial express o tratamiento de limpieza profunda.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TemplatePanaderia({ data }: { data: any }) {
  return (
    <div className="bg-slate-950 border border-orange-900/30 rounded-3xl overflow-hidden shadow-2xl text-orange-50 font-sans">
      {/* Header Ficticio */}
      <header className="bg-orange-950/40 backdrop-blur-md border-b border-orange-900/30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold text-sm">🥖</span>
          <span className="font-bold tracking-wide text-white text-sm md:text-base">{data.businessName || 'Panadería Artesanal'}</span>
        </div>
        {data.whatsapp && (
          <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition shadow-md">
            Hacer Pedido
          </a>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative px-6 py-16 md:py-24 text-center space-y-6 bg-gradient-to-b from-orange-950/30 via-slate-950 to-slate-950">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-36 bg-orange-500/10 blur-3xl pointer-events-none" />
        <span className="inline-block text-orange-400 text-xs font-semibold tracking-widest uppercase border border-orange-400/30 px-4 py-1.5 rounded-full bg-orange-400/10">
          Horneado Diario & Tradición Familiar
        </span>
        <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          {data.businessName || 'El verdadero sabor del pan recién salido del horno'}
        </h1>
        <p className="text-orange-200/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {data.description || 'Elaboramos masas madre de fermentación lenta, bollería de mantequilla pura y pastelería fina para endulzar tus días.'}
        </p>
        <div className="pt-4">
          {data.whatsapp && (
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-8 py-4 rounded-2xl text-sm transition shadow-xl shadow-orange-500/20">
              <span>🛒 Pedir por WhatsApp</span>
            </a>
          )}
        </div>
      </div>

      {/* Catálogo de Especialidades */}
      <div className="px-6 py-12 bg-slate-950 border-t border-orange-900/20 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-bold tracking-widest text-orange-400 uppercase">Nuestras Creaciones</h2>
          <h3 className="text-2xl font-bold text-white">Especialidades del Día</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-orange-900/30 hover:border-orange-500/50 transition space-y-3">
            <div className="text-3xl mb-1">🍞</div>
            <h4 className="font-bold text-orange-400 text-base">Panes de Masa Madre</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Corteza crujiente, miga perfecta y fermentación natural de 24 horas para mayor sabor y digestibilidad.</p>
          </div>
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-orange-900/30 hover:border-orange-500/50 transition space-y-3">
            <div className="text-3xl mb-1">🥐</div>
            <h4 className="font-bold text-orange-400 text-base">Bollería & Medialunas</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Hojaldres dorados preparados con mantequilla de primera calidad, horneados cada mañana.</p>
          </div>
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-orange-900/30 hover:border-orange-500/50 transition space-y-3">
            <div className="text-3xl mb-1">🍰</div>
            <h4 className="font-bold text-orange-400 text-base">Pastelería Fina</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Tortas personalizadas, tartas de frutas frescas y postres de autor para tus eventos especiales.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


// --- 2. COMPONENTE PRINCIPAL ---

export default function CrearWebPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [step, setStep] = useState<'form' | 'preview'>('form')
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop')
  
  const [formData, setFormData] = useState({
    businessName: '',
    subdomain: '',
    category: 'servicios',
    country: 'CL',
    whatsapp: '',
    description: '',
    template: 'abogados'
  })

  const handleTemplateSelect = (templateId: string) => {
    let matchedCategory = 'servicios'
    if (templateId === 'barberia') matchedCategory = 'salud'
    if (templateId === 'panaderia') matchedCategory = 'gastronomia'

    setFormData({
      ...formData,
      template: templateId,
      category: matchedCategory
    })
  }

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

      const result = await createSiteAction(formData)

      if (!result.success) {
        throw new Error(result.error || 'Error al registrar el sitio web.')
      }

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

  // --- VISTA PREVIA EN VIVO CON SELECTOR DE DISPOSITIVO ---
  if (step === 'preview') {
    return (
      <div className="min-h-screen bg-slate-950 text-white relative pb-20">
        {/* Barra superior de control */}
        <div className="sticky top-0 z-50 bg-slate-900/95 border-b border-cyan-500/30 backdrop-blur-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <div>
              <p className="text-sm font-bold">Vista Previa: <span className="text-cyan-400">{formData.subdomain}.impulsaweblatam.com</span></p>
              <p className="text-xs text-slate-400">Estilo: <span className="uppercase text-slate-200">{formData.template}</span></p>
            </div>
          </div>

          {/* Selector de Dispositivo (Escritorio / Móvil) */}
          <div className="flex items-center bg-slate-950 border border-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setPreviewDevice('desktop')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                previewDevice === 'desktop' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              💻 Computador
            </button>
            <button
              onClick={() => setPreviewDevice('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                previewDevice === 'mobile' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              📱 Celular
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setStep('form')}
              className="text-xs text-slate-400 hover:text-white px-3 py-2 transition cursor-pointer"
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

        {/* Contenedor Adaptativo de Vista Previa */}
        <div className={`mx-auto p-4 md:p-8 transition-all duration-300 ${
          previewDevice === 'mobile' ? 'max-w-md' : 'max-w-4xl'
        }`}>
          <div className={previewDevice === 'mobile' ? 'border-4 border-slate-800 rounded-[40px] overflow-hidden bg-slate-950 shadow-2xl p-2' : ''}>
            {formData.template === 'abogados' && <TemplateAbogados data={formData} />}
            {formData.template === 'barberia' && <TemplateBarberia data={formData} />}
            {formData.template === 'panaderia' && <TemplatePanaderia data={formData} />}
          </div>
        </div>

        {/* Botón flotante de WhatsApp */}
        {formData.whatsapp && (
          <a 
            href={`https://wa.me/${formData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-emerald-500 text-slate-950 p-4 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm cursor-pointer hover:bg-emerald-400 transition z-45"
          >
            💬 Escribir al WhatsApp
          </a>
        )}
      </div>
    )
  }

  // --- FORMULARIO DE CREACIÓN ---
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
                { id: 'abogados', name: '⚖️ Abogados', desc: 'Formal y enfocado en confianza y citas' },
                { id: 'barberia', name: '✂️ Barbería', desc: 'Moderno y visual para reservas' },
                { id: 'panaderia', name: '🥖 Panadería', desc: 'Cálido y enfocado en productos' }
              ].map((t) => (
                <div 
                  key={t.id}
                  onClick={() => handleTemplateSelect(t.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition ${
                    formData.template === t.id 
                      ? 'bg-cyan-500/10 border-cyan-500 text-white shadow-md shadow-cyan-500/10' 
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
