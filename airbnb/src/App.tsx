import React, {useState} from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar className="color-nav" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/">Airbnb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={NavLink} to="/adicionar">Adicionar hospedagem</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;
