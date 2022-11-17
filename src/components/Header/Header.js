import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Header() {

  const slideInTop = (elem) => {
    gsap.fromTo(elem, {
      y: 20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 0.2,
      duration: 0.5,
      ease: "Power1".easeInOut,
      scrollTrigger: {
        trigger: elem,
        start: 'top center',
        end: 'bottom center',
      }
    })
  }
  useEffect(() => {
    slideInTop('.animGsap')
  }, [])



  return (
    <div className='section header'>

      <h1 className='animGsap'>Augustin <br /> Briolon</h1>

      <div className="content">

        <h2 className='animGsap'>Développeur Web</h2>
        <p className="animGsap">Je suis Augustin Briolon. Développeur Web par passion, j’aime apprendre, <br /> créer et coder. Minimaliste sur les bords...</p>
        <Link to="/contact" className='navLinks buttonPulse animGsap'>Contact</Link>

      </div>
    </div>
  )
}
