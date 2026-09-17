const reviews = [
  { quote: 'O atendimento foi muito rápido e consegui configurar tudo sem dificuldade. A qualidade da imagem me surpreendeu.', name: 'Rafael Souza', initials: 'RS', detail: 'Cliente há 8 meses' },
  { quote: 'Pedi o teste grátis achando que seria complicado instalar, mas o suporte me ajudou pelo WhatsApp e em poucos minutos já estava assistindo.', name: 'Juliana Almeida', initials: 'JA', detail: 'Assinante do plano semestral' },
  { quote: 'O catálogo tem muitas opções e sempre encontro algo novo para assistir com toda a família.', name: 'Carlos Eduardo Lima', initials: 'CL', detail: 'Assinante do plano anual' },
  { quote: 'A imagem tem ótima definição e o serviço funciona muito bem nos aparelhos que uso em casa.', name: 'Fernanda Costa', initials: 'FC', detail: 'Assinante do plano trimestral' },
  { quote: 'Uso na TV Box e no celular sem problema. Quando precisei de ajuda, o suporte resolveu rapidamente.', name: 'Bruno Henrique', initials: 'BH', detail: 'Cliente há 1 ano' },
  { quote: 'Gostei da praticidade de assistir na TV e no tablet. A instalação foi simples e bem orientada.', name: 'Patrícia Rocha', initials: 'PR', detail: 'Assinante do plano mensal' },
  { quote: 'A variedade de esportes e entretenimento é excelente. A experiência tem sido muito boa.', name: 'Marcos Vinícius', initials: 'MV', detail: 'Assinante do plano anual' },
  { quote: 'Testei antes de assinar e foi a decisão certa. Pude conhecer o serviço com tranquilidade antes de escolher meu plano.', name: 'Camila Ferreira', initials: 'CF', detail: 'Cliente há 6 meses' },
  { quote: 'Configurei seguindo o passo a passo enviado e funcionou de primeira. Hoje uso em diferentes dispositivos.', name: 'Diego Santos', initials: 'DS', detail: 'Assinante do plano semestral' },
]

export default function ReviewsSection() {
  return (
    <section className="reviews-section" id="avaliacoes">
      <div className="container reviews-section__inner">
        <header className="reviews-section__header">
          <span><i /> Avaliações</span>
          <h2>Veja o que os clientes estão dizendo do BarbaPlay</h2>
        </header>

        <header className="reviews-section__summary">
          <strong>4,9</strong>
          <div>
            <span aria-label="5 de 5 estrelas">★★★★★</span>
            <p>Avaliação média dos clientes BarbaPlay</p>
          </div>
        </header>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <span className="review-card__stars" aria-hidden="true">★★★★★</span>
              <blockquote>“{review.quote}”</blockquote>
              <footer>
                <span className="review-card__avatar" aria-hidden="true">{review.initials}</span>
                <div><strong>{review.name}</strong><small>{review.detail}</small></div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
