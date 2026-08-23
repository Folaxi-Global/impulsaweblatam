export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold">ImpulsaWeb Latam</h1>
        <p className="text-slate-400">Plataforma de creación de páginas web para emprendedores.</p>
        <div className="flex justify-center gap-4 pt-4">
          <a href="/crear" className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-lg font-semibold transition">
            Crear mi Web
          </a>
          <a href="/checkout" className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg font-semibold transition">
            Ver Planes
          </a>
        </div>
      </div>
    </main>
  )
}
