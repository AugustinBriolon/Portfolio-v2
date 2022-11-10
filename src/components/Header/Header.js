import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import ImgMe from '../../assets/img/profilImg.png'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


window.addEventListener('load', (event) => {
  document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
});

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
    slideInTop('.text1')
  }, [])

  const [showLinks, setShowLinks] = useState(false)

  const hangleShowLinks = () => {
    setShowLinks(!showLinks)
  }


  return (
    <div className='section header'>

      <div className="title">
        <h1 className='text1'>Développeur</h1>
        <h1 className='text1'>Web</h1>
        <h2 className='text1'>Augustin Briolon</h2>
      </div>

      <div className="content">

        <div className='text'>
          <p>Développeur Web par passion, j’aime apprendre, <br /> créer et coder. Minimaliste sur les bords...</p>
          <Link to="/contact" className='navLinks button' onClick={hangleShowLinks}>Contact</Link>
        </div>

        <div className='imgMe'>
          <img src={ImgMe} alt="Augustin Briolon sous la forme d'un avatar" />
        </div>

      </div>
    </div>
  )
}
