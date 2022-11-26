import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Img1 from '../../assets/img/notFound/1.svg'
import Img2 from '../../assets/img/notFound/2.svg'
import Img3 from '../../assets/img/notFound/3.svg'
import Img4 from '../../assets/img/notFound/4.svg'
import Img5 from '../../assets/img/notFound/5.svg'
import Img6 from '../../assets/img/notFound/6.svg'
import Img7 from '../../assets/img/notFound/7.svg'
import Img8 from '../../assets/img/notFound/8.svg'
import Img9 from '../../assets/img/notFound/9.svg'
import Img10 from '../../assets/img/notFound/10.svg'
import Img11 from '../../assets/img/notFound/11.svg'
import Img12 from '../../assets/img/notFound/12.svg'
import Img13 from '../../assets/img/notFound/13.svg'
import Img14 from '../../assets/img/notFound/14.svg'
import Img15 from '../../assets/img/notFound/15.svg'
import Img16 from '../../assets/img/notFound/16.svg'
import Img17 from '../../assets/img/notFound/17.svg'
import Img18 from '../../assets/img/notFound/18.svg'
import Img19 from '../../assets/img/notFound/19.svg'
import Img20 from '../../assets/img/notFound/20.svg'
import Img21 from '../../assets/img/notFound/21.svg'
import Img22 from '../../assets/img/notFound/22.svg'
import Img23 from '../../assets/img/notFound/23.svg'
import Img24 from '../../assets/img/notFound/24.svg'
import Img25 from '../../assets/img/notFound/25.svg'
import Img26 from '../../assets/img/notFound/26.svg'
import Img27 from '../../assets/img/notFound/27.svg'
import Img28 from '../../assets/img/notFound/28.svg'
import Img29 from '../../assets/img/notFound/29.svg'
import Img30 from '../../assets/img/notFound/30.svg'
import Img31 from '../../assets/img/notFound/31.svg'
import Img32 from '../../assets/img/notFound/32.svg'
import Img33 from '../../assets/img/notFound/33.svg'

const randomImage = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  Img21,
  Img22,
  Img23,
  Img24,
  Img25,
  Img26,
  Img27,
  Img28,
  Img29,
  Img30,
  Img31,
  Img32,
  Img33,
]

const images = randomImage[Math.floor(Math.random() * randomImage.length)];

export default function Error() {

  let navigate = useNavigate();
  let [countdown, setCountdown] = useState(5);

  useEffect(() => {
    countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
      if (countdown === 0) {
        navigate('/');
      }
  }, [countdown, navigate]);

  return (
    <div className='erroSection section'>

      <h1>404</h1>
      <p>" On ne force pas une curiosité, on l'éveille. " </p>
      <img src={images} alt="Not Found Template Visual" className='imgNotFound' />
      <Link to='/' className="button">Retour à l'accueil</Link>
      <p className="textMargin">Redirection dans {countdown} secondes</p>

    </div>
  )
}
