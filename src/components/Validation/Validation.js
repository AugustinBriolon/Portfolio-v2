import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react";

export default function Sucess() {

  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      return navigate('/')
    }, 5000);
  }, [navigate]);
  

  return (
    <div className='section'>
      <h1>Votre demande a bien été envoyé !</h1>

      <p>Je vous répondrais dans les plus brefs délais.</p>

      <div className="redirection">
        <Link to='/'>Retour à l'accueil</Link>
      </div>
      
    </div>
  )
}
