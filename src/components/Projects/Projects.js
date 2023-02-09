import { useEffect } from 'react'
import { Link } from "react-router-dom";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import zLawyer from '../../assets/img/zLawyer.webp'
import semicolon from '../../assets/img/semicolon.webp'
import arrow from '../../assets/logo/arrow.svg'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


export default function Projects() {

  const slideInTop = (elem) => {
    gsap.fromTo(elem, {
      opacity: 0,
      scale: 0.5
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: elem,
        start: 'top 80%'
      }
    })
  }

  useEffect(() => {
    slideInTop('.project1')
    slideInTop('.project2')
  }, [])

  return (
    <div className='section projectSection' id='project'>

      <div>

        <h2 className='titleProject'>Projets</h2>

      </div>


      <div className="projectsContainer">

        <div className="project project1">
          <div className="projectTxt">
            <div>
              <h3>zLawyer</h3>
              <hr />
            </div>
            <p>zLawyer est un logiciel de gestion de cabinets d'avocats. (réalisé avec <a href="https://matteo.courqu.in/" className='linkDescription' target={'_blank'} rel="noreferrer">Matteo Courquin</a>). Langage utilisé NuxtJS</p>

            <div className='projectLink'>
              <a href="https://www.zlawyer.fr/logiciel-avocats/" target="_blank" rel="noreferrer">Voir le projet</a>
              <img src={arrow} alt="logo arrow" className='arrow' />
            </div>

          </div>
          <div className="projectImg">
            <a href="https://www.zlawyer.fr/logiciel-avocats/" target="_blank" rel="noreferrer"><img src={zLawyer} alt="Lien vers zLawyer Home Page" /></a>
          </div>
        </div>


        <div className="project project2">
          <div className="projectTxt">
            <h3>Semicolon</h3>
            <hr />
            <p>Projet d'école visant à sensibiliser sur les problématiques étudiantes. Nous avons utilisé la librairie Gsap pour ce site.</p>

            <div className='projectLink'>
              <a href="https://semicolon.vercel.app/index.html" target="_blank" rel="noreferrer">Voir le projet</a>
              <img src={arrow} alt="logo arrow" className='arrow' />
            </div>

          </div>
          <div className="projectImg">
            <a href="https://semicolon.vercel.app/index.html" target="_blank" rel="noreferrer"><img src={semicolon} alt="Lien vers Semicolon Home Page" /></a>
          </div>
        </div>

        <Link to="/projects" className='button btnProject'>Voir plus</Link>

      </div>


    </div >
  )
}
