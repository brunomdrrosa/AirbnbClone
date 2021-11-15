import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar className="color-nav" variant="dark" expand="lg">
      <Navbar.Brand href="/home">Airbnb</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/menorPreco">Menor preço</Nav.Link>
          <Nav.Link href="/maiorPreco">Maior preço</Nav.Link>
          <Nav.Link href="/RS">Rio Grande do Sul</Nav.Link>
          <Nav.Link href="/SC">Santa Catarina</Nav.Link>
          <Nav.Link href="/SP">São Paulo</Nav.Link>
          <Nav.Link href="/RJ">Rio de Janeiro</Nav.Link>
          <Nav.Link href="/CE">Ceará</Nav.Link>
          <Nav.Link href="/BA">Bahia</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
