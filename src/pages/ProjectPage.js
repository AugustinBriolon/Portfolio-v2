import Nav from '../components/Nav/Nav.js';
import Projects from '../components/ProjectPage/ProjectPage.js';
import MetaTags from 'react-meta-tags';


function ProjectPage() {

  return (
    <div className="App">

      <MetaTags>
        <meta name="robots" content="noindex"/>
        <meta name="googlebot" content="noindex"/>
      </MetaTags>

      <Nav />
      <Projects />

    </div>
  );
}

export default ProjectPage;
