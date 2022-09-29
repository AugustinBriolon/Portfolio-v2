import React from 'react'
import ImgMe from '../../assets/img/profilImg.png'

export default function Header() {
  return (
    <div className='section header'>

      <div className="title">
        <h1>Développeur</h1>
        <h1>Web</h1>
        <h2>Augustin Briolon</h2>
      </div>

      <div className="content">

        <div className='text'>
          <p>Développeur Web par passion, j’aime apprendre, <br /> créer et coder. Minimalite sur les bords...</p>
          <a href="/" className='button'>
            Contact
            <span class="bg"></span>
            </a>
        </div>

        <div className='imgMe'>
          <img src={ImgMe} alt="Augustin Briolon sous la forme d'un avatar" />
        </div>

      </div>
    </div>
  )
}
