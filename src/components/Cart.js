import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { Cartstate } from "../Context/context";
import classes from "./Home.module.css";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = Cartstate();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    );
  }, [cart]);

  return (
    <div className={classes["Cart-Home"]}>
      <div className={classes["CartItem-Container"]}>
        <ListGroup>
          {cart.map((item) => {
            return (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.imageURL} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{item.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>₹{item.price}</span>
                  </Col>
                  <Col md={2}>
                    <Rating byRating={item.rating} />
                  </Col>
                  <Col md={2}>
                    <Form.Select
                      value={item.qty}
                      onChange={(e) => {
                        console.log(e.target.value);
                        dispatch({
                          type: "CHANGE_CART_QUANTITY",
                          payload: {
                            item: item.id,
                            qty: e.target.value,
                          },
                        });
                      }}
                    >
                      {[...Array(10)].map((_, i) => {
                        return <option key={i + 1}>{i + 1}</option>;
                      })}
                    </Form.Select>
                  </Col>
                  <Col>
                    <span>
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
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <div className={classes["SubTotal-Container"]}>
        <span>{`Subtotal (${cart.length}) items`}</span>
        <span>{`Total: ₹${total}`}</span>
        <Button variant="primary" size="lg">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
