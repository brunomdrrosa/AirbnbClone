import React, { Component } from "react";
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

    // let changeHandler = (event: any) => {
    //   this.setState({
    //     [event.target.name]: event.target.value,
    //   });
    // };

    this.render = () => {
      const {imagem, titulo, descricao, diaria, cidade, estado} = this.state;
      return (
        <div>
          <h1>Adicionar Hospedagem</h1>
          <form>
            <label>Imagem:</label>
            <input type="text" name="imagem" value={imagem} />
            <label>Titulo:</label>
            <input type="text" name="titulo" value={titulo}/>
            <label>Descricao:</label>
            <input type="text" name="descricao" value={descricao}/>
            <label>Diaria:</label>
            <input type="text" name="diaria" value={diaria}/>
            <label>Cidade:</label>
            <input type="text" name="cidade" value={cidade}/>
            <label>Estado:</label>
            <input type="text" name="estado" value={estado}/>
            <button>Enviar</button>
          </form>
        </div>
      );
    };
  }
}
