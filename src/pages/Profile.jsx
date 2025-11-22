import React, { use } from "react";
import { UserContext } from "../contaxt/userContext";
import { NavLink } from "react-router";

export default function Profile() {
   const { user, login, gest, setgest, userdata, gestdata } = use(UserContext);
   return (
      <>
         {
            // <section className='w-full h-screen'>
            //      user && (
            //     <div>
            //         <div>
            //             <div>
            //                 <img src={userdata.image} alt="" />
            //             </div>
            //             <h1>{userdata.name}</h1>
            //         </div>
            //         <NavLink to='cartsection'>
            //             <button>go to cart</button>
            //         </NavLink>
            //     </div>
            // )
            // </section>
         }
      </>
   );
}
