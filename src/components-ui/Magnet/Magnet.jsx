import { useRef } from 'react'
export default function Magnet({ children, strength = 0.15 }) {
  const ref = useRef(null)
  const move = event => { if (window.matchMedia('(hover: none)').matches) return; const rect = ref.current.getBoundingClientRect(); const x = (event.clientX - rect.left - rect.width / 2) * strength; const y = (event.clientY - rect.top - rect.height / 2) * strength; ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)` }
  const reset = () => { ref.current.style.transform = 'translate3d(0, 0, 0)' }
  return <div className="magnet" ref={ref} onMouseMove={move} onMouseLeave={reset}>{children}</div>
}
