import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'



import zLawyer from '../../assets/img/zLawyer.webp'
import semicolon from '../../assets/img/semicolon.webp'
import raredream from '../../assets/img/raredream.webp'
import arrow from '../../assets/logo/arrow.svg'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


export default function Projects() {

  const slideInTop = (elem) => {
    gsap.fromTo(elem, {
      scale: 0,
    }, {
      scale: 1,
      duration: 0.5,
      scrollTrigger: {
        markers: true,
        trigger: elem,
        start: 'top 80%'
      }
    })
  }

  useEffect(() => {
    slideInTop('.project1')
    slideInTop('.project2')
    slideInTop('.project3')
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
            <p>zLawyer est un logiciel de gestion de <br /> cabinets d'avocats. (réalisé avec <a href="https://matteo.courqu.in/" className='linkDescription' target={'_blank'} rel="noreferrer">Matteo Courquin</a>)</p>

            <div className='projectLink'>
              <a href="https://www.zlawyer.fr/logiciel-avocats/" target="_blank" rel="noreferrer">Voir le projet</a>
              <img src={arrow} alt="logo arrow" />
            </div>

          </div>
          <div className="projectImg">
            <a href="https://www.zlawyer.fr/logiciel-avocats/" target="_blank" rel="noreferrer"><img src={zLawyer} alt="zLawyer Home Page" /></a>
          </div>
        </div>


        <div className="project project2">
          <div className="projectTxt">
            <h3>Semicolon</h3>
            <hr />
            <p>Projet d'études visant à sensibiliser sur les problématiques étudiantes.</p>

            <div className='projectLink'>
              <a href="https://semicolon.vercel.app/index.html" target="_blank" rel="noreferrer">Voir le projet</a>
              <img src={arrow} alt="logo arrow" />
            </div>

          </div>
          <div className="projectImg">
            <a href="https://semicolon.vercel.app/index.html" target="_blank" rel="noreferrer"><img src={semicolon} alt="Semicolon Home Page" /></a>
          </div>
        </div>

        <div className="project project3">
          <div className="projectTxt">
            <h3>raredream</h3>
            <hr />
            <p>Inspiré d’une maquette, ce site n’est que vitrine. Vous ne pourrez rien acheté... </p>

            <div className='projectLink'>
              <a href="https://raredream.august1.dev/" target="_blank" rel="noreferrer">Voir le projet</a>
              <img src={arrow} alt="logo arrow" />
            </div>

          </div>
          <div className="projectImg">
            <a href="https://raredream.august1.dev/" target="_blank" rel="noreferrer"><img src={raredream} alt="Raredream Home Page" /></a>
          </div>
        </div>

        <a href="/projects" className='button btnProject'>Voir plus</a>

      </div>


    </div >
  )
}
