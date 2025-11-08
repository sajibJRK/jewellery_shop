import React from "react";
import Card from "./Card";

export default function ProductsCard({ visibleProduct }) {
   return (
      <div className="px-4 py-4 flex justify-center">
         <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleProduct.map((item) => (
               <Card key={item.id} item={item} />
            ))}
         </div>
      </div>
   );
}
