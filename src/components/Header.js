import React from "react";
import { Container, Navbar, Form, Nav, Dropdown, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Cartstate } from "../Context/context";

const Header = () => {
  const {
    state: { cart },
    dispatchProductState,
  } = Cartstate();

  console.log(cart);
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
                onChange={(e) => {
                  dispatchProductState({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
            </Navbar.Text>
          </Navbar>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="transparent">{cart.length}</Badge>
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
