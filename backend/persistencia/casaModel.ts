import { Casa } from "../entidades/casas";
import { model, Schema } from "mongoose";

const CasaSchema = new Schema<Casa>({
  id: { type: Number, required: true },
  imagem: { type: String, required: true },
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  diaria: { type: Number, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
});

export const CasaModel = model<Casa>("Casa", CasaSchema, "casas");
