import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import storeitems from "../Data/items.json";

const cart = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id === action.payload.item
            ? (item.qty = action.payload.qty)
            : item.qty;
        }),
      };
    default:
      return state;
  }
}

function productReducer(state, action) {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };

    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };

    case "FILTER_BY_FASTDELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };

    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };

    case "CLEAR_FITLERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
      };
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

  const [state, dispatch] = useReducer(cartReducer, {
    products: storeitems,
    cart: [],
  });

  const [productState, dispatchProductState] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <cart.Provider
      value={{ state, dispatch, productState, dispatchProductState }}
    >
      {children}
    </cart.Provider>
  );
};

export default Context;

export function Cartstate() {
  return useContext(cart);
}
