import { getWhatsAppLink } from '../config'

const steps = [
  {
    number: '01',
    title: 'Escolha seu dispositivo',
    description: 'Veja se sua Smart TV, TV Box, celular, computador ou outro aparelho é compatível — na prática, quase todos são.',
  },
  {
    number: '02',
    title: 'Solicite seu teste ou plano',
    description: 'Fale com a nossa equipe pelo WhatsApp e receba os dados de acesso, o aplicativo recomendado e o passo a passo da instalação.',
  },
  {
    number: '03',
    title: 'Instale o aplicativo',
    description: 'Siga o tutorial simples enviado pelo nosso suporte. Em poucos minutos o app estará pronto para uso no seu dispositivo.',
  },
  {
    number: '04',
    title: 'Comece a assistir',
    description: 'Acesse seu entretenimento com estabilidade e diferentes opções de qualidade de imagem.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="como-funciona">
      <div className="container how-it-works__inner">
        <header className="how-it-works__header">
          <span><i /> Como funciona</span>
          <h2>Comece a assistir em<br /> 4 passos simples</h2>
          <p>Do primeiro contato à primeira transmissão, o processo foi pensado para ser rápido e sem complicação técnica.</p>
        </header>

        <div className="how-it-works__content">
          <ol className="how-it-works__steps">
            {steps.map((step) => (
              <li key={step.number}>
                <span className="how-it-works__number">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </li>
            ))}
          </ol>

          <aside className="how-it-works__callout">
            <span className="how-it-works__clock" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></svg>
            </span>
            <h3>Leva poucos minutos</h3>
            <p>A maioria dos clientes começa a assistir em menos de 10 minutos após o primeiro contato, do pedido do teste até a instalação concluída.</p>
            <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" aria-label="Começar agora pelo WhatsApp">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a12 12 0 0 0-10.4 18l-1.3 4.7 4.8-1.3A12 12 0 1 0 16 3Zm0 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-2.8.8.8-2.8-.2-.4A9.8 9.8 0 1 1 16 24.8Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.2-.1-.4-.1-.6.2l-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-2.3-1.4 8.8 8.8 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.2-.2-.4-.3-.7-.4Z" /></svg>
              Quero começar agora
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
