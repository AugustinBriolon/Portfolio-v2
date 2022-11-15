import { Link } from "react-router-dom";


export default function Contact() {
  return (
    <div className='section contact'>

      <div className="txt" id='contact'>
        <h2>Prêt à me faire confiance pour votre prochain site Internet  ?</h2>
      </div>

      <div className="c2a">
      <Link to="/contact" className='navLinks buttonPulse' >Contact</Link>
      </div>
    </div>
  )
}
