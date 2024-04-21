import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const [auth, setAuth] = useState(true);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to={"/"}>
                Anasayfa
              </Link>
            </Nav.Link>
            <NavDropdown title="Hakkımızda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ACM ?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Team</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#duyurular">Duyurular</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#iletişim">İletişim</Nav.Link>
            {auth ? (
              <Link to={"/signin"}>
                <Button onClick={() => setAuth(false)}>Sign İn</Button>
              </Link>
            ) : (
              <Link to={"/signup"}>
                <Button onClick={() => setAuth(true)}>Sign Up</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
