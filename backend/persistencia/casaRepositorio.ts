import { Casa } from "../entidades/casas";
import { CasaModel } from "./casaModel";

export async function criar(casa: Casa): Promise<Casa> {
    return CasaModel.create(casa); //retorna uma Promise
}

export async function buscar(): Promise<Casa[]> {
    let consulta = CasaModel.find().sort("titulo");
    return consulta.exec(); //retorna uma Promise
}