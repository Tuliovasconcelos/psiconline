import React from "react";
import GlobalStyles from 'styles/GlobalStyles';

import Main from "Main.js";
import CadastroPsicologo from "CadastroPsicologo";
import Login from "Login";
import Agendar from "Agendar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadSuccess from "CadSuccess";
import CadError from "CadError";
import PerfilPsico from "PerfilPsico";
export default function RoutesApp() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/cadSuccess" element={<CadSuccess />} />
          <Route path="/perfilPsico" element={<PerfilPsico />} />
          <Route path="/cadError" element={<CadError />} />
          <Route path="/cadastroPsicologo" element={<CadastroPsicologo />} />
        </Routes>
      </Router>
    </>
  );
}