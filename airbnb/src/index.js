"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
const App_1 = __importDefault(require("./App"));
const react_router_dom_1 = require("react-router-dom");
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const Home_1 = __importDefault(require("./Home"));
const AdicionarHospedagem_1 = __importDefault(require("./AdicionarHospedagem"));
const Sobre_1 = __importDefault(require("./Sobre"));
const MenorPreco_1 = __importDefault(require("./MenorPreco"));
const MaiorPreco_1 = __importDefault(require("./MaiorPreco"));
const RS_1 = __importDefault(require("./estados/RS"));
const SC_1 = __importDefault(require("./estados/SC"));
const SP_1 = __importDefault(require("./estados/SP"));
const RJ_1 = __importDefault(require("./estados/RJ"));
const CE_1 = __importDefault(require("./estados/CE"));
const BA_1 = __importDefault(require("./estados/BA"));
react_dom_1.default.render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter>
    <react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<App_1.default />}>
      <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
        <react_router_dom_1.Route path="adicionar" element={<AdicionarHospedagem_1.default />}/>
        <react_router_dom_1.Route path="sobre" element={<Sobre_1.default />}/>
        <react_router_dom_1.Route path="menorPreco" element={<MenorPreco_1.default />}/>
        <react_router_dom_1.Route path="maiorPreco" element={<MaiorPreco_1.default />}/>
        <react_router_dom_1.Route path="RS" element={<RS_1.default />}/>
        <react_router_dom_1.Route path="SC" element={<SC_1.default />}/>
        <react_router_dom_1.Route path="SP" element={<SP_1.default />}/>
        <react_router_dom_1.Route path="RJ" element={<RJ_1.default />}/>
        <react_router_dom_1.Route path="CE" element={<CE_1.default />}/>
        <react_router_dom_1.Route path="BA" element={<BA_1.default />}/>
      </react_router_dom_1.Route>
    </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>
  </react_1.default.StrictMode>, document.getElementById('root'));
(0, reportWebVitals_1.default)();
//# sourceMappingURL=index.js.map