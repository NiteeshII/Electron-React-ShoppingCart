import React from "react";
import {
  Container,
  Navbar,
  Form,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Cartstate } from "../Context/context";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    dispatchProductState,
  } = Cartstate();

  console.log(cart);
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/"> Shopping Cart</Link>
          </Navbar.Brand>
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
                align="end"
                style={{
                  minWidth: 370,
                  backgroundColor: "white",
                  border: "1px solid",
                  color: "black",
                }}
              >
                {cart.length !== 0 ? (
                  <>
                    {cart.map((item) => (
                      <span className={classes.cartitem} key={item.id}>
                        <img
                          src={item.imgUrl}
                          className="cartImage"
                          alt={item.name}
                        />
                        <span className={classes.cartItemDetails}>
                          <div>{item.name}</div>
                          <div style={{ textAlign: "center" }}>
                            ₹{item.price}
                          </div>
                        </span>
                        <AiFillDelete
                          size="20px"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_ITEM",
                              payload: item,
                            })
                          }
                        />
                      </span>
                    ))}
                    <div className={classes.ButtonContainer}>
                      <Link to={"/cart"}>
                        <Button
                          variant="primary"
                          className={classes.cartButton}
                        >
                          Go To Cart
                        </Button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
