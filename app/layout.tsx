import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ImpulsaWeb Latam | Plataforma para Emprendedores',
  description: 'Crea tu página web profesional conectada a WhatsApp en minutos. Especial para emprendedores en Latinoamérica.',
  keywords: ['crear web gratis', 'emprendedores latam', 'páginas web WhatsApp', 'ImpulsaWeb Latam'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-slate-950 text-white antialiased selection:bg-cyan-500 selection:text-slate-950 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
