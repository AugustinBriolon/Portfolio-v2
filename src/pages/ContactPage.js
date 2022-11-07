import Nav from '../components/Nav/Nav.js';
import Contact from '../components/ContactPage/ContactPage.js';
import Line from '../components/Line/Line';
import Footer from '../components/Footer/Footer';
import MetaTags from 'react-meta-tags';


function ContactPage() {

  return (
    <div>

      <MetaTags>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </MetaTags>

      <Nav />
      <Contact />
      <Line />
      <Footer />

    </div>
  );
}

export default ContactPage;
