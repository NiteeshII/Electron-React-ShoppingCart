import React from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import classes from "./Filter.module.css";

const Filter = () => {
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
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Decending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
        Ratings :{" "}
        <span>
          <Rating rating={3} />
        </span>
      </span>
      <Button variant="light" className={classes["Filter-Button"]}>
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
