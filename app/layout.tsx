import './globals.css'

export const metadata = {
  title: 'ImpulsaWeb Latam | Plataforma para Emprendedores',
  description: 'Crea tu página web profesional conectada a WhatsApp en minutos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Sin scripts externos de CDN, Tailwind se compila de forma nativa */}
      </head>
      <body className="bg-slate-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
