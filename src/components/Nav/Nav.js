import React from 'react'
import { useState } from 'react'

export default function Nav() {

  const [showLinks, setShowLinks] = useState(false)

  const hangleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className={`${showLinks ? "showNav" : "hidden"} navbar`}>
      <div className="navBox">
        <a href="/" className='logoAB' aria-label="Logo Principal AB">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="65" viewBox="0 0 200.000000 156.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,156.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M120 1492 l-115 -67 0 -645 0 -645 115 -67 c148 -87 200 -90 200 -12
0 37 -10 45 -132 114 l-78 44 0 566 0 566 78 44 c122 69 132 77 132 114 0 78
-52 75 -200 -12z" className="svg-elem-1"></path>
              <path d="M445 1439 c-116 -67 -217 -127 -225 -135 -13 -13 -15 -86 -18 -516
-3 -558 -4 -548 61 -548 18 0 38 5 45 12 9 9 12 132 12 493 l0 480 168 97 c92
53 175 100 183 103 9 3 46 -12 87 -35 l72 -42 0 -537 c0 -508 1 -539 18 -554
23 -21 66 -22 86 -1 14 14 16 80 16 583 l0 568 -22 20 c-38 35 -221 133 -248
133 -14 0 -119 -54 -235 -121z" className="svg-elem-2"></path>
              <path d="M1188 1502 c-53 -32 -105 -66 -117 -76 -21 -19 -21 -22 -21 -646 l0
-627 23 -20 c40 -37 218 -133 245 -133 17 0 114 50 247 128 255 148 239 126
233 315 -4 140 3 130 -155 220 -163 92 -173 85 -173 -126 0 -160 6 -177 59
-177 42 0 55 24 61 111 l5 79 43 -26 42 -25 0 -82 0 -83 -178 -102 c-98 -56
-181 -102 -184 -102 -4 0 -38 18 -77 41 l-71 41 0 568 0 568 83 47 c128 74
145 95 111 143 -25 36 -67 27 -176 -36z" className="svg-elem-3"></path>
              <path d="M1503 1442 c-111 -65 -211 -126 -222 -136 -21 -19 -21 -26 -21 -527
0 -558 -2 -539 60 -539 60 0 60 -4 60 516 l0 472 175 101 c96 56 177 101 181
101 3 0 40 -19 80 -42 l74 -42 0 -203 0 -202 -97 -57 c-54 -32 -101 -62 -105
-68 -24 -35 6 -96 48 -96 19 0 214 109 247 138 16 14 17 38 15 291 l-3 276
-115 67 c-75 45 -125 68 -145 67 -20 0 -100 -41 -232 -117z" className="svg-elem-4"></path>
              <path d="M545 1255 c-60 -35 -116 -74 -122 -87 -8 -15 -13 -70 -13 -155 0
-120 2 -135 20 -153 25 -25 62 -26 83 -2 14 15 17 41 17 133 l0 114 40 23 c21
12 41 22 44 22 4 0 6 -34 6 -75 0 -62 4 -79 20 -95 24 -24 48 -25 78 -4 21 14
22 22 22 164 0 212 -15 221 -195 115z" className="svg-elem-5"></path>
              <path d="M1595 1254 c-60 -36 -113 -70 -117 -77 -17 -25 -4 -71 24 -86 29 -17
34 -15 126 39 l52 30 0 -49 0 -50 -97 -57 c-54 -32 -101 -62 -106 -68 -16 -24
-2 -70 26 -86 26 -14 30 -13 83 15 120 65 189 111 201 135 17 34 17 256 0 290
-23 46 -67 38 -192 -36z" className="svg-elem-6"></path>
              <path d="M548 774 c-73 -43 -120 -76 -127 -91 -7 -16 -11 -130 -11 -331 0
-345 1 -352 64 -352 19 0 39 6 45 13 7 9 12 112 13 313 l3 299 43 23 42 23 0
-259 c0 -238 1 -260 18 -275 26 -24 79 -22 92 2 6 13 10 140 10 344 0 301 -1
325 -18 340 -10 10 -27 17 -38 17 -10 0 -71 -30 -136 -66z" className="svg-elem-7"></path>
              <path d="M1906 704 c-14 -13 -16 -50 -16 -253 l0 -237 -77 -44 c-123 -69 -133
-77 -133 -114 0 -78 52 -75 200 12 l115 67 3 280 c2 254 1 281 -15 293 -23 17
-58 15 -77 -4z" className="svg-elem-8"></path>
            </g>
          </svg>
        </a>
      </div>
      <ul className="navListLinks">
        <li className="navItem navBox">
          <a href="/projects" className='navLinks'>Projets</a>
        </li>
        <li className="navItem navBox">
          <a href="#contact" className='navLinks'>Contact</a>
        </li>
      </ul>
      <button className='navBurger' onClick={hangleShowLinks} aria-label="BurgerLogo">
        <span className='burgerBar'></span>
      </button>
    </nav>
  )
}
