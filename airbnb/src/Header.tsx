import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar className="color-nav" variant="dark">
      <Navbar.Brand href="#home">Airbnb</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#adicionar">Adicionar hospedagem</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
