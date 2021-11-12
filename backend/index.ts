import express from "express";
import { connect, disconnect } from "mongoose";
import * as CasaRepositorio from "./persistencia/casaRepositorio";
import dotenv from "dotenv";

const app = express();
const uri =
  "mongodb+srv://dbUser:bruno2308@cluster0.yoorm.mongodb.net/airbnbDatabase?retryWrites=true&w=majority";

async function main() {
  const cliente = connect(uri);
  console.log("Conectado ao MongoDB Atlas");
  console.log("Buscando casas...");
  let casas = await CasaRepositorio.buscar();
  casas.forEach((casa) => console.log(casa));

  app.listen(4000, () => console.log("Servidor iniciado na porta 4000"));
  app.get("/casas", function (req, res) {
    res.send(casas);
  });
}

main();
