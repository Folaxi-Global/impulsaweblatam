'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSiteAction } from './actions'

// --- 1. PLANTILLAS PROFESIONALES CON IMÁGENES DE FONDO CINEMATOGRÁFICAS ---

function TemplateAbogados({ data }: { data: any }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl text-slate-100 font-sans w-full max-w-full">
      <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 md:px-6 py-3.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm md:text-base shadow-sm shrink-0">⚖️</span>
          <span className="font-serif font-bold text-white text-sm md:text-base tracking-wide truncate">{data.businessName || 'Estudio Jurídico'}</span>
        </div>
        <div className="flex items-center gap-3">
          {data.instagram && (
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-xs font-semibold hidden sm:inline-block">
              📸 Instagram
            </a>
          )}
          {data.whatsapp && (
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition shadow-[0_0_15px_rgba(245,158,11,0.4)] animate-pulse shrink-0">
              Consulta Directa
            </a>
          )}
        </div>
      </header>

      {/* Hero con Imagen de Fondo Profesional y Overlay Oscuro */}
      <div className="relative px-4 sm:px-6 py-16 md:py-28 text-center space-y-5 md:space-y-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
        
        <div className="relative z-10 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block text-amber-400 text-[11px] md:text-xs font-semibold tracking-widest uppercase border border-amber-400/40 px-3.5 py-1.5 rounded-full bg-amber-400/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            Defensa Legal Estratégica & Confidencial
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight px-2">
            {data.businessName || 'Protegemos sus derechos y su patrimonio'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light px-2">
            Años de trayectoria defendiendo con firmeza los intereses de nuestros clientes ante tribunales con máxima rigurosidad ética.
          </p>
          <div className="pt-2 md:pt-4 px-4">
            {data.whatsapp && (
              <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm transition shadow-[0_0_25px_rgba(245,158,11,0.5)] animate-pulse">
                <span>📅 Agendar Asesoría Jurídica</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Visión & Misión */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-slate-900/40 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="text-amber-400 font-serif font-bold text-lg">Nuestra Misión</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">Garantizar una defensa jurídica de excelencia, protegiendo los derechos fundamentales y el patrimonio de nuestros representados con honestidad y eficacia.</p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="text-amber-400 font-serif font-bold text-lg">Nuestra Visión</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">Ser el estudio jurídico de referencia en la resolución de conflictos complejos, reconocidos por la innovación legal y el éxito comprobado en cada caso.</p>
          </div>
        </div>
      </div>

      {/* Áreas de Práctica */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-slate-950 border-t border-slate-900 space-y-6 md:space-y-8">
        <div className="text-center space-y-1.5">
          <h2 className="text-[11px] md:text-xs font-bold tracking-widest text-amber-400 uppercase">Especialidades</h2>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white">Soluciones Legales Especializadas</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-slate-900/60 p-5 md:p-6 rounded-2xl border border-slate-800 hover:border-amber-500/80 transition space-y-2.5">
            <div className="text-amber-400 text-xl md:text-2xl">📜</div>
            <h4 className="font-bold text-white text-sm md:text-base">Derecho Civil</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Contratos, herencias, testamentos, bienes raíces y resolución de disputas patrimoniales complejas.</p>
          </div>
          <div className="bg-slate-900/60 p-5 md:p-6 rounded-2xl border border-slate-800 hover:border-amber-500/80 transition space-y-2.5">
            <div className="text-amber-400 text-xl md:text-2xl">⚖️</div>
            <h4 className="font-bold text-white text-sm md:text-base">Derecho Laboral</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Despidos injustificados, finiquitos, negociaciones colectivas y representación judicial en tribunales.</p>
          </div>
          <div className="bg-slate-900/60 p-5 md:p-6 rounded-2xl border border-slate-800 hover:border-amber-500/80 transition space-y-2.5 sm:col-span-2 md:col-span-1">
            <div className="text-amber-400 text-xl md:text-2xl">🏢</div>
            <h4 className="font-bold text-white text-sm md:text-base">Asesoría Corporativa</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Constitución de sociedades, pactos de socios, cumplimiento normativo y contratos comerciales seguros.</p>
          </div>
        </div>
      </div>

      <footer className="bg-slate-950 border-t border-slate-900 px-6 py-8 text-center space-y-4">
        {data.instagram && (
          <div className="flex justify-center items-center gap-2 text-xs text-amber-400">
            <span>Síguenos en redes:</span>
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="underline font-bold">
              {data.instagram}
            </a>
          </div>
        )}
        <p className="text-xs text-slate-400 font-medium">© {new Date().getFullYear()} {data.businessName || 'Estudio Jurídico'}. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 text-[11px] text-slate-500">
          <span>Términos y Condiciones</span>
          <span>•</span>
          <span>Política de Privacidad</span>
        </div>
      </footer>
    </div>
  )
}

function TemplateBarberia({ data }: { data: any }) {
  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl text-neutral-100 font-sans w-full max-w-full">
      <header className="bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 px-4 md:px-6 py-3.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold text-sm md:text-base shadow-sm shrink-0">✂️</span>
          <span className="font-black uppercase tracking-wider text-white text-sm md:text-base truncate">{data.businessName || 'Barbería Moderna'}</span>
        </div>
        <div className="flex items-center gap-3">
          {data.instagram && (
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold hidden sm:inline-block">
              📸 Instagram
            </a>
          )}
          {data.whatsapp && (
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-[0_0_15px_rgba(6,182,212,0.4)] animate-pulse shrink-0">
              Reservar Cita
            </a>
          )}
        </div>
      </header>

      {/* Hero */}
      <div className="relative px-4 sm:px-6 py-16 md:py-28 text-center space-y-5 md:space-y-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-[2px]" />

        <div className="relative z-10 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block text-cyan-400 text-[11px] md:text-xs font-black tracking-widest uppercase border border-cyan-400/40 px-3.5 py-1.5 rounded-full bg-cyan-400/10 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            Barbershop & Grooming Studio Exclusivo
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none px-2">
            {data.businessName || 'Estilo, Actitud y Precisión'}
          </h1>
          <p className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2">
            Cortes clásicos, degradados impecables, ritual de barba con toalla caliente y la mejor experiencia para potenciar tu imagen personal.
          </p>
          <div className="pt-2 md:pt-4 px-4">
            {data.whatsapp && (
              <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-extrabold px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm transition shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-pulse">
                <span>🚀 Reservar Turno por WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-neutral-900/40 border-t border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-2">
            <h3 className="text-cyan-400 font-bold text-base uppercase tracking-wider">Nuestra Propuesta</h3>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">Brindar una experiencia de barbería de primer nivel, fusionando técnicas tradicionales con las últimas tendencias de la moda urbana masculina.</p>
          </div>
          <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-2">
            <h3 className="text-cyan-400 font-bold text-base uppercase tracking-wider">Compromiso de Calidad</h3>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">Utilizamos productos de grooming importados, esterilización rigurosa y un ambiente con música y bebidas para que disfrutes tu visita.</p>
          </div>
        </div>
      </div>

      {/* Tarifas y Servicios */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-neutral-950 border-t border-neutral-900 space-y-6 md:space-y-8">
        <div className="text-center space-y-1.5">
          <h2 className="text-[11px] md:text-xs font-black tracking-widest text-cyan-400 uppercase">Servicios Profesionales</h2>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase">Nuestras Tarifas & Estilos</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-neutral-900/80 p-5 md:p-6 rounded-2xl border border-neutral-800 hover:border-cyan-500/80 transition shadow-lg space-y-2.5">
            <div className="flex justify-between items-center">
              <h4 className="font-extrabold text-white text-sm md:text-base">Corte Fade / Clásico</h4>
              <span className="text-cyan-400 text-[11px] font-bold bg-cyan-400/10 px-2.5 py-0.5 rounded-lg border border-cyan-400/20">Top</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">Asesoría de visagismo, lavado, corte personalizado con máquina o tijera y peinado profesional.</p>
          </div>
          <div className="bg-neutral-900/80 p-5 md:p-6 rounded-2xl border border-neutral-800 hover:border-cyan-500/80 transition shadow-lg space-y-2.5">
            <div className="flex justify-between items-center">
              <h4 className="font-extrabold text-white text-sm md:text-base">Perfilado de Barba</h4>
              <span className="text-cyan-400 text-[11px] font-bold bg-cyan-400/10 px-2.5 py-0.5 rounded-lg border border-cyan-400/20">Ritual</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">Arreglo detallado con toalla caliente, aceites esenciales nutritivos y acabado con navaja tradicional.</p>
          </div>
          <div className="bg-neutral-900/80 p-5 md:p-6 rounded-2xl border border-neutral-800 hover:border-cyan-500/80 transition shadow-lg space-y-2.5 sm:col-span-2 md:col-span-1">
            <div className="flex justify-between items-center">
              <h4 className="font-extrabold text-white text-sm md:text-base">Combo Full VIP</h4>
              <span className="text-cyan-400 text-[11px] font-bold bg-cyan-400/10 px-2.5 py-0.5 rounded-lg border border-cyan-400/20">Completo</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">Corte completo + barba profesional + mascarilla facial express o tratamiento de limpieza profunda.</p>
          </div>
        </div>
      </div>

      <footer className="bg-neutral-950 border-t border-neutral-900 px-6 py-8 text-center space-y-3">
        {data.instagram && (
          <div className="flex justify-center items-center gap-2 text-xs text-cyan-400">
            <span>Síguenos en redes:</span>
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="underline font-bold">
              {data.instagram}
            </a>
          </div>
        )}
        <p className="text-xs text-neutral-400 font-medium">© {new Date().getFullYear()} {data.businessName || 'Barbería Moderna'}. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 text-[11px] text-neutral-500">
          <span>Términos de Servicio</span>
          <span>•</span>
          <span>Política de Privacidad</span>
        </div>
      </footer>
    </div>
  )
}

function TemplatePanaderia({ data }: { data: any }) {
  return (
    <div className="bg-slate-950 border border-orange-900/30 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl text-orange-50 font-sans w-full max-w-full">
      <header className="bg-orange-950/40 backdrop-blur-md border-b border-orange-900/30 px-4 md:px-6 py-3.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold text-sm md:text-base shadow-sm shrink-0">🥖</span>
          <span className="font-bold tracking-wide text-white text-sm md:text-base truncate">{data.businessName || 'Panadería Artesanal'}</span>
        </div>
        <div className="flex items-center gap-3">
          {data.instagram && (
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-xs font-semibold hidden sm:inline-block">
              📸 Instagram
            </a>
          )}
          {data.whatsapp && (
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition shadow-[0_0_15px_rgba(249,115,22,0.4)] animate-pulse shrink-0">
              Hacer Pedido
            </a>
          )}
        </div>
      </header>

      {/* Hero */}
      <div className="relative px-4 sm:px-6 py-16 md:py-28 text-center space-y-5 md:space-y-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />

        <div className="relative z-10 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block text-orange-400 text-[11px] md:text-xs font-semibold tracking-widest uppercase border border-orange-400/40 px-3.5 py-1.5 rounded-full bg-orange-400/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            Horneado Diario & Tradición Familiar
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight px-2">
            {data.businessName || 'El verdadero sabor del pan recién salido del horno'}
          </h1>
          <p className="text-orange-200/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2">
            Elaboramos masas madre de fermentación lenta, bollería de mantequilla pura y pastelería fina para endulzar tus mejores momentos.
          </p>
          <div className="pt-2 md:pt-4 px-4">
            {data.whatsapp && (
              <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-extrabold px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm transition shadow-[0_0_30px_rgba(249,115,22,0.5)] animate-pulse">
                <span>🛒 Pedir por WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Visión y Propósito */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-slate-900/40 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-950 p-6 rounded-2xl border border-orange-900/30 space-y-2">
            <h3 className="text-orange-400 font-bold text-base uppercase tracking-wider">Tradición y Calidad</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">Rescatamos las recetas de antaño utilizando harinas seleccionadas y procesos artesanales sin aditivos artificiales.</p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-orange-900/30 space-y-2">
            <h3 className="text-orange-400 font-bold text-base uppercase tracking-wider">Compromiso Diario</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">Nuestro propósito es llenar cada hogar con el aroma y la frescura de un producto recién horneado cada mañana.</p>
          </div>
        </div>
      </div>

      {/* Catálogo de Productos */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-slate-950 border-t border-orange-900/20 space-y-6 md:space-y-8">
        <div className="text-center space-y-1.5">
          <h2 className="text-[11px] md:text-xs font-bold tracking-widest text-orange-400 uppercase">Nuestras Creaciones</h2>
          <h3 className="text-xl md:text-2xl font-bold text-white">Especialidades del Día</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-slate-900/80 p-5 md:p-6 rounded-2xl border border-orange-900/30 hover:border-orange-500/80 transition shadow-lg space-y-2.5">
            <div className="text-2xl md:text-3xl mb-1">🍞</div>
            <h4 className="font-bold text-orange-400 text-sm md:text-base">Panes de Masa Madre</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Corteza crujiente, miga perfecta y fermentación natural de 24 horas para mayor sabor y digestibilidad.</p>
          </div>
          <div className="bg-slate-900/80 p-5 md:p-6 rounded-2xl border border-orange-900/30 hover:border-orange-500/80 transition shadow-lg space-y-2.5">
            <div className="text-2xl md:text-3xl mb-1">🥐</div>
            <h4 className="font-bold text-orange-400 text-sm md:text-base">Bollería & Medialunas</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Hojaldres dorados preparados con mantequilla de primera calidad, horneados cada mañana.</p>
          </div>
          <div className="bg-slate-900/80 p-5 md:p-6 rounded-2xl border border-orange-900/30 hover:border-orange-500/80 transition shadow-lg space-y-2.5 sm:col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl mb-1">🍰</div>
            <h4 className="font-bold text-orange-400 text-sm md:text-base">Pastelería Fina</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Tortas personalizadas, tartas de frutas frescas y postres de autor para tus eventos especiales.</p>
          </div>
        </div>
      </div>

      <footer className="bg-slate-950 border-t border-orange-900/30 px-6 py-8 text-center space-y-3">
        {data.instagram && (
          <div className="flex justify-center items-center gap-2 text-xs text-orange-400">
            <span>Síguenos en redes:</span>
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="underline font-bold">
              {data.instagram}
            </a>
          </div>
        )}
        <p className="text-xs text-slate-400 font-medium">© {new Date().getFullYear()} {data.businessName || 'Panadería Artesanal'}. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 text-[11px] text-slate-500">
          <span>Términos y Condiciones</span>
          <span>•</span>
          <span>Política de Privacidad</span>
        </div>
      </footer>
    </div>
  )
}

function TemplateGimnasio({ data }: { data: any }) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl text-zinc-100 font-sans w-full max-w-full">
      <header className="bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-4 md:px-6 py-3.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-lime-400/20 border border-lime-400/40 flex items-center justify-center text-lime-400 font-extrabold text-sm md:text-base shadow-sm shrink-0">🏋️</span>
          <span className="font-black uppercase tracking-wider text-white text-sm md:text-base truncate">{data.businessName || 'Elite Fitness Center'}</span>
        </div>
        <div className="flex items-center gap-3">
          {data.instagram && (
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 text-xs font-semibold hidden sm:inline-block">
              📸 Instagram
            </a>
          )}
          {data.whatsapp && (
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-[0_0_15px_rgba(163,230,53,0.4)] animate-pulse shrink-0">
              ¡Inscríbete!
            </a>
          )}
        </div>
      </header>

      {/* Hero */}
      <div className="relative px-4 sm:px-6 py-16 md:py-28 text-center space-y-5 md:space-y-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-[2px]" />

        <div className="relative z-10 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block text-lime-400 text-[11px] md:text-xs font-black tracking-widest uppercase border border-lime-400/40 px-3.5 py-1.5 rounded-full bg-lime-400/10 shadow-[0_0_15px_rgba(163,230,53,0.2)]">
            Transforma tu Cuerpo & Mente
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none px-2">
            {data.businessName || 'Alcanza tu Máximo Rendimiento'}
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2">
            Equipamiento de alta gama, entrenadores expertos, clases grupales dinámicas y un ambiente diseñado para llevarte al siguiente nivel.
          </p>
          <div className="pt-2 md:pt-4 px-4">
            {data.whatsapp && (
              <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-zinc-950 font-black px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm transition shadow-[0_0_30px_rgba(163,230,53,0.5)] animate-pulse">
                <span>🔥 Solicitar Pase Diario / Matrícula</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-zinc-900/40 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-2">
            <h3 className="text-lime-400 font-bold text-base uppercase tracking-wider">Nuestra Visión Fitness</h3>
            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">Crear una comunidad activa y saludable, motivando a cada persona a superar sus límites físicos y mentales a través del entrenamiento inteligente.</p>
          </div>
          <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-2">
            <h3 className="text-lime-400 font-bold text-base uppercase tracking-wider">Filosofía de Trabajo</h3>
            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">Disciplina, constancia y soporte personalizado. No importa tu nivel actual, tenemos el programa exacto para tus metas.</p>
          </div>
        </div>
      </div>

      {/* Disciplinas */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-zinc-950 border-t border-zinc-900 space-y-6 md:space-y-8">
        <div className="text-center space-y-1.5">
          <h2 className="text-[11px] md:text-xs font-black tracking-widest text-lime-400 uppercase">Programas de Entrenamiento</h2>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase">Nuestras Disciplinas</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-zinc-900/80 p-5 md:p-6 rounded-2xl border border-zinc-800 hover:border-lime-500/80 transition shadow-lg space-y-2.5">
            <div className="text-xl md:text-2xl mb-1">💪</div>
            <h4 className="font-extrabold text-white text-sm md:text-base">Musculación & Fuerza</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Zona de peso libre completa, máquinas guiadas de última generación y racks profesionales.</p>
          </div>
          <div className="bg-zinc-900/80 p-5 md:p-6 rounded-2xl border border-zinc-800 hover:border-lime-500/80 transition shadow-lg space-y-2.5">
            <div className="text-xl md:text-2xl mb-1">🥊</div>
            <h4 className="font-extrabold text-white text-sm md:text-base">Entrenamiento Funcional</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Clases de alta intensidad para quemar grasa, ganar agilidad y mejorar tu resistencia cardiovascular.</p>
          </div>
          <div className="bg-zinc-900/80 p-5 md:p-6 rounded-2xl border border-zinc-800 hover:border-lime-500/80 transition shadow-lg space-y-2.5 sm:col-span-2 md:col-span-1">
            <div className="text-xl md:text-2xl mb-1">📋</div>
            <h4 className="font-extrabold text-white text-sm md:text-base">Asesoría Nutricional</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Planes de alimentación personalizados orientados a tus objetivos de volumen o definición.</p>
          </div>
        </div>
      </div>

      <footer className="bg-zinc-950 border-t border-zinc-900 px-6 py-8 text-center space-y-3">
        {data.instagram && (
          <div className="flex justify-center items-center gap-2 text-xs text-lime-400">
            <span>Síguenos en redes:</span>
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="underline font-bold">
              {data.instagram}
            </a>
          </div>
        )}
        <p className="text-xs text-zinc-400 font-medium">© {new Date().getFullYear()} {data.businessName || 'Elite Fitness Center'}. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 text-[11px] text-zinc-500">
          <span>Términos y Condiciones</span>
          <span>•</span>
          <span>Política de Privacidad</span>
        </div>
      </footer>
    </div>
  )
}

function TemplateDental({ data }: { data: any }) {
  return (
    <div className="bg-slate-950 border border-sky-900/30 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl text-slate-100 font-sans w-full max-w-full">
      <header className="bg-sky-950/40 backdrop-blur-md border-b border-sky-900/30 px-4 md:px-6 py-3.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 font-bold text-sm md:text-base shadow-sm shrink-0">🦷</span>
          <span className="font-bold tracking-wide text-white text-sm md:text-base truncate">{data.businessName || 'Clínica Dental Sonrisa'}</span>
        </div>
        <div className="flex items-center gap-3">
          {data.instagram && (
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 text-xs font-semibold hidden sm:inline-block">
              📸 Instagram
            </a>
          )}
          {data.whatsapp && (
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition shadow-[0_0_15px_rgba(56,189,248,0.4)] animate-pulse shrink-0">
              Reservar Hora
            </a>
          )}
        </div>
      </header>

      {/* Hero */}
      <div className="relative px-4 sm:px-6 py-16 md:py-28 text-center space-y-5 md:space-y-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />

        <div className="relative z-10 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block text-sky-400 text-[11px] md:text-xs font-semibold tracking-widest uppercase border border-sky-400/40 px-3.5 py-1.5 rounded-full bg-sky-400/10 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            Salud & Estética Dental Avanzada
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight px-2">
            {data.businessName || 'Tu sonrisa en las mejores manos profesionales'}
          </h1>
          <p className="text-sky-200/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2">
            Tecnología de punta, especialistas certificados y un trato humano excepcional para devolverle la salud y el brillo a tu sonrisa.
          </p>
          <div className="pt-2 md:pt-4 px-4">
            {data.whatsapp && (
              <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm transition shadow-[0_0_30px_rgba(56,189,248,0.5)] animate-pulse">
                <span>📅 Agendar Evaluación Dental</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-slate-900/40 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-950 p-6 rounded-2xl border border-sky-900/30 space-y-2">
            <h3 className="text-sky-400 font-bold text-base uppercase tracking-wider">Nuestra Misión Odontológica</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">Proveer tratamientos dentales integrales y seguros, utilizando equipos de vanguardia para asegurar diagnósticos precisos y sin dolor.</p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-sky-900/30 space-y-2">
            <h3 className="text-sky-400 font-bold text-base uppercase tracking-wider">Excelencia y Confianza</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">Nos enfocamos en la prevención y en la estética dental avanzada para que cada paciente recupere la seguridad al sonreír.</p>
          </div>
        </div>
      </div>

      {/* Tratamientos */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-slate-950 border-t border-sky-900/20 space-y-6 md:space-y-8">
        <div className="text-center space-y-1.5">
          <h2 className="text-[11px] md:text-xs font-bold tracking-widest text-sky-400 uppercase">Tratamientos Principales</h2>
          <h3 className="text-xl md:text-2xl font-bold text-white">Especialidades Odontológicas</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-slate-900/80 p-5 md:p-6 rounded-2xl border border-sky-900/30 hover:border-sky-500/80 transition shadow-lg space-y-2.5">
            <div className="text-2xl md:text-3xl mb-1">✨</div>
            <h4 className="font-bold text-sky-400 text-sm md:text-base">Blanqueamiento & Estética</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Diseño de sonrisa digital, carillas de porcelana y blanqueamiento láser seguro.</p>
          </div>
          <div className="bg-slate-900/80 p-5 md:p-6 rounded-2xl border border-sky-900/30 hover:border-sky-500/80 transition shadow-lg space-y-2.5">
            <div className="text-2xl md:text-3xl mb-1">🔩</div>
            <h4 className="font-bold text-sky-400 text-sm md:text-base">Implantes Dentales</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Reemplazo de piezas dentales perdidas con tecnología de titanio de alta durabilidad.</p>
          </div>
          <div className="bg-slate-900/80 p-5 md:p-6 rounded-2xl border border-sky-900/30 hover:border-sky-500/80 transition shadow-lg space-y-2.5 sm:col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl mb-1">😁</div>
            <h4 className="font-bold text-sky-400 text-sm md:text-base">Ortodoncia Invisible</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Alineadores transparentes modernos para corregir la posición de tus dientes sin brackets metálicos.</p>
          </div>
        </div>
      </div>

      <footer className="bg-slate-950 border-t border-sky-900/30 px-6 py-8 text-center space-y-3">
        {data.instagram && (
          <div className="flex justify-center items-center gap-2 text-xs text-sky-400">
            <span>Síguenos en redes:</span>
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="underline font-bold">
              {data.instagram}
            </a>
          </div>
        )}
        <p className="text-xs text-slate-400 font-medium">© {new Date().getFullYear()} {data.businessName || 'Clínica Dental Sonrisa'}. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 text-[11px] text-slate-500">
          <span>Términos y Condiciones</span>
          <span>•</span>
          <span>Política de Privacidad</span>
        </div>
      </footer>
    </div>
  )
}

function TemplateComida({ data }: { data: any }) {
  return (
    <div className="bg-zinc-950 border border-red-900/30 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl text-zinc-100 font-sans w-full max-w-full">
      <header className="bg-red-950/40 backdrop-blur-md border-b border-red-900/30 px-4 md:px-6 py-3.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 font-bold text-sm md:text-base shadow-sm shrink-0">🍔</span>
          <span className="font-black uppercase tracking-wider text-white text-sm md:text-base truncate">{data.businessName || 'Burger & Grill House'}</span>
        </div>
        <div className="flex items-center gap-3">
          {data.instagram && (
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 text-xs font-semibold hidden sm:inline-block">
              📸 Instagram
            </a>
          )}
          {data.whatsapp && (
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-red-500 hover:bg-red-400 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse shrink-0">
              Pedir Online
            </a>
          )}
        </div>
      </header>

      {/* Hero */}
      <div className="relative px-4 sm:px-6 py-16 md:py-28 text-center space-y-5 md:space-y-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-[2px]" />

        <div className="relative z-10 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block text-red-400 text-[11px] md:text-xs font-black tracking-widest uppercase border border-red-400/40 px-3.5 py-1.5 rounded-full bg-red-400/10 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            Sabor Artesanal & Ingredientes Frescos
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight px-2">
            {data.businessName || 'Las mejores hamburguesas a la parrilla'}
          </h1>
          <p className="text-zinc-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2">
            Carne 100% vacuna jugosa, pan brioche recién horneado, queso cheddar fundido y salsas de la casa irresistibles.
          </p>
          <div className="pt-2 md:pt-4 px-4">
            {data.whatsapp && (
              <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-400 hover:to-rose-400 text-white font-extrabold px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm transition shadow-[0_0_30px_rgba(239,68,68,0.5)] animate-pulse">
                <span>🚀 Hacer Pedido por WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Visión y Propósito */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-zinc-900/40 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-zinc-950 p-6 rounded-2xl border border-red-900/30 space-y-2">
            <h3 className="text-red-400 font-bold text-base uppercase tracking-wider">Pasión por la Parrilla</h3>
            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">Nuestra visión es ofrecer una experiencia gastronómica callejera de nivel gourmet, con porciones generosas y sabores intensos que conquisten tu paladar.</p>
          </div>
          <div className="bg-zinc-950 p-6 rounded-2xl border border-red-900/30 space-y-2">
            <h3 className="text-red-400 font-bold text-base uppercase tracking-wider">Calidad Garantizada</h3>
            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">Preparamos cada hamburguesa al momento del pedido para asegurar que llegue caliente, crujiente y con todo su sabor a tu mesa o hogar.</p>
          </div>
        </div>
      </div>

      {/* Menú */}
      <div className="px-4 sm:px-6 py-10 md:py-14 bg-zinc-950 border-t border-red-900/20 space-y-6 md:space-y-8">
        <div className="text-center space-y-1.5">
          <h2 className="text-[11px] md:text-xs font-black tracking-widest text-red-400 uppercase">Nuestro Menú</h2>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase">Favoritos de la Casa</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-zinc-900/80 p-5 md:p-6 rounded-2xl border border-red-900/30 hover:border-red-500/80 transition shadow-lg space-y-2.5">
            <div className="text-2xl md:text-3xl mb-1">🍔</div>
            <h4 className="font-extrabold text-white text-sm md:text-base">Burger Doble Tocino</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Doble carne jugosa, doble cheddar, tocino crujiente ahumado y salsa especial de la casa.</p>
          </div>
          <div className="bg-zinc-900/80 p-5 md:p-6 rounded-2xl border border-red-900/30 hover:border-red-500/80 transition shadow-lg space-y-2.5">
            <div className="text-2xl md:text-3xl mb-1">🍟</div>
            <h4 className="font-extrabold text-white text-sm md:text-base">Papas Rústicas & Cheddar</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Papas fritas crujientes bañadas en queso fundido caliente y trocitos de tocino crujiente.</p>
          </div>
          <div className="bg-zinc-900/80 p-5 md:p-6 rounded-2xl border border-red-900/30 hover:border-red-500/80 transition shadow-lg space-y-2.5 sm:col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl mb-1">🥤</div>
            <h4 className="font-extrabold text-white text-sm md:text-base">Malteadas Artesanales</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Batidos espesos de chocolate belga, vainilla natural o frutilla con crema batida.</p>
          </div>
        </div>
      </div>

      <footer className="bg-zinc-950 border-t border-red-900/30 px-6 py-8 text-center space-y-3">
        {data.instagram && (
          <div className="flex justify-center items-center gap-2 text-xs text-red-400">
            <span>Síguenos en redes:</span>
            <a href={`https://instagram.com/${data.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="underline font-bold">
              {data.instagram}
            </a>
          </div>
        )}
        <p className="text-xs text-zinc-400 font-medium">© {new Date().getFullYear()} {data.businessName || 'Burger & Grill House'}. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 text-[11px] text-zinc-500">
          <span>Términos y Condiciones</span>
          <span>•</span>
          <span>Política de Privacidad</span>
        </div>
      </footer>
    </div>
  )
}


// --- 2. COMPONENTE PRINCIPAL ---

export default function CrearWebPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [step, setStep] = useState<'form' | 'preview'>('form')
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop')
  
  const [formData, setFormData] = useState({
    businessName: '',
    subdomain: '',
    category: 'servicios',
    country: 'CL',
    whatsapp: '',
    instagram: '',
    description: '',
    template: 'abogados'
  })

  const handleTemplateSelect = (templateId: string) => {
    let matchedCategory = 'servicios'
    if (templateId === 'barberia' || templateId === 'gimnasio') matchedCategory = 'salud'
    if (templateId === 'panaderia' || templateId === 'comida') matchedCategory = 'gastronomia'
    if (templateId === 'dental') matchedCategory = 'salud'

    setFormData({
      ...formData,
      template: templateId,
      category: matchedCategory
    })
  }

  const handleSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')
    setFormData({ ...formData, subdomain: value })
  }

  const handleGeneratePreview = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      if (!formData.subdomain || formData.subdomain.length < 3) {
        throw new Error('El subdominio debe tener al menos 3 caracteres válidos.')
      }

      let defaultDesc = 'Asesoría y servicios profesionales garantizados.'
      if (formData.template === 'barberia') defaultDesc = 'Cortes modernos y estilo exclusivo.'
      if (formData.template === 'panaderia') defaultDesc = 'Pan artesanal y repostería recién horneada.'
      if (formData.template === 'gimnasio') defaultDesc = 'Entrenamiento de alto rendimiento y musculación.'
      if (formData.template === 'dental') defaultDesc = 'Salud y estética dental avanzada.'
      if (formData.template === 'comida') defaultDesc = 'Hamburguesas artesanales y comida rápida gourmet.'

      const payload = {
        ...formData,
        description: defaultDesc
      }

      const result = await createSiteAction(payload)

      if (!result.success) {
        throw new Error(result.error || 'Error al registrar el sitio web.')
      }

      setStep('preview')
      setLoading(false)
    } catch (error: any) {
      console.error('Error al procesar el formulario:', error)
      setErrorMsg(error.message || 'Ocurrió un error al crear la web. Inténtalo de nuevo.')
      setLoading(false)
    }
  }

  const handleProceedToCheckout = () => {
    router.push(`/checkout?subdomain=${formData.subdomain}&country=${formData.country}`)
  }

  if (step === 'preview') {
    return (
      <div className="min-h-screen bg-slate-950 text-white relative pb-20">
        <div className="sticky top-0 z-50 bg-slate-900/95 border-b border-cyan-500/30 backdrop-blur-md px-4 md:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xl">
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <div>
                <p className="text-xs md:text-sm font-bold truncate max-w-[200px] sm:max-w-xs">Vista Previa: <span className="text-cyan-400">{formData.subdomain}.impulsaweblatam.com</span></p>
                <p className="text-[11px] text-slate-400">Estilo: <span className="uppercase text-slate-200">{formData.template}</span></p>
              </div>
            </div>
          </div>

          <div className="flex items-center bg-slate-950 border border-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setPreviewDevice('desktop')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                previewDevice === 'desktop' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              💻 Computador
            </button>
            <button
              onClick={() => setPreviewDevice('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                previewDevice === 'mobile' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              📱 Celular
            </button>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <button 
              onClick={() => setStep('form')}
              className="text-xs text-slate-400 hover:text-white px-3 py-2 transition cursor-pointer"
            >
              ← Modificar
            </button>
            <button 
              onClick={handleProceedToCheckout}
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold px-4 md:px-6 py-2.5 rounded-xl text-xs transition shadow-lg shadow-cyan-500/25 cursor-pointer truncate"
            >
              ¡Me encanta! Activar ($18 USD) →
            </button>
          </div>
        </div>

        <div className={`mx-auto p-2 sm:p-4 md:p-8 transition-all duration-300 ${
          previewDevice === 'mobile' ? 'max-w-md' : 'max-w-4xl'
        }`}>
          <div className={previewDevice === 'mobile' ? 'border-4 border-slate-800 rounded-[30px] md:rounded-[40px] overflow-hidden bg-slate-950 shadow-2xl p-1.5 md:p-2' : ''}>
            {formData.template === 'abogados' && <TemplateAbogados data={formData} />}
            {formData.template === 'barberia' && <TemplateBarberia data={formData} />}
            {formData.template === 'panaderia' && <TemplatePanaderia data={formData} />}
            {formData.template === 'gimnasio' && <TemplateGimnasio data={formData} />}
            {formData.template === 'dental' && <TemplateDental data={formData} />}
            {formData.template === 'comida' && <TemplateComida data={formData} />}
          </div>
        </div>

        {formData.whatsapp && (
          <a 
            href={`https://wa.me/${formData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-emerald-500 text-slate-950 p-4 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.6)] flex items-center gap-2 font-extrabold text-xs md:text-sm cursor-pointer hover:bg-emerald-400 transition z-45 animate-bounce"
          >
            💬 WhatsApp
          </a>
        )}
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 sm:p-6 md:p-12 selection:bg-cyan-500 selection:text-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 md:mb-8 text-center">
          <span className="text-cyan-400 text-[11px] md:text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Paso 1 de 2 • ImpulsaWeb Latam
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 md:mt-4">
            Crea tu web profesional <span className="text-cyan-400">100% Gratis</span>
          </h1>
          <p className="text-slate-400 text-xs md:text-sm mt-2">Selecciona la plantilla ideal para tu negocio y previsualízala al instante.</p>
        </div>

        {errorMsg && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleGeneratePreview} className="bg-slate-900 border border-slate-800 p-5 sm:p-6 md:p-10 rounded-2xl shadow-xl space-y-5 md:space-y-6">
          
          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2.5">Elige tu Plantilla por Rubro</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { id: 'abogados', name: '⚖️ Abogados', desc: 'Formal y enfocado en confianza y citas' },
                { id: 'barberia', name: '✂️ Barbería', desc: 'Moderno y visual para reservas' },
                { id: 'panaderia', name: '🥖 Panadería', desc: 'Cálido y enfocado en productos' },
                { id: 'gimnasio', name: '🏋️ Gimnasio', desc: 'Enérgico, fitness y musculación' },
                { id: 'dental', name: '🦷 Clínica Dental', desc: 'Salud, confianza y estética' },
                { id: 'comida', name: '🍔 Comida Rápida', desc: 'Apetitoso, hamburguesas y delivery' }
              ].map((t) => (
                <div 
                  key={t.id}
                  onClick={() => handleTemplateSelect(t.id)}
                  className={`p-3.5 md:p-4 rounded-xl border cursor-pointer transition ${
                    formData.template === t.id 
                      ? 'bg-cyan-500/10 border-cyan-500 text-white shadow-md shadow-cyan-500/10' 
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-xs md:text-sm text-white mb-1">{t.name}</div>
                  <div className="text-[11px] md:text-xs text-slate-400 leading-snug">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Nombre de tu Negocio o Marca</label>
            <input 
              type="text" 
              required
              placeholder="Ej: Elite Fitness Center"
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Tu dirección web personalizada</label>
            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl overflow-hidden focus-within:border-cyan-500 transition">
              <input 
                type="text" 
                required
                placeholder="tudominio"
                value={formData.subdomain}
                onChange={handleSubdomainChange}
                className="w-full bg-transparent px-4 py-3 text-white focus:outline-none text-xs md:text-sm"
              />
              <span className="bg-slate-900 text-slate-400 px-3 py-3 text-[11px] md:text-xs border-l border-slate-800 select-none whitespace-nowrap">
                .impulsaweblatam.com
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">WhatsApp de contacto</label>
              <input 
                type="text" 
                required
                placeholder="+56912345678"
                value={formData.whatsapp}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Instagram (Opcional)</label>
              <input 
                type="text" 
                placeholder="@tuinstagram"
                value={formData.instagram}
                onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3.5 md:py-4 rounded-xl transition shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer text-sm md:text-base flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Generando vista previa...</span>
              </>
            ) : (
              'Ver Vista Previa de mi Web'
            )}
          </button>
        </form>
      </div>
    </main>
  )
}
