import React from 'react'
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'
import twitter from 'react-useanimations/lib/twitter'


export default function Footer() {

  // Get the current year
  const year = new Date().getFullYear()

  return (
    <div className='section footer'>

      <div className="footerLogo">

        <a href="https://github.com/AugustinBriolon" target="_blank" rel="noreferrer" className='logo1'>

          <UseAnimations animation={github} size={40} autoplay={true} loop={true} />

        </a>

        <a href="https://www.linkedin.com/in/augustin-briolon-16831a1bb/" target="_blank" rel="noreferrer" className='logo2'>

          <UseAnimations animation={linkedin} size={40} autoplay={true} loop={true} />

        </a>

        <a href="https://twitter.com/AugustinBriolon" target="_blank" rel="noreferrer" className='logo3'>

          <UseAnimations animation={twitter} size={40} autoplay={true} loop={true} />

        </a>

      </div>

      <div className="footerTxt">
        <p>Augustin Briolon - {year}</p>
      </div>

    </div>
  )
}
