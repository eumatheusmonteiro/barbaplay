import LogoLoop from '../components-ui/LogoLoop/LogoLoop'

const logos = [
  { src: '/images/logos/transparent/combate-logo.svg', alt: 'Combate' },
  { src: '/images/logos/transparent/discovery-logo.svg', alt: 'Discovery', white: true },
  { src: '/images/logos/transparent/disney-logo.svg', alt: 'Disney+', white: true },
  { src: '/images/logos/transparent/hbomax-logo.svg', alt: 'HBO Max', white: true },
  { src: '/images/logos/transparent/logo-premiere.png', alt: 'Premiere' },
  { src: '/images/logos/transparent/paramount-logo.svg', alt: 'Paramount+' },
  { src: '/images/logos/transparent/primevideo-logo.svg', alt: 'Prime Video', videoWhite: true },
  { src: '/images/logos/transparent/star-logo.svg?v=2', alt: 'Star+' },
  { src: '/images/logos/transparent/telecine-logo.svg', alt: 'Telecine', teleWhite: true },
]

export default function LogoMarquee() {
  return (
    <section className="logo-marquee" aria-label="Marcas disponíveis">
      <LogoLoop logos={logos} />
    </section>
  )
}
