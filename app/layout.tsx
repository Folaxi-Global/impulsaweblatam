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
        {/* Cargamos Tailwind mediante CDN para garantizar que los estilos se apliquen de inmediato */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
