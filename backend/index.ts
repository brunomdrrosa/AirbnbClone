import express from "express";
import { connect, disconnect } from "mongoose";
import * as CasaRepositorio from "./persistencia/casaRepositorio";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

const corsOptions = {
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const uri =
  "mongodb+srv://dbUser:bruno2308@cluster0.yoorm.mongodb.net/airbnbDatabase?retryWrites=true&w=majority";

async function main() {
  const cliente = connect(uri);
  console.log("Conectado ao MongoDB Atlas");
  console.log("Buscando casas...");
  let casas = await CasaRepositorio.buscar();
  casas.forEach((casa) => console.log(casa));

  app.listen(4000, () => console.log("Servidor iniciado na porta 4000"));

  // Ordenar por ID
  app.get("/casas", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(casas.sort((a, b) => a.id! - b.id!));
  });

  // Ordenar por menor preço
  app.get("/casas/ordenarPorMenorPreco", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(casas.sort((a, b) => a.diaria - b.diaria));
  });

  // Ordenar por maior preço
  app.get("/casas/ordenarPorMaiorPreco", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(casas.sort((a, b) => b.diaria - a.diaria));
  });

  // Filtrar por estados
  app.get("/casas/RS", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(casas.filter((casa) => casa.estado === "RS"));
  });
  
  app.get("/casas/SC", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(casas.filter((casa) => casa.estado === "SC"));
  });

  app.get("/casas/SP", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(casas.filter((casa) => casa.estado === "SP"));
  });

  app.get("/casas/RJ", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(casas.filter((casa) => casa.estado === "RJ"));
  });

  app.get("/casas/CE", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(casas.filter((casa) => casa.estado === "CE"));
  });

  app.get("/casas/BA", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(casas.filter((casa) => casa.estado === "BA"));
  });
}

main();
