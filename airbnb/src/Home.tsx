import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
// import hospedagens from "./hospedagens";
import api from "./api";

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
        <h1 style={{ padding: "1rem" }}>Hospedagens</h1>
        <dl className="moradias">{this.state.hospedagens.map(criarCard)}</dl>
      </div>
    );
  }
}

// export default function Home() {
//   return (
//       <div>
//       <h1 style={{padding: "1rem"}}>Hospedagens</h1>
//       <dl className="moradias">{hospedagens.map(criarCard)}</dl>
//       </div>
//   );
// }
