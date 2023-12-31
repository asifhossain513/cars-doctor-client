import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
// import ServiceLayout from "../Layout/ServiceLayout";
import Bookings from "../Pages/Bookings/Bookings";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from '../Pages/Home/Home/Home';
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/checkout/:id',
        element: 
        <PrivateRoute>
          <CheckOut></CheckOut>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://cars-doctor-server-alpha.vercel.app/services/${params.id}`),
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            {' '}
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
    ],
  },
  // {
  //   path: '/servicedetails/:id',
  //   element: <ServiceLayout></ServiceLayout>
  // },
]);

export default router;
