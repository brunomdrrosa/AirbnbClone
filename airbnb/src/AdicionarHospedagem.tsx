import { useState } from "react";
import axios from "axios";
import "./index.css";

const Create = () => {
  const [imagem, setImagem] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [diaria, setDiaria] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const blog = { imagem, titulo, descricao, diaria, cidade, estado };

    const apiPost = axios.create({
      baseURL: "http://localhost:4000",
     })
      const response = apiPost.post("/casas", blog);
      console.log(response);
    }


  return (
    <div>
      <h2 className="form">Adicionar uma nova hospedagem</h2>
      <form onSubmit={handleSubmit}>
        <label>Título da hospedagem:</label>
        <input
          type="text"
          required
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <label>Imagem da hospedagem:</label>
        <input
          required
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        ></input>
        <label>Descrição:</label>
        <input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        >
        </input>
        <label>Valor da diária</label>
        <input
          value={diaria}
          onChange={(e) => setDiaria(e.target.value)}
        ></input>
        <label>Cidade</label>
        <input
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        ></input>
        <label>Estado</label>
        <input
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        ></input>
        { !isPending && <button>Adicionar</button>}
        { isPending && <button disabled>Adicionando...</button>}
      </form>
    </div>
  );
};

export default Create;