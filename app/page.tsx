export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 md:p-12">
      <div className="max-w-3xl w-full text-center space-y-6">
        
        {/* Badge superior */}
        <div className="inline-block">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            ImpulsaWeb Latam • Plataforma para Emprendedores
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Potencia tu negocio en internet <span className="text-cyan-400">en minutos</span>
        </h1>

        {/* Descripción */}
        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
          Crea tu página web profesional conectada directamente a WhatsApp y escala tus ventas en toda Latinoamérica de forma rápida y sin complicaciones.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            href="/crear" 
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-cyan-500/20 text-center"
          >
            Crear mi Web Gratis
          </a>
          <a 
            href="/checkout" 
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 px-8 py-4 rounded-xl font-semibold transition text-center"
          >
            Ver Planes y Pagos
          </a>
        </div>

        {/* Pie informativo */}
        <div className="pt-12 border-t border-slate-900 text-xs text-slate-500">
          🚀 Optimizado para rendimiento y conversiones • Tecnología segura
        </div>

      </div>
    </main>
  )
}
