import React from "react";
import { Cartstate } from "../Context/context";
import Filter from "./Filter";
import classes from "./Home.module.css";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = Cartstate();

  function transformed() {
    let sortedProducts = products;

    if (sort) {
      sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.FastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  }
  return (
    <div className={classes.Home}>
      <div className={classes["filter-container"]}>
        <Filter />
      </div>
      <div className={classes["homepage-container"]}>
        {transformed().map((item) => {
          return (
            <span>
              <SingleProduct item={item} key={item.id} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
