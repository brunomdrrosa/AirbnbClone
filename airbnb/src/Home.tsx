import React, { Component } from "react";
import Card from "./Card";
import Footer from "./Footer";
import api from "./api";

let hoje = new Date();
let horaAtual = hoje.getHours();
let saudacoes = "";

if (horaAtual >= 6 && horaAtual < 12) {
  saudacoes = "Bom dia";
} else if (horaAtual >= 12 && horaAtual < 18) {
  saudacoes = "Boa tarde";
} else {
  saudacoes = "Boa noite";
}

function criarCard(hospedagens: any) {
  return (
    <Card
      key={hospedagens.id}
      nome={hospedagens.titulo}
      descricao={hospedagens.descricao}
      preco={hospedagens.diaria}
      imagem={hospedagens.imagem}
      cidade={hospedagens.cidade}
      estado={hospedagens.estado}
    />
  );
}

export default class Home extends Component {
  state = {
    hospedagens: [],
  };

  async componentDidMount() {
    const response = await api.get("");
    console.log(response.data);

    this.setState({ hospedagens: response.data });
  }

  render() {
    return (
      <div>
        <h1 style={{ padding: "1rem" }}>{saudacoes}, aqui estão as hospedagens:</h1>
        <dl className="moradias">{this.state.hospedagens.map(criarCard)}</dl>
        <Footer />
      </div>
    );
  }
}
