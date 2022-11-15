import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Sucess() {

  let navigate = useNavigate();
  let [countdown, setCountdown] = useState(5);

  useEffect(() => {
    countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
      if (countdown === 0) {
        navigate('/');
      }
  }, [countdown, navigate]);

  return (
    <div className='section validationSection'>
      <h2>Votre demande a bien été envoyé !</h2>

      <p className="textMargin">Je vous répondrais dans les plus brefs délais.</p>

      <Link to='/' className="button">Retour à l'accueil</Link>
      <p className="textMargin">Vous allez être redirigé dans {countdown} secondes</p>

    </div>
  )
}
