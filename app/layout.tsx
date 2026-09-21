import './globals.css'

export const metadata = {
  title: 'ImpulsaWeb Latam | Crea tu sitio web profesional y conecta WhatsApp',
  description: 'La plataforma líder para emprendedores en Latam. Crea tu página web profesional conectada a WhatsApp y redes sociales en minutos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Script oficial de Tailwind CSS por CDN para garantizar estilos inmediatos */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
