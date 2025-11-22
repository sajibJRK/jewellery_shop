import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import route from "./Router/Route.jsx";
import ProductsProvider from "./contaxt/ProductsContext.jsx";
import { UserProvider } from "./contaxt/userContext.jsx";
import BuyProvider from "./contaxt/BuypageContext.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <UserProvider>
         <BuyProvider>
            <ProductsProvider>
               <RouterProvider router={route}></RouterProvider>
            </ProductsProvider>
         </BuyProvider>
      </UserProvider>
   </StrictMode>,
);
