"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasaModel = void 0;
const mongoose_1 = require("mongoose");
const CasaSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    imagem: { type: String, required: true },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    diaria: { type: Number, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
});
exports.CasaModel = (0, mongoose_1.model)("Casa", CasaSchema, "casas");
//# sourceMappingURL=casaModel.js.map