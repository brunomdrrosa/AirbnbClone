import React, { Component, useState } from "react";
import { Casa } from "../../backend/entidades/casas";

export class AdicionarHospedagem extends Component<{}, Casa> {
  constructor(props: Casa) {
    super(props);
    this.state = {
      id: "",
      imagem: "",
      titulo: "",
      descricao: "",
      diaria: 0,
      cidade: "",
      estado: "",
    };
  
    async function handleSubmit(event: any) {
      event.preventDefault();
      const response = await fetch(
        "mongodb+srv://dbUser:bruno2308@cluster0.yoorm.mongodb.net/airbnbDatabase?retryWrites=true&w=majority",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        }
      );
      const data = await response.json();
      console.log(data);
    }

    this.render = () => {
      // const [value, setValue] = React.useState('');
      const { imagem, titulo, descricao, diaria, cidade, estado } = this.state;
      return (
        <div>
          <h1>Adicionar Hospedagem</h1>
          <form onSubmit={handleSubmit}>
            <label>Imagem:</label>
            <input type="text" name="imagem" value={imagem} onChange={e => e.target.value}/>
            <label>Titulo:</label>
            <input type="text" name="titulo" value={titulo} onChange={e => e.target.value}/>
            <label>Descrição:</label>
            <input type="text" name="descricao" value={descricao} onChange={e => e.target.value}/>
            <label>Diaria:</label>
            <input type="text" name="diaria" value={diaria} onChange={e => e.target.value}/>
            <label>Cidade:</label>
            <input type="text" name="cidade" value={cidade} onChange={e => e.target.value}/>
            <label>Estado:</label>
            <input type="text" name="estado" value={estado} onChange={e => e.target.value}/>
            <button>Enviar</button>
          </form>
        </div>
      );
    };
  }
}
