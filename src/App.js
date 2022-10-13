import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import NotFound from "./pages/NotFound.js";

function App() {
  return (

    <BrowserRouter>
      <Routes >

        <Route exact path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />

      </Routes >
    </BrowserRouter>

  );
}

export default App;