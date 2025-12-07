import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import CustomOrders from "../pages/CustomOrders";
import AboutUs from "../pages/AboutUs";
import CartSection from "../components/CartSection";
import Offers from "../pages/Offers";
import Login from "../components/Login";
import Profile from "../pages/Profile";

const route = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Login />,
  // },
  {
    path: "/",               
    element: <Root />,
    children: [
      { path:"/" , element: <Home /> },  
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contact", element: <Contact /> },
      { path: "/customorders", element: <CustomOrders /> },
      { path: "/offers", element: <Offers /> },
      { path: "/cartsection", element: <CartSection /> },
      { path: "/login" , element : <Login />}
    ]
      
  },
]);

export default route;
