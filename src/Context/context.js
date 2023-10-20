import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import storeitems from "../Data/items.json";

const cart = createContext();

function cartRedcuer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const Context = ({ children }) => {
  // const products = [...Array(20)].map((item) => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.random.image(),
  //   inStock: faker.random.arrayElement([0, 3, 5, 7, 4]),
  //   fastDelivery: faker.datatype.boolean(),
  //   ratings: faker.random.arrayElement([0, 1, 2, 3, 4, 5]),
  // }));

  const [state, dispatch] = useReducer(cartRedcuer, {
    products: storeitems,
    cart: [],
  });
  return <cart.Provider value={{ state, dispatch }}>{children}</cart.Provider>;
};

export default Context;

export function Cartstate() {
  return useContext(cart);
}
