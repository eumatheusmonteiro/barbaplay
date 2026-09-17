import { getWhatsAppLink } from '../config'

const plans = [
  { name: 'Mensal', duration: '1 mês', price: '29,90', monthlyEquivalent: null, savings: null, badge: null, featured: false, cta: 'Escolher mensal' },
  { name: 'Trimestral', duration: '3 meses', price: '79,90', monthlyEquivalent: '26,63', savings: '9,80', badge: null, featured: false, cta: 'Quero 3 meses' },
  { name: 'Semestral', duration: '6 meses', price: '149,90', monthlyEquivalent: '24,98', savings: '29,50', badge: '🔥 Mais escolhido', featured: true, cta: 'Quero 6 meses' },
  { name: 'Anual', duration: '12 meses', price: '269,90', monthlyEquivalent: '22,49', savings: '88,90', badge: 'Melhor custo-benefício', featured: false, cta: 'Quero 12 meses' },
]

const benefits = [
  'Acesso pelo período escolhido',
  'Compatível com diversos dispositivos',
  'Atendimento pelo WhatsApp',
  'Ativação rápida',
  'Teste grátis de até 6 horas',
]

function getPlanMessage(plan) {
  return `Olá! Vi o site do BarbaPlay e quero contratar o plano de ${plan.duration} por R$ ${plan.price}.`
}

export default function PricingSection() {
  return (
    <section className="pricing-section" id="plano">
      <div className="container pricing-section__inner">
        <header className="pricing-section__header">
          <span><i /> Planos BarbaPlay</span>
          <h2>Escolha o plano que combina com você</h2>
          <p>Quanto maior o período, maior a economia. Escolha seu plano e fale com a gente pelo WhatsApp.</p>
        </header>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`} key={plan.duration}>
              {plan.badge && <span className={`pricing-card__badge ${plan.featured ? 'pricing-card__badge--featured' : ''}`}>{plan.badge}</span>}
              <div className="pricing-card__heading"><small>{plan.name}</small><h3>{plan.duration}</h3></div>
              <div className="pricing-card__price"><span>R$</span>{plan.price}</div>
              <div className="pricing-card__meta">
                {plan.monthlyEquivalent ? <p>equivale a <strong>R$ {plan.monthlyEquivalent}/mês</strong></p> : <p>Pagamento referente a 1 mês</p>}
                {plan.savings && <span>Economize R$ {plan.savings}</span>}
              </div>
              <ul>{benefits.map((benefit) => <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>)}</ul>
              <a
                className="pricing-card__cta"
                href={getWhatsAppLink(getPlanMessage(plan))}
                target="_blank"
                rel="noreferrer"
                aria-label={`${plan.cta} pelo WhatsApp`}
              >{plan.cta} <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>

        <p className="pricing-section__note">Os valores e condições podem ser atualizados. Consulte as condições no momento da contratação. Teste grátis de até 6 horas sujeito à disponibilidade.</p>
      </div>
    </section>
  )
}
