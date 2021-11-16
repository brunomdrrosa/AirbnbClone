"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
function Header() {
    return (<react_bootstrap_1.Navbar className="color-nav" variant="dark" expand="lg">
      <react_bootstrap_1.Navbar.Brand href="/home">Airbnb</react_bootstrap_1.Navbar.Brand>
      <react_bootstrap_1.Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <react_bootstrap_1.Navbar.Collapse id="basic-navbar-nav">
        <react_bootstrap_1.Nav className="me-auto">
          <react_bootstrap_1.Nav.Link href="/home">Home</react_bootstrap_1.Nav.Link>
          <react_bootstrap_1.Nav.Link href="/menorPreco">Menor preço</react_bootstrap_1.Nav.Link>
          <react_bootstrap_1.Nav.Link href="/maiorPreco">Maior preço</react_bootstrap_1.Nav.Link>
          <react_bootstrap_1.Nav.Link href="/RS">Rio Grande do Sul</react_bootstrap_1.Nav.Link>
          <react_bootstrap_1.Nav.Link href="/SC">Santa Catarina</react_bootstrap_1.Nav.Link>
          <react_bootstrap_1.Nav.Link href="/SP">São Paulo</react_bootstrap_1.Nav.Link>
          <react_bootstrap_1.Nav.Link href="/RJ">Rio de Janeiro</react_bootstrap_1.Nav.Link>
          <react_bootstrap_1.Nav.Link href="/CE">Ceará</react_bootstrap_1.Nav.Link>
          <react_bootstrap_1.Nav.Link href="/BA">Bahia</react_bootstrap_1.Nav.Link>
        </react_bootstrap_1.Nav>
      </react_bootstrap_1.Navbar.Collapse>
    </react_bootstrap_1.Navbar>);
}
exports.default = Header;
//# sourceMappingURL=Header.js.map