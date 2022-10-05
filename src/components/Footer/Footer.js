import React from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Twitter from '../../assets/logo/footer/twitter.svg'
import GitHub from '../../assets/logo/footer/github.svg'
import Linkedin from '../../assets/logo/footer/linkedin.svg'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Footer() {

  // Get the current year
  const year = new Date().getFullYear()

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(elem, {
      y: -200,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: delay || 0.4,
      duration: duration || 0.6,
      scrollTrigger: {
        trigger: elem,
        start: 'bottom bottom',
        end: 'top top',
      }
    })
  }

  useEffect(() => {
    slideInTop('.logo1', 0, 1)
  }, [])
  useEffect(() => {
    slideInTop('.logo2', 0, 1)
  }, [])
  useEffect(() => {
    slideInTop('.logo3', 0, 1)
  }, [])


  return (
    <div className='section footer'>

      <div className="footerLogo">

        <a href="https://github.com/AugustinBriolon" target="_blank" rel="noreferrer" className='logo1'>

          <img src={GitHub} alt="Logo Github" />

        </a>

        <a href="https://www.linkedin.com/in/augustin-briolon-16831a1bb/" target="_blank" rel="noreferrer" className='logo2'>

          <img src={Linkedin} alt="Logo Linkedin" />

        </a>

        <a href="https://twitter.com/AugustinBriolon" target="_blank" rel="noreferrer" className='logo3'>

          <img src={Twitter} alt="Logo Twitter" />

        </a>

      </div>

      <div className="footerTxt">
        <p>Augustin Briolon - {year}</p>
      </div>

    </div>
  )
}
