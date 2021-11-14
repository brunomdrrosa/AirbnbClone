import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";

function Card(props: any) {
  return (
    <dl className="moradias">
      <div className="term">
        <dt>
          <img className="imagem-hospedagem" src={props.imagem} alt="Imagem da hospedagem" />
          <h1 className="titulo-hospedagem">{props.nome}</h1>
          <p>{props.id}</p>
          <span className="descricao-hospedagem">{props.descricao}</span>
        </dt>
        <dd className="local-hospedagem">{props.cidade} - {props.estado}</dd>
        <dd className="diaria-hospedagem">R$ {props.preco}/noite</dd>
        <Button variant="primary">Reservar agora</Button>
      </div>
    </dl>
  );
}

export default Card;
