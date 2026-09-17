import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '../config'

const links = [['Início', '#inicio'], ['Como funciona', '#como-funciona'], ['Compatibilidade', '#compatibilidade'], ['Plano', '#plano'], ['Avaliações', '#avaliacoes']]
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])
  return <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
    <div className="header__inner container">
      <a className="logo" href="#inicio" aria-label="BarbaPlay — início">Barba<span>Play</span></a>
      <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button button--header nav__cta" href={getWhatsAppLink()} target="_blank" rel="noreferrer">Testar grátis</a>
      </nav>
      <a className="button button--header header__cta" href={getWhatsAppLink()} target="_blank" rel="noreferrer">Testar grátis <span aria-hidden="true">↗</span></a>
      <button className={`menu-toggle ${open ? 'menu-toggle--open' : ''}`} type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}><span /><span /><span /></button>
    </div>
  </header>
}
