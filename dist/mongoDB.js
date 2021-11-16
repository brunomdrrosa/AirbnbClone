"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CasaRepositorio = __importStar(require("./persistencia/casaRepositorio"));
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const db = require('db');
const app = (0, express_1.default)();
const uri = process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cliente = yield (0, mongoose_1.connect)(uri);
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
            let casas = yield CasaRepositorio.buscar();
            casas.forEach((casa) => console.log(casa));
        }
        catch (error) {
            console.log(`Erro: ${error}`);
        }
        finally {
            yield (0, mongoose_1.disconnect)();
            console.log("Desconectado do MongoDB Atlas");
        }
    });
}
main();
//# sourceMappingURL=mongoDB.js.map