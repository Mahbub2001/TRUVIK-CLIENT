import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Reviews from "../../component/Reviews/Reviews";
import "./DetailsServicePage.Module.css";
import { AuthContext } from "../../Hook/UserContext";

const DetailsServicePage = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData().data;

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://visa-consultant-server.vercel.app/review/${data?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
        setLoading(false);
      });
  }, [data?._id]);

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="shadow-2xl border-gray-400 lg:w-2/4 md:w-3/4 w-4/5">
        <PhotoProvider>
          <PhotoView src={data?.image}>
            <img className="w-full" src={data?.image} alt="" />
          </PhotoView>
        </PhotoProvider>
        <div className="p-5">
          <h1 className="my-5 text-3xl font-bold text-gray-700">
            {data?.name}
          </h1>
          <p>{data?.description}</p>
          <p className="my-3 font-bold">
            Rating :{" "}
            <span className="text-lime-600 font-extrabold">{data?.rating}</span>
          </p>
          <p className="font-bold">
            Price :{" "}
            <span className="font-extrabold text-blue-600">${data?.price}</span>
          </p>
        </div>
      </div>
      <div className="">
        <div className="mt-16 ">
          <h1 className="text-center text-5xl font-bold text-slate-700 mb-8">
            Reviews
          </h1>
          <div className="text-center">
            {user?.uid ? (
              <Link
                to={`/post-review/${data?._id}`}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Click here to give a review
              </Link>
            ) : (
              <Link
                to={`/post-review/${data?._id}`}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Please Log in Here For give review
              </Link>
            )}
          </div>
          <div className="mt-16">
            {loading ? (
              <div className="text-center ">
                <div role="status">
                  <svg
                    className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                <div className="">
                  {reviews.length > 0 ? (
                    reviews.map((data) => (
                      <Reviews data={data} key={data._id}></Reviews>
                    ))
                  ) : (
                    <>
                      <h1 className="text-center text-5xl ">No Review Here</h1>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsServicePage;
