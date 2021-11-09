import { connect, disconnect } from "mongoose";
import * as CasaRepositorio from "./persistencia/casaRepositorio";

const uri =
  "mongodb+srv://dbUser:bruno2308@cluster0.yoorm.mongodb.net/airbnbDatabase?retryWrites=true&w=majority";

async function main() {
  try {
    const cliente = await connect(uri);
    console.log("Conectado ao MongoDb Atlas");

    // console.log("Adicionando casas...");
    // let c1 = await CasaRepositorio.criar({
    //   id: "1",
    //   imagem:
    //     "https://a0.muscache.com/im/pictures/9a4677d9-8344-4c61-b8da-c8a8af473daa.jpg?im_w=1200",
    //   titulo: "Novíssimo Trend",
    //   descricao: "Casa para 2 hóspedes",
    //   diaria: 186,
    //   cidade: "Porto Alegre",
    //   estado: "RS",
    // });
    // console.log(`Casa inserida: ${c1}`);

    console.log("Buscando casas...");
    let casas = await CasaRepositorio.buscar();
    casas.forEach((casa) => console.log(casa));
  } catch (error) {
    console.log(`Erro: ${error}`);
  } finally {
    await disconnect();
    console.log("Desconectado do MongoDb Atlas");
  }
}

main();
