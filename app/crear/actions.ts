'use client'

import { useState } from 'react'
import { processAndStoreMediaAction } from './actions'

interface MediaItem {
  url: string
  script: string
  timestamp: string
}

export default function StudioPage() {
  const [scriptText, setScriptText] = useState('')
  const [voiceId, setVoiceId] = useState('21m00Tcm4TlvDq8ikWAM') // Voz por defecto
  const [loading, setLoading] = useState(false)
  const [currentMedia, setCurrentMedia] = useState<string | null>(null)
  const [history, setHistory] = useState<MediaItem[]>([])
  const [errorMsg, setErrorMsg] = useState('')
  const [copied, setCopied] = useState(false)

  const handleGenerateMedia = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!scriptText.trim()) return

    setLoading(true)
    setErrorMsg('')
    setCurrentMedia(null)
    setCopied(false)

    try {
      // Enviamos el prompt y la voz seleccionada al orquestador en el servidor
      const result = await processAndStoreMediaAction(scriptText, voiceId)

      if (!result.success) {
        throw new Error(result.error || 'Error al procesar el contenido multimedia.')
      }

      const newUrl = result.url!
      setCurrentMedia(newUrl)

      // Guardamos en el historial de la sesión actual
      setHistory(prev => [
        { url: newUrl, script: scriptText, timestamp: new Date().toLocaleTimeString() },
        ...prev
      ])
    } catch (error: any) {
      console.error('Error en Studio:', error)
      setErrorMsg(error.message || 'Ocurrió un error inesperado en la producción.')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnWhatsApp = (url: string, script: string) => {
    const text = encodeURIComponent(`¡Mira este contenido generado en Vartens Studio Pro!\n\n"${script}"\n\nEscúchalo aquí: ${url}`)
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Vartens Studio Pro • Motor de IA y CDN Global
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
            Generador Todo en Uno con <span className="text-cyan-400">ElevenLabs & Bunny.net</span>
          </h1>
        </div>

        {errorMsg && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
            {errorMsg}
          </div>
        )}

        {/* Formulario de Entrada / Prompt */}
        <form onSubmit={handleGenerateMedia} className="bg-slate-900 border border-slate-800 p-6 md:p-10 rounded-2xl shadow-xl space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Seleccionar Perfil de Voz IA</label>
            <select 
              value={voiceId}
              onChange={(e) => setVoiceId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition text-sm"
            >
              <option value="21m00Tcm4TlvDq8ikWAM">Rachel (Clásica / Clara)</option>
              <option value="AZnzlk1XvdvUeBnXmlld">Domi (Dinámica / Comercial)</option>
              <option value="EXAVITQu4vr4xnSDxMaL">Bella (Suave / Narrativa)</option>
              <option value="ErXwobaYiN019PkySvjV">Antoni (Masculina / Profesional)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Escribe tu Prompt o Guion Completo</label>
            <textarea 
              rows={5}
              required
              placeholder="Ej: Hola a todos, hoy lanzamos nuestra nueva plataforma con envíos a todo el país..."
              value={scriptText}
              onChange={(e) => setScriptText(e.target.value)}
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
                <span>Procesando y subiendo a la nube de Bunny...</span>
              </>
            ) : (
              'Generar Contenido en Pantalla'
            )}
          </button>
        </form>

        {/* Reproductor Activo en Pantalla y Botones de Redes Sociales */}
        {currentMedia && (
          <div className="mt-8 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <h3 className="text-lg font-semibold text-cyan-400">¡Contenido Listo en Pantalla!</h3>
              <div className="flex gap-2 w-full sm:w-auto">
                <button 
                  onClick={() => copyToClipboard(currentMedia)}
                  className="flex-1 sm:flex-none bg-slate-800 hover:bg-slate-700 text-xs px-3 py-2 rounded-lg text-slate-300 transition"
                >
                  {copied ? '¡Enlace copiado!' : 'Copiar URL CDN'}
                </button>
                <button 
                  onClick={() => shareOnWhatsApp(currentMedia, scriptText)}
                  className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-500 text-xs px-3 py-2 rounded-lg text-white font-medium transition flex items-center justify-center gap-1"
                >
                  Compartir en WhatsApp
                </button>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 break-all bg-slate-950 p-3 rounded-lg border border-slate-800">
              {currentMedia}
            </p>
            
            <div className="pt-2">
              <audio controls className="w-full">
                <source src={currentMedia} type="audio/mpeg" />
                Tu navegador no soporta el elemento de reproducción.
              </audio>
            </div>
          </div>
        )}

        {/* Historial de Sesión */}
        {history.length > 1 && (
          <div className="mt-10 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
            <h3 className="text-md font-semibold text-slate-300">Historial Reciente de Producción</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
              {history.slice(1).map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                  <div className="truncate">
                    <p className="text-xs text-slate-400 truncate">&ldquo;{item.script}&rdquo;</p>
                    <span className="text-[10px] text-cyan-500">{item.timestamp}</span>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-lg text-white transition"
                    >
                      Abrir
                    </a>
                    <button 
                      onClick={() => shareOnWhatsApp(item.url, item.script)}
                      className="bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs px-3 py-1.5 rounded-lg transition"
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
