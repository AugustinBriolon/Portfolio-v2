import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import NotFound from "./pages/NotFound.js";
import Projects from "./pages/ProjectPage.js";
import Contact from "./pages/ContactPage.js";

function App() {

  console.log('%cBienvenue aux Développeurs', 'font-weight: bold; font-size: 45px;color: rgb(47,128,237); text-shadow: 3px 3px 0 rgb(4,77,145) , 6px 6px 0 rgb(42,21,113)')
  console.log('%cVous pouvez voir le code source de ce site sur mon Github : https://github.com/AugustinBriolon/Portfolio-v2', 'font-size: 10px')

  return (

    <BrowserRouter>
      <Routes >

        <Route exact path='/' element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />

      </Routes >
    </BrowserRouter>

  );
}

export default App;