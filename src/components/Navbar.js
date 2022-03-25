import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header } from "../styles/Styles";

function Navbar() {
  return (
    <Header>
      <Nav className="justify-content-center">
        <Link className="nav-link" to="/">
          Sudaderas
        </Link>
        <Link className="nav-link" to="/add">
          Agregar Sudadera
        </Link>
      </Nav>
    </Header>
  );
}

export default Navbar;
