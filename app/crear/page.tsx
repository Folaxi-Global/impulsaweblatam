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
    country: 'CL',
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

      const result = await createSiteAction(formData)

      if (!result.success) {
        throw new Error(result.error || 'Error al registrar el sitio web.')
      }

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
        <div className="mb-8 text-center">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Paso 1 de 2 • ImpulsaWeb Latam
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
            Crea tu web profesional <span className="text-cyan-400">100% Gratis</span>
          </h1>
        </div>

        {errorMsg && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-6 md:p-10 rounded-2xl shadow-xl space-y-6">
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
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer text-base"
          >
            {loading ? 'Guardando...' : 'Guardar y Continuar al Mantenimiento ($18 USD)'}
          </button>
        </form>
      </div>
    </main>
  )
}
