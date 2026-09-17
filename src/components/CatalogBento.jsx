import MagicBento from '../components-ui/MagicBento/MagicBento'

const catalogItems = [
  {
    id: 'movies', icon: 'play', title: 'Filmes',
    description: 'Um catálogo variado, com lançamentos e clássicos de diferentes gêneros para todos os momentos.',
  },
  {
    id: 'series', icon: 'series', title: 'Séries',
    description: 'Temporadas completas e séries em destaque para assistir quando e onde quiser.',
  },
  {
    id: 'live', icon: 'live', title: 'Canais ao vivo',
    description: 'Programação ao vivo com opções de notícias, variedades, filmes e entretenimento.',
  },
  {
    id: 'sports', icon: 'sports', title: 'Esportes',
    description: 'Eventos e programação esportiva para acompanhar suas modalidades favoritas.',
  },
  {
    id: 'kids', icon: 'kids', title: 'Conteúdo infantil',
    description: 'Desenhos e programas para o público infantil aproveitar com toda a família.',
  },
  {
    id: 'general', icon: 'hd', title: 'Entretenimento geral',
    description: 'Documentários, variedades, música e muito mais reunidos em um único lugar.',
  },
]

export default function CatalogBento() {
  return (
    <section className="catalog-bento" id="catalogo">
      <div className="container catalog-bento__inner">
        <header className="catalog-bento__header">
          <span><i /> Catálogo completo</span>
          <h2>Filmes, séries, canais ao vivo,<br /> esportes e muito mais</h2>
          <p>Entretenimento para todos os gostos e momentos, reunido em uma experiência simples e completa.</p>
        </header>
        <MagicBento cards={catalogItems} variant="catalog" />
      </div>
    </section>
  )
}
