import React from "react";
import { AiFillStar } from "react-icons/ai";

const Reviews = ({ data }) => {
  const { user_name, image, rating, review_description,date } = data;
  return (
    <div>
      <figure className="h-96 w-full mb-5 shadow-2xl flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
          <p className="my-4 font-light">{review_description}</p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
          <img
            className="w-9 h-9 rounded-full"
            src={image}
            alt="profile picture"
          />

          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>{user_name}</div>
            <div className="flex items-center gap-1">
            <div className="text-base font-bold text-gray-500 dark:text-gray-400">
              Rating : {rating}
            </div>
            <AiFillStar className="fill-orange-600" />
          </div>
          <p><small>Date: {date?.slice(0,10)} at {date?.slice(11,19)} </small></p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Reviews;
