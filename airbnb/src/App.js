"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
function App() {
    return (<div className="App">
      <react_bootstrap_1.Navbar className="color-nav" variant="dark" expand="lg">
      <react_bootstrap_1.Navbar.Brand as={react_router_dom_1.NavLink} to="/">Airbnb</react_bootstrap_1.Navbar.Brand>
        <react_bootstrap_1.Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <react_bootstrap_1.Navbar.Collapse id="basic-navbar-nav">
          <react_bootstrap_1.Nav className="me-auto">
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/">Home</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/sobre">Sobre</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/adicionar">Adicionar hospedagem</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/menorPreco">Menor Preço</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/maiorPreco">Maior Preço</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link>{""}</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/RS">Rio Grande do Sul</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/SC">Santa Catarina</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/SP">São Paulo</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/RJ">Rio de Janeiro</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/CE">Ceará</react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link as={react_router_dom_1.NavLink} to="/BA">Bahia</react_bootstrap_1.Nav.Link>
          </react_bootstrap_1.Nav>
        </react_bootstrap_1.Navbar.Collapse>
      </react_bootstrap_1.Navbar>
      <react_router_dom_1.Outlet />
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map