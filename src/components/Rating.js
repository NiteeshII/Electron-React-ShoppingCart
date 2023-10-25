import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Rating = ({ rating, onClick }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} onClick={() => onClick(i)}>
            {rating > i ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
