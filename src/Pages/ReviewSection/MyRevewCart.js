import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillStar } from "react-icons/ai";

const MyRevewCart = ({ review }) => {
  const {
    review_description,
    image,
    rating,
    user_name,
    _id,
    service_name,
    date,
  } = review;

  const handleDelete = (id) => {
    fetch(`https://visa-consultant-server.vercel.app/reviewdelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          window.location.reload(false);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/mreview/${id}`);
  };
  return (
    <figure className="h-84 w-full shadow-2xl flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700 mb-5 ">
      <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
        <p className="text-slate-600 text-2xl">{service_name}</p>
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
          <p></p>
          <p>
            <small>
              Date: {date?.slice(0, 10)} at {date?.slice(11, 19)}{" "}
            </small>
          </p>
        </div>
      </figcaption>
      <div className="mt-5 flex gap-5">
        <button
          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
          onClick={() => handleDelete(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Delete
        </button>
        <button
          className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
          onClick={() => handleEdit(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
          Edit
        </button>
      </div>
    </figure>
  );
};

export default MyRevewCart;
