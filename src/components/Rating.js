import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return rating > i ? <AiFillStar /> : <AiOutlineStar />;
      })}
    </>
  );
};

export default Rating;
