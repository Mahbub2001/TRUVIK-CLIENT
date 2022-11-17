import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blogs from "../../Pages/Blogs/Blogs";
import DetailsServicePage from "../../Pages/DetailsServicesPage/DetailsServicePage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import ForgetPassword from "../../Pages/ForgetPassword/ForgetPassword";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ReviewPage from "../../Pages/ReviewForm/ReviewPage";
import EditReviewPage from "../../Pages/ReviewSection/EditReviewPage";
import MyReview from "../../Pages/ReviewSection/MyReview";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/add-services",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:_id",
        loader: ({ params }) =>
          fetch(
            `https://visa-consultant-server.vercel.app/service/${params._id}`
          ),
        element: <DetailsServicePage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/mreview/:id",
        element: (
          <PrivateRoute>
            <EditReviewPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/post-review/:_id",
        loader: ({ params }) =>
          fetch(
            `https://visa-consultant-server.vercel.app/service/${params._id}`
          ),
        element: (
          <PrivateRoute>
            <ReviewPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
