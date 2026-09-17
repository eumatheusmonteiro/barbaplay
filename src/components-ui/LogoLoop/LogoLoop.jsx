function Logo({ logo }) {
  return (
    <div className={`logo-loop__item ${logo.teleWhite ? 'logo-loop__item--tele-white' : ''}`}>
      <img
        src={logo.src}
        alt={logo.alt}
        className={`logo-loop__image ${logo.white ? 'logo-loop__image--white' : ''}`}
        loading="lazy"
      />
      {logo.teleWhite && <img src={logo.src} alt="" className="logo-loop__image logo-loop__image--tele-overlay" aria-hidden="true" />}
      {logo.videoWhite && <img src={logo.src} alt="" className="logo-loop__image logo-loop__image--video-overlay" aria-hidden="true" />}
      {logo.videoWhite && <img src={logo.src} alt="" className="logo-loop__image logo-loop__image--prime-smile" aria-hidden="true" />}
    </div>
  )
}

export default function LogoLoop({ logos }) {
  return (
    <div className="logo-loop">
      <div className="logo-loop__track">
        {[0, 1].map((group) => (
          <div className="logo-loop__group" aria-hidden={group === 1} key={group}>
            {logos.map((logo) => <Logo logo={logo} key={`${group}-${logo.src}`} />)}
          </div>
        ))}
      </div>
    </div>
  )
}
