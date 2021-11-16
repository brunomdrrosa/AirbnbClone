"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("./index.css");
function Card(props) {
    return (<dl className="moradias">
      <div className="term">
        <dt>
          <img className="imagem-hospedagem" src={props.imagem} alt="Imagem da hospedagem"/>
          <h1 className="titulo-hospedagem">{props.nome}</h1>
          <p>{props.id}</p>
          <span className="descricao-hospedagem">{props.descricao}</span>
        </dt>
        <dd className="local-hospedagem">{props.cidade} - {props.estado}</dd>
        <dd className="diaria-hospedagem">R$ {props.preco}/noite</dd>
        <react_bootstrap_1.Button variant="primary">Reservar agora</react_bootstrap_1.Button>
      </div>
    </dl>);
}
exports.default = Card;
//# sourceMappingURL=Card.js.map