import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import hospedagens from "./hospedagens";

function criarCard(hospedagens: any) {
  return (
    <Card
      key={hospedagens.id}
      nome={hospedagens.nome}
      descricao={hospedagens.descricao}
      preco={hospedagens.preco}
      imagem={hospedagens.imagem}
      cidade={hospedagens.cidade}
      estado={hospedagens.estado}
    />
  );
}

export default function Home() {
  return (
      <div>
      <h1 style={{padding: "1rem"}}>Hospedagens</h1>
      <dl className="moradias">{hospedagens.map(criarCard)}</dl>
      </div>
  );
}