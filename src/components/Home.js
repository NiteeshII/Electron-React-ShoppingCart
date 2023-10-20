import React from "react";
import { Cartstate } from "../Context/context";
import Filter from "./Filter";
import classes from "./Home.module.css";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products, cart },
  } = Cartstate();
  console.log(products, cart);
  return (
    <div className={classes.Home}>
      <div className={classes["filter-container"]}>
        <Filter />
      </div>
      <div className={classes["homepage-container"]}>
        {products.map((item) => {
          return (
            <span key={item.id}>
              <SingleProduct item={item} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
