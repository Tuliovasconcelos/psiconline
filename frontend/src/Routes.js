import React from "react";
import GlobalStyles from 'styles/GlobalStyles';

import Main from "Main.js";
import CadastroPsicologo from "cadastroPsicologo";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function RoutesApp() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cadastroPsicologo" element={<CadastroPsicologo />} />
        </Routes>
      </Router>
    </>
  );
}