import React from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import zLawyer from '../../assets/img/zLawyer.webp'
import semicolon from '../../assets/img/semicolon.webp'
import raredream from '../../assets/img/raredream.webp'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Projects() {

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
        start: 'top center',
        end: 'bottom center',
      }
    })
  }

  useEffect(() => {
    slideInTop('.project1', 0, 1)
  }, [])
  useEffect(() => {
    slideInTop('.project2', 0, 1)
  }, [])
  useEffect(() => {
    slideInTop('.project3', 0, 1)
  }, [])

  return (
    <div className='section projectSection' id='project'>

      <h2 className='titleProject'>Projets</h2>

      <div className="projectsContainer">

        <div className="project project1">
          <div className="projectTxt">
            <div>
              <h4>zLawyer</h4>
              <hr />
            </div>
            <p>zLawyer est un logiciel de gestion de <br /> cabinets d'avocats. (réalisé avec Matteo Courquin)</p>
            <a href="https://www.zlawyer.fr/logiciel-avocats/" target="_blank" rel="noreferrer">Voir le projet <i className='arrow'></i> </a>
          </div>
          <div className="projectImg">
            <a href="https://www.zlawyer.fr/logiciel-avocats/" target="_blank" rel="noreferrer"><img src={zLawyer} alt="zLawyer Home Page" /></a>
          </div>
        </div>


        <div className="project project2">
          <div className="projectTxt">
            <h4>Semicolon</h4>
            <hr />
            <p>Projet d'études visant à sensibiliser sur les problématiques étudiantes.</p>
            <a href="https://semicolon.vercel.app/index.html" target="_blank" rel="noreferrer">Voir le projet <i className='arrow'></i> </a>
          </div>
          <div className="projectImg">
            <a href="https://semicolon.vercel.app/index.html" target="_blank" rel="noreferrer"><img src={semicolon} alt="Semicolon Home Page" /></a>
          </div>
        </div>

        <div className="project project3">
          <div className="projectTxt">
            <h4>raredream</h4>
            <hr />
            <p>Inspiré d’une maquette, ce site n’est que vitrine... vous ne pourrez rien acheté.</p>
            <a href="https://raredream.august1.dev/" target="_blank" rel="noreferrer">Voir le projet <i className='arrow'></i> </a>
          </div>
          <div className="projectImg">
            <a href="https://raredream.august1.dev/" target="_blank" rel="noreferrer"><img src={raredream} alt="Raredream Home Page" /></a>
          </div>
        </div>

      </div>


    </div >
  )
}
