import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import AdicionarHospedagem from './AdicionarHospedagem';
import Sobre from "./Sobre";
import MenorPreco from './MenorPreco';
import MaiorPreco from './MaiorPreco';
import RS from './estados/RS';
import SC from './estados/SC';
import SP from './estados/SP';
import RJ from './estados/RJ';
import CE from './estados/CE';
import BA from './estados/BA';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/" element={<Home />} />
        <Route path="adicionar" element={<AdicionarHospedagem />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="menorPreco" element={<MenorPreco />} />
        <Route path="maiorPreco" element={<MaiorPreco />} />
        <Route path="RS" element={<RS />} />
        <Route path="SC" element={<SC />} />
        <Route path="SP" element={<SP />} />
        <Route path="RJ" element={<RJ />} />
        <Route path="CE" element={<CE />} />
        <Route path="BA" element={<BA />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
