import MagicBento from '../components-ui/MagicBento/MagicBento'

const benefits = [
  {
    id: 'stability', icon: 'signal', title: 'Estabilidade de verdade',
    description: 'Estrutura preparada para oferecer uma experiência estável e fluida durante o uso.',
  },
  {
    id: 'quality', icon: 'monitor', title: 'Qualidade de imagem',
    description: 'Conteúdos disponíveis em diferentes níveis de qualidade, conforme a fonte e o dispositivo utilizado.',
    detail: 'quality',
  },
  {
    id: 'compatibility', icon: 'devices', title: 'Assista onde quiser',
    description: 'Compatível com Smart TV, TV Box, Android TV, Fire TV, celular, tablet, notebook e computador.',
    detail: 'devices',
  },
  {
    id: 'updates', icon: 'refresh', title: 'Conteúdo atualizado',
    description: 'Novidades e opções de entretenimento adicionadas regularmente para você ter sempre algo para assistir.',
    detail: 'updates',
  },
  {
    id: 'activation', icon: 'zap', title: 'Ativação simples',
    description: 'Configuração guiada e orientações rápidas para começar a utilizar o serviço.',
  },
  {
    id: 'support', icon: 'headset', title: 'Suporte pelo WhatsApp',
    description: 'Atendimento para ajudar na instalação, configuração e utilização do serviço sempre que precisar.',
  },
]

export default function BenefitsBento() {
  return (
    <section className="benefits-bento" id="compatibilidade">
      <div className="container benefits-bento__inner">
        <header className="benefits-bento__header">
          <span><i /> Experiência BarbaPlay</span>
          <h2>Tecnologia, estabilidade e qualidade em um único serviço</h2>
          <p>Tudo o que você precisa para aproveitar seu entretenimento com praticidade, qualidade e suporte quando precisar.</p>
        </header>
        <MagicBento cards={benefits} />
      </div>
    </section>
  )
}
