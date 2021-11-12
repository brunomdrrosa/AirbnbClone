import { appendFile } from "fs";
import { connect, disconnect } from "mongoose";
import * as CasaRepositorio from "./persistencia/casaRepositorio";
import express from "express";

const app = express();

const uri =
  "mongodb+srv://dbUser:bruno2308@cluster0.yoorm.mongodb.net/airbnbDatabase?retryWrites=true&w=majority";

async function main() {
  try {
    const cliente = await connect(uri);
    console.log("Conectado ao MongoDB Atlas");

    // console.log("Adicionando casas...");
    // let c1 = await CasaRepositorio.criar({
    //   id: "2",
    //   imagem:
    //     "https://a0.muscache.com/im/pictures/5ac70395-9dc0-47f3-b9d6-6d3df4b90591.jpg?im_w=1440",
    //   titulo: "FLAT COM VISTA INCRÍVEL EM FORTALEZA",
    //   descricao: "Casa para 2 hóspedes",
    //   diaria: 166,
    //   cidade: "Fortaleza",
    //   estado: "CE",
    // });
    // console.log(`Casa inserida: ${c1}`);

    console.log("Buscando casas...");
    let casas = await CasaRepositorio.buscar();
    casas.forEach((casa) => console.log(casa));
  } catch (error) {
    console.log(`Erro: ${error}`);
  } finally {
    await disconnect();
    console.log("Desconectado do MongoDB Atlas");
  }
}

main();
