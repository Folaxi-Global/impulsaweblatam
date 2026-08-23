export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
      
      {/* Efectos de fondo ambiental avanzados */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-16 relative z-10">
        
        {/* Header / Navegación Superior */}
        <nav className="flex items-center justify-between pb-12 border-b border-slate-900/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse" />
            <span className="font-extrabold tracking-tight text-xl text-white">
              ImpulsaWeb<span className="text-cyan-400">Latam</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="/checkout" 
              className="text-xs md:text-sm text-slate-300 hover:text-white px-3 py-2 transition font-medium"
            >
              Planes y Precios
            </a>
            <a 
              href="/crear" 
              className="text-xs md:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-5 py-2.5 rounded-xl font-bold transition shadow-lg shadow-cyan-500/20"
            >
              Empezar Gratis
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto pt-16 md:pt-24 space-y-8">
          
          <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-cyan-500/30 px-4 py-2 rounded-full shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase">
              🚀 La plataforma líder para emprendedores en Latam
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
            Crea tu sitio web profesional y <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">conecta con WhatsApp</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Lanza tu presencia digital en menos de 2 minutos. Sin código, sin configuraciones complejas y optimizado para potenciar tus ventas locales y regionales.
          </p>

          {/* Botones de acción principales con mejor jerarquía */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a 
              href="/crear" 
              className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-8 py-4 rounded-xl font-extrabold transition shadow-xl shadow-cyan-500/25 text-center flex items-center justify-center gap-2 group text-base"
            >
              Crear mi Web Gratis Ahora
              <span className="group-hover:translate-x-1.5 transition-transform">→</span>
            </a>
            <a 
              href="/checkout" 
              className="w-full sm:w-auto bg-slate-900/90 hover:bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 px-8 py-4 rounded-xl font-semibold transition text-center text-base"
            >
              Conocer Costos y Mantenimiento
            </a>
          </div>

          {/* Estadísticas rápidas de confianza */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto border-t border-slate-900/60 mt-12">
            <div className="text-center p-3">
              <div className="text-2xl md:text-3xl font-extrabold text-cyan-400">100%</div>
              <div className="text-xs text-slate-400 mt-1">Optimizado para móviles</div>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl md:text-3xl font-extrabold text-cyan-400">2 Min</div>
              <div className="text-xs text-slate-400 mt-1">Tiempo de despliegue</div>
            </div>
            <div className="col-span-2 md:col-span-1 text-center p-3">
              <div className="text-2xl md:text-3xl font-extrabold text-cyan-400">Directo</div>
              <div className="text-xs text-slate-400 mt-1">Ventas a tu WhatsApp</div>
            </div>
          </div>
        </div>

        {/* Tarjetas de Características (Grid con efectos de borde degradado) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20">
          
          <div className="group bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/50 p-8 rounded-2xl backdrop-blur-md transition duration-300 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="font-bold text-xl text-white mb-3">Velocidad Extrema</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Infraestructura moderna en la nube que garantiza una carga instantánea para todos tus clientes potenciales en cualquier dispositivo.
            </p>
          </div>

          <div className="group bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/50 p-8 rounded-2xl backdrop-blur-md transition duration-300 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
              💬
            </div>
            <h3 className="font-bold text-xl text-white mb-3">Conversión a WhatsApp</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Botones de contacto estratégico diseñados para convertir visitantes casuales en compradores directos a través de mensajería instantánea.
            </p>
          </div>

          <div className="group bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/50 p-8 rounded-2xl backdrop-blur-md transition duration-300 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
              🌎
            </div>
            <h3 className="font-bold text-xl text-white mb-3">Hecho para Latinoamérica</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Pensado estructuralmente para las necesidades comerciales de emprendedores en Chile, México, Colombia y toda la región.
            </p>
          </div>

        </div>

        {/* Footer Minimalista */}
        <div className="mt-28 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© ImpulsaWeb Latam. Impulsando negocios digitales.</p>
          <div className="flex gap-6">
            <a href="/crear" className="hover:text-cyan-400 transition">Crear Web</a>
            <a href="/checkout" className="hover:text-cyan-400 transition">Planes y Checkout</a>
          </div>
        </div>

      </div>
    </main>
  )
}
