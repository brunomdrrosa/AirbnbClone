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
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const CasaRepositorio = __importStar(require("./persistencia/casaRepositorio"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const corsOptions = {
    credentials: true,
    optionSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
const uri = "mongodb+srv://dbUser:bruno2308@cluster0.yoorm.mongodb.net/airbnbDatabase?retryWrites=true&w=majority";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const cliente = (0, mongoose_1.connect)(uri);
        console.log("Conectado ao MongoDB Atlas");
        console.log("Buscando casas...");
        let casas = yield CasaRepositorio.buscar();
        casas.forEach((casa) => console.log(casa));
        app.listen(4000, () => console.log("Servidor iniciado na porta 4000"));
        // Ordenar por ID
        app.get("/casas", function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.send(casas.sort((a, b) => a.id - b.id));
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
    });
}
main();
//# sourceMappingURL=index.js.map