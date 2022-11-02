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

        <a href="https://github.com/AugustinBriolon" target="_blank" rel="noreferrer" className='logoGitHub' aria-label="Image logo GitHub">

          <UseAnimations animation={github} size={40} strokeColor={'#191919'} fillColor={'#191919'} autoplay={true} loop={true} />

        </a>

        <a href="https://www.linkedin.com/in/augustin-briolon-16831a1bb/" target="_blank" rel="noreferrer" className='logoLinkedIn' aria-label="Image logo LinkedIn">

          <UseAnimations animation={linkedin} size={40} strokeColor={'#191919'} fillColor={'#191919'} autoplay={true} loop={true} />

        </a>

        <a href="https://twitter.com/AugustinBriolon" target="_blank" rel="noreferrer" className='logoTwitter' aria-label="Image logo Twitter">

          <UseAnimations animation={twitter} size={40} strokeColor={'#191919'} fillColor={'#191919'} autoplay={true} loop={true} />

        </a>

      </div>

      <div className="footerTxt">
        <p>Augustin Briolon - {year}</p>
      </div>

    </div>
  )
}
