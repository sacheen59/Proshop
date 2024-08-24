import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to={"/cart"}>
                <Nav.Link>
                  <i className="fa-solid fa-cart-shopping mx-1"></i>
                  cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to={"/login"}>
                <Nav.Link>
                  <i className="fa-solid fa-user mx-1"></i>
                  login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
