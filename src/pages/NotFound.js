import Nav from '../components/Nav/Nav.js';
import Error from '../components/Error/Error.js';
import MetaTags from 'react-meta-tags';


const NotFound = () =>
  <div>

    <MetaTags>
      <meta name="robots" content="noindex" />
      <meta name="googlebot" content="noindex" />
    </MetaTags>

    <Nav />
    <Error />

  </div>

export default NotFound