import React from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import classes from "./Filter.module.css";
import { Cartstate } from "../Context/context";

const Filter = () => {
  const {
    productState: { sort, byStock, byFastDelivery, byRating },
    dispatchProductState,
  } = Cartstate();

  console.log(byRating);
  return (
    <div className={classes.Filters}>
      <h2>Filtered Elements</h2>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            dispatchProductState({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Decending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            dispatchProductState({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            dispatchProductState({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            dispatchProductState({
              type: "FILTER_BY_FASTDELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        Ratings :{" "}
        <span>
          <Rating
            rating={byRating}
            onClick={(i) => {
              dispatchProductState({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              });
            }}
          />
        </span>
      </span>
      <Button
        variant="light"
        className={classes["Filter-Button"]}
        onClick={() =>
          dispatchProductState({
            type: "CLEAR_FITLERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
