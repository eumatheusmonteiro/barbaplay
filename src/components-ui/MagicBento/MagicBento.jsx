import { useRef } from 'react'

function BenefitIcon({ name }) {
  const paths = {
    signal: <><path d="M4 18v2M8 14v6M12 10v10M16 6v14M20 3v17" /></>,
    monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
    devices: <><rect x="2" y="4" width="14" height="10" rx="2" /><path d="M6 18h6M9 14v4" /><rect x="17" y="8" width="5" height="11" rx="1.5" /></>,
    refresh: <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M6.1 8a7 7 0 0 1 11.6-1.7L20 9M4 15l2.3 2.7A7 7 0 0 0 18 16" /></>,
    zap: <path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z" />,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M18 19c0 1.1-.9 2-2 2h-3" /><rect x="3" y="13" width="4" height="6" rx="2" /><rect x="17" y="13" width="4" height="6" rx="2" /></>,
    play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4Z" /></>,
    series: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
    live: <><path d="M5 20v-5M10 20V9M15 20V6M20 20V3" /></>,
    sports: <><circle cx="12" cy="13" r="7" /><path d="M12 6V3M9 3h6M12 13l3-3" /></>,
    kids: <><rect x="3" y="5" width="13" height="10" rx="2" /><path d="M7 19h5M9.5 15v4" /><rect x="18" y="9" width="3" height="8" rx="1" /></>,
    hd: <><rect x="3" y="6" width="18" height="12" rx="3" /><path d="M7 10v4M10 10v4M7 12h3M14 10h2a2 2 0 0 1 0 4h-2v-4Z" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

function CardDetail({ type }) {
  if (type === 'quality') return <div className="magic-bento__quality"><b>HD</b><b>FULL HD</b><b>4K*</b><small>*quando disponível na fonte</small></div>
  if (type === 'devices') return <div className="magic-bento__devices"><span>▣<small>TV</small></span><span>▯<small>Celular</small></span><span>⌨<small>Notebook</small></span><span>◆<small>TV Box</small></span></div>
  if (type === 'updates') return <div className="magic-bento__updates"><span>Nova atualização <b>✓</b></span><span>Catálogo atualizado <b>✓</b></span><span>Novidades adicionadas <b>✓</b></span></div>
  return null
}

export default function MagicBento({ cards, variant = 'benefits' }) {
  const gridRef = useRef(null)
  const moveSpotlight = (event) => {
    if (window.matchMedia('(hover: none)').matches) return
    gridRef.current?.querySelectorAll('.magic-bento__card').forEach((card) => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
      card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
    })
  }

  return (
    <div className={`magic-bento magic-bento--${variant}`} ref={gridRef} onPointerMove={moveSpotlight}>
      {cards.map((card) => (
        <article className={`magic-bento__card magic-bento__card--${card.id}`} key={card.id}>
          <div className="magic-bento__spotlight" />
          <div className="magic-bento__particles" aria-hidden="true"><i /><i /><i /></div>
          <span className="magic-bento__icon"><BenefitIcon name={card.icon} /></span>
          <div className="magic-bento__copy"><h3>{card.title}</h3><p>{card.description}</p></div>
          <CardDetail type={card.detail} />
        </article>
      ))}
    </div>
  )
}
