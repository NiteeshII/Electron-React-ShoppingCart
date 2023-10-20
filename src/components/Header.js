import React from "react";
import { Container, Navbar, Form, Nav, Dropdown, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
          <Navbar>
            <Navbar.Text className="Text">
              <Form.Control
                style={{ width: 500 }}
                placeholder="Search a Product"
                className="m-auto"
              />
            </Navbar.Text>
          </Navbar>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="transparent">{10}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  minWidth: 200,
                  backgroundColor: "white",
                  border: "1px solid",
                  color: "black",
                }}
              >
                <span style={{ padding: 10 }}>Cart is Empty</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
