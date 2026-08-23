'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSiteAction } from './actions'

export default function CrearWebPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    businessName: '',
    subdomain: '',
    category: 'servicios',
    country: 'CL', // Por defecto Chile, ajustable a toda Latam
    whatsapp: '',
    description: '',
    template: 'profesional'
  })

  const handleSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')
    setFormData({ ...formData, subdomain: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      if (!formData.subdomain || formData.subdomain.length < 3) {
        throw new Error('El subdominio debe tener al menos 3 caracteres válidos.')
      }

      // Llamamos a la Server Action para guardar en Supabase de forma segura
      const result = await createSiteAction(formData)

      if (!result.success) {
        throw new Error(result.error || 'Error al registrar el sitio web.')
      }

      // Si todo sale bien, redirigimos al checkout pasando el subdominio y el país
      router.push(`/checkout?subdomain=${result.subdomain}&country=${result.country}`)

    } catch (error: any) {
      console.error('Error al procesar el formulario:', error)
      setErrorMsg(error.message || 'Ocurrió un error al crear la web. Inténtalo de nuevo.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Cabecera */}
        <div className="mb-8 text-center">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Paso 1 de 2 • ImpulsaWeb Latam
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
            Crea tu web profesional <span className="text-cyan-400">100% Gratis</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Únete a cientos de emprendedores en Latinoamérica que ya potencian sus ventas conectando su negocio directamente a WhatsApp.
          </p>
        </div>

        {/* Casos de Éxito / Prueba Social Rápida */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl text-center">
            <div className="text-cyan-400 font-bold text-lg">+1,500</div>
            <div className="text-xs text-slate-400 mt-0.5">Negocios digitalizados en Latam</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl text-center">
            <div className="text-cyan-400 font-bold text-lg">2 Minutos</div>
            <div className="text-xs text-slate-400 mt-0.5">Tiempo promedio de creación</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl text-center">
            <div className="text-cyan-400 font-bold text-lg">Cero Costo</div>
            <div className="text-xs text-slate-400 mt-0.5">Diseño y plantillas gratuitas</div>
          </div>
        </div>

        {/* Mensaje de error si ocurre alguno */}
        {errorMsg && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
            {errorMsg}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-6 md:p-10 rounded-2xl shadow-xl space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Nombre de tu Negocio o Marca</label>
              <input 
                type="text" 
                required
                placeholder="Ej: Barbería Don Pepe"
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
              {formData.subdomain && (
                <p className="text-xs text-cyan-400 mt-1.5">
                  Tu web estará en: <span className="underline">{formData.subdomain}.impulsaweblatam.com</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">País</label>
              <select 
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition text-sm"
              >
                <option value="CL">🇨🇱 Chile</option>
                <option value="MX">🇲🇽 México</option>
                <option value="CO">🇨🇴 Colombia</option>
                <option value="AR">🇦🇷 Argentina</option>
                <option value="PE">🇵🇪 Perú</option>
                <option value="OT">🌎 Otro País Latam</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Categoría</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition text-sm"
              >
                <option value="servicios">Profesionales / Servicios</option>
                <option value="oficios">Oficios / Barberos / Estética</option>
                <option value="gastronomia">Gastronomía / Cafetería</option>
                <option value="catalogo">Catálogo de Productos</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">WhatsApp (con código país)</label>
              <input 
                type="text" 
                required
                placeholder="Ej: +56912345678"
                value={formData.whatsapp}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Breve descripción de lo que haces</label>
            <textarea 
              rows={3}
              required
              placeholder="Ej: Cortes clásicos, modernos, barba y perfilado en el centro..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition resize-none text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Elige tu Plantilla Base</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => setFormData({...formData, template: 'profesional'})}
                className={`border rounded-xl p-4 cursor-pointer transition ${formData.template === 'profesional' ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-800 bg-slate-950 hover:border-slate-700'}`}
              >
                <div className="font-semibold text-sm text-white">Estilo Profesional</div>
                <div className="text-xs text-slate-400 mt-1">Ideal para consultores, abogados y servicios independientes.</div>
              </div>
              <div 
                onClick={() => setFormData({...formData, template: 'comercio'})}
                className={`border rounded-xl p-4 cursor-pointer transition ${formData.template === 'comercio' ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-800 bg-slate-950 hover:border-slate-700'}`}
              >
                <div className="font-semibold text-sm text-white">Estilo Comercial</div>
                <div className="text-xs text-slate-400 mt-1">Ideal para locales físicos, barberías y oficios locales.</div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition shadow-lg shadow-cyan-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer text-base"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Guardando en la base de datos...
                </>
              ) : (
                'Guardar y Continuar al Mantenimiento Semestral ($18 USD)'
              )}
            </button>
            <p className="text-center text-xs text-slate-500 mt-3">
              🔒 100% transparente. Sin contratos forzosos. Cancela cuando quieras.
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}
