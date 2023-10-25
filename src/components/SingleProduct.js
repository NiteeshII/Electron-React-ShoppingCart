import React from "react";
import { Card, Button } from "react-bootstrap";
import { Cartstate } from "../Context/context";
import classes from "./Home.module.css";
import Rating from "./Rating";

const SingleProduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = Cartstate();

  return (
    <div className={classes.products}>
      <Card style={{ width: "18rem", textAlign: "left" }}>
        <Card.Img variant="top" src={item.imgUrl} alt={item.name} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{`₹${item.price}`}</span>
            {item?.FastDelivery ? (
              <div> Fast Delivery</div>
            ) : (
              <div>4 day Delivery</div>
            )}
          </Card.Subtitle>
          <div style={{ padding: "0.5rem" }}>
            <Rating rating={item.rating} />
          </div>
          {cart?.some((each) => each.id === item.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item,
                })
              }
            >
              Remove Button
            </Button>
          ) : (
            <Button
              disabled={!item.inStock}
              onClick={() =>
                dispatch({
                  type: "ADD_ITEM",
                  payload: item,
                })
              }
            >
              {item.inStock ? "Add to Cart" : "out of Stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
