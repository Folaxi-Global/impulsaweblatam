'use client'

import { useState } from 'react'
import { generateVideoFromPromptAction } from './actions'

interface VideoItem {
  url: string
  prompt: string
  timestamp: string
}

export default function VideoStudioPage() {
  const [promptText, setPromptText] = useState('')
  const [videoStyle, setVideoStyle] = useState('cinematic')
  const [loading, setLoading] = useState(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null)
  const [history, setHistory] = useState<VideoItem[]>([])
  const [errorMsg, setErrorMsg] = useState('')

  const handleGenerateVideo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!promptText.trim()) return

    setLoading(true)
    setErrorMsg('')
    setCurrentVideoUrl(null)

    try {
      const result = await generateVideoFromPromptAction(promptText, videoStyle)

      if (!result.success) {
        throw new Error(result.error || 'Error al generar el video.')
      }

      const videoUrl = result.url!
      setCurrentVideoUrl(videoUrl)

      setHistory(prev => [
        { url: videoUrl, prompt: promptText, timestamp: new Date().toLocaleTimeString() },
        ...prev
      ])
    } catch (error: any) {
      console.error('Error en Studio de Video:', error)
      setErrorMsg(error.message || 'Ocurrió un error inesperado al renderizar el video.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    alert(`¡Enlace del video copiado para ${label}!`)
  }

  const shareOnWhatsApp = (url: string, prompt: string) => {
    const text = encodeURIComponent(`¡Mira este video generado con IA en nuestra plataforma!\n\n"${prompt}"\n\nMira el video aquí: ${url}`)
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank')
  }

  const shareOnFacebook = (url: string) => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400')
  }

  const shareOnLinkedIn = (url: string) => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400')
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Vartens Video Studio • Motor IA Todo en Uno
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
            Generador de Video con <span className="text-cyan-400">IA & CDN Bunny.net</span>
          </h1>
        </div>

        {errorMsg && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
            {errorMsg}
          </div>
        )}

        {/* Formulario de Prompt para el Video */}
        <form onSubmit={handleGenerateVideo} className="bg-slate-900 border border-slate-800 p-6 md:p-10 rounded-2xl shadow-xl space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Estilo visual del video</label>
            <select 
              value={videoStyle}
              onChange={(e) => setVideoStyle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition text-sm"
            >
              <option value="cinematic">Cinematográfico / Profesional</option>
              <option value="reels">Vertical (Reels / TikTok / Shorts)</option>
              <option value="corporate">Corporativo / Explicativo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Escribe tu Prompt (Guion y Descripción del Video)</label>
            <textarea 
              rows={5}
              required
              placeholder="Ej: Un video dinámico explicando el lanzamiento de nuestra nueva plataforma digital con voz en off profesional y animaciones..."
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
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
                <span>Renderizando video y subiendo a Bunny...</span>
              </>
            ) : (
              'Generar Video en Pantalla'
            )}
          </button>
        </form>

        {/* REPRODUCTOR DE VIDEO EN PANTALLA Y REDES SOCIALES */}
        {currentVideoUrl && (
          <div className="mt-8 bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <h3 className="text-lg font-semibold text-cyan-400">¡Tu Video Está Listo en Pantalla!</h3>
              <button 
                onClick={() => handleCopy(currentVideoUrl, 'el Portapapeles')}
                className="bg-slate-800 hover:bg-slate-700 text-xs px-4 py-2 rounded-xl text-slate-300 transition font-medium"
              >
                Copiar URL CDN .mp4
              </button>
            </div>
            
            <p className="text-xs text-slate-400 break-all bg-slate-950 p-3 rounded-xl border border-slate-800">
              {currentVideoUrl}
            </p>
            
            {/* Reproductor de Video Oficial */}
            <div className="pt-2 flex justify-center bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
              <video controls className="w-full max-h-[450px] object-contain">
                <source src={currentVideoUrl} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>

            {/* BARRA DE REDES SOCIALES */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Compartir video en Redes Sociales:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                <button 
                  onClick={() => shareOnWhatsApp(currentVideoUrl, promptText)}
                  className="bg-emerald-600/25 hover:bg-emerald-600/40 text-emerald-400 border border-emerald-500/30 text-xs font-medium py-2.5 px-3 rounded-xl transition flex items-center justify-center"
                >
                  WhatsApp
                </button>

                <button 
                  onClick={() => handleCopy(currentVideoUrl, 'TikTok')}
                  className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-medium py-2.5 px-3 rounded-xl transition flex items-center justify-center"
                >
                  TikTok
                </button>

                <button 
                  onClick={() => handleCopy(currentVideoUrl, 'Instagram')}
                  className="bg-pink-600/25 hover:bg-pink-600/40 text-pink-400 border border-pink-500/30 text-xs font-medium py-2.5 px-3 rounded-xl transition flex items-center justify-center"
                >
                  Instagram
                </button>

                <button 
                  onClick={() => shareOnFacebook(currentVideoUrl)}
                  className="bg-blue-600/25 hover:bg-blue-600/40 text-blue-400 border border-blue-500/30 text-xs font-medium py-2.5 px-3 rounded-xl transition flex items-center justify-center"
                >
                  Facebook
                </button>

                <button 
                  onClick={() => shareOnLinkedIn(currentVideoUrl)}
                  className="col-span-2 sm:col-span-1 bg-sky-600/25 hover:bg-sky-600/40 text-sky-400 border border-sky-500/30 text-xs font-medium py-2.5 px-3 rounded-xl transition flex items-center justify-center"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
