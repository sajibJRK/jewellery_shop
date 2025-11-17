import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Silver from "../pages/Silver";
import CustomOrders from "../pages/CustomOrders";
import AboutUs from "../pages/AboutUs";
import CartSection from "../components/CartSection";
import Offers from "../pages/Offers";

const route = createBrowserRouter([
    {
        path:'/',
        Component : Root,
        children: [
            {
                path: '/',
                Component : Home
            },
            {
                path: '/aboutus',
                Component: AboutUs
            },
            {
                path:'/contact',
                Component : Contact
            },
            {
                path:'/customorders',
                Component :CustomOrders
            },
            {
                path:'/offers',
                Component: Offers
            },
            {
                path:'/silver',
                Component:Silver
            },
            {
                path:'/cartsection',
                Component : CartSection
            }
        ]
    }
])
export default route