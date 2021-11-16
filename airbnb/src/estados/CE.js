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
const react_1 = __importStar(require("react"));
const Card_1 = __importDefault(require("../Card"));
const Footer_1 = __importDefault(require("../Footer"));
require("../index.css");
const axios_1 = __importDefault(require("axios"));
let hoje = new Date();
let horaAtual = hoje.getHours();
let saudacoes = "";
if (horaAtual >= 6 && horaAtual < 12) {
    saudacoes = "Bom dia";
}
else if (horaAtual >= 12 && horaAtual < 18) {
    saudacoes = "Boa tarde";
}
else {
    saudacoes = "Boa noite";
}
function criarCard(hospedagens) {
    return (<Card_1.default key={hospedagens.id} nome={hospedagens.titulo} descricao={hospedagens.descricao} preco={hospedagens.diaria} imagem={hospedagens.imagem} cidade={hospedagens.cidade} estado={hospedagens.estado}/>);
}
class MaiorPreco extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hospedagens: [],
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiMaiorPreco = axios_1.default.create({
                baseURL: "http://localhost:4000/casas/CE",
            });
            const response = yield apiMaiorPreco.get("");
            console.log(response.data);
            this.setState({ hospedagens: response.data });
        });
    }
    render() {
        return (<div>
        <h1 className="saudacoes">{saudacoes}, aqui estão as hospedagens:</h1>
        <dl className="moradias">{this.state.hospedagens.map(criarCard)}</dl>
        <Footer_1.default />
      </div>);
    }
}
exports.default = MaiorPreco;
//# sourceMappingURL=CE.js.map