import Aurora from '../components-ui/Aurora/Aurora'
import BlurText from '../components-ui/BlurText/BlurText'
import Magnet from '../components-ui/Magnet/Magnet'
import { getWhatsAppLink } from '../config'

export default function Hero() {
  return <section className="hero" id="inicio">
    <Aurora /><div className="hero__grid" aria-hidden="true" />
    <div className="hero__content container">
      <div className="hero__copy">
        <div className="eyebrow"><span>🔥</span> Teste grátis de até 6 horas</div>
        <BlurText text="Sua diversão começa aqui." highlight="começa aqui." className="hero__title" />
        <p className="hero__description">Entretenimento para curtir na TV, celular, computador ou TV Box. Simples, rápido e do seu jeito.</p>
        <div className="hero__actions">
          <Magnet strength={0.16}><a className="button button--primary" href={getWhatsAppLink()} target="_blank" rel="noreferrer">Quero meu teste grátis <span aria-hidden="true">→</span></a></Magnet>
          <a className="button button--secondary" href="#como-funciona"><span className="play-icon" aria-hidden="true">▶</span> Ver como funciona</a>
        </div>
        <p className="hero__support"><span aria-hidden="true">●</span> Atendimento rápido pelo WhatsApp</p>
      </div>
      <div className="hero__visual hero-showcase">
        <div className="hero-showcase__glow" />
        <div className="hero-showcase__rings" />
        <div className="hero-showcase__particles" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <img src="/images/mascote/mascote.png" alt="BarbaPlay em diferentes dispositivos" className="hero-showcase__image" />
      </div>
    </div>
  </section>
}
