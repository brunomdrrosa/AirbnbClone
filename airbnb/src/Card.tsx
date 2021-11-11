import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";

function Card(props: any) {
  return (
    <dl className="moradias">
      <div className="term">
        <dt>
          <img className="imagem-hospedagem" src={props.imagem} />
          {props.nome}
          <p>{props.id}</p>
          <span>{props.descricao}</span>
        </dt>
        <dd>{props.cidade} - {props.estado}</dd>
        <dd>R$ {props.preco}/noite</dd>
        <Button variant="primary">Reservar agora</Button>
      </div>
    </dl>
  );
}

export default Card;
