import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Sobre from "./Sobre";
import { AdicionarHospedagem } from './AdicionarHospedagem';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="adicionar" element={<AdicionarHospedagem />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
