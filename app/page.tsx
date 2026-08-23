export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', background: '#020617', color: '#fff', minHeight: '100vh' }}>
      <h1>ImpulsaWeb Latam - En Línea</h1>
      <p>El servidor está funcionando correctamente.</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/crear" style={{ background: '#06b6d4', color: '#000', padding: '10px 20px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
          Ir al Formulario de Creación
        </a>
      </div>
    </main>
  )
}
