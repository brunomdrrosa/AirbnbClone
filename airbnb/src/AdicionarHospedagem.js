"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const Create = () => {
    const [imagem, setImagem] = (0, react_1.useState)("");
    const [titulo, setTitulo] = (0, react_1.useState)("");
    const [descricao, setDescricao] = (0, react_1.useState)("");
    const [diaria, setDiaria] = (0, react_1.useState)("");
    const [cidade, setCidade] = (0, react_1.useState)("");
    const [estado, setEstado] = (0, react_1.useState)("");
    const [isPending, setIsPending] = (0, react_1.useState)(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { imagem, titulo, descricao, diaria, cidade, estado };
        const apiPost = axios_1.default.create({
            baseURL: "http://localhost:4000",
        });
        const response = apiPost.post("/casas", blog);
        console.log(response);
    };
    return (<div>
      <h2>Adicionar uma nova hospedagem</h2>
      <form onSubmit={handleSubmit}>
        <label>Título da hospedagem:</label>
        <input type="text" required value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
        <label>Blog Area</label>
        <input required value={imagem} onChange={(e) => setImagem(e.target.value)}></input>
        <label>Blog Author</label>
        <input value={descricao} onChange={(e) => setDescricao(e.target.value)}>
        </input>
        <label>Blog Content</label>
        <input value={diaria} onChange={(e) => setDiaria(e.target.value)}></input>
        <label>Blog Content</label>
        <input value={cidade} onChange={(e) => setCidade(e.target.value)}></input>
        <label>Blog Content</label>
        <input value={estado} onChange={(e) => setEstado(e.target.value)}></input>
        {!isPending && <button>Adicionar</button>}
        {isPending && <button disabled>Adicionando...</button>}
      </form>
    </div>);
};
exports.default = Create;
//# sourceMappingURL=AdicionarHospedagem.js.map