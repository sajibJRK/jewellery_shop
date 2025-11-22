import { useState, useEffect } from "react";

export default function LiveRates() {
   const [rates, setRates] = useState(null);

   const GRAMS_PER_VORI = 11.664;
   const ANNAS_PER_VORI = 16;
   const GRAMS_PER_ANNA = GRAMS_PER_VORI / ANNAS_PER_VORI;

   useEffect(() => {
      const mockRates = {
         gold24: 7500,
         gold22: 7500 * (22 / 24),
         gold21: 7500 * (21 / 24),
         gold18: 7500 * (18 / 24),
         silver: 105,
      };

      setRates(mockRates);
   }, []);

   if (!rates) return <p className="text-center py-6">Loading...</p>;

   const format = (num) =>
      num.toLocaleString(undefined, { maximumFractionDigits: 2 });

   const rows = [
      { label: "Gold — 24K", value: rates.gold24 },
      { label: "Gold — 22K", value: rates.gold22 },
      { label: "Gold — 21K", value: rates.gold21 },
      { label: "Gold — 18K", value: rates.gold18 },
      { label: "Silver — 999", value: rates.silver },
   ];

   return (
      <div className="w-full mx-auto my-6 p-6 bg-black shadow-lg rounded-2xl border border-gray-100">
         <h2 className="text-xl md:text-2xl font-semibold mb-4">
            আজকের লাইভ রেট (BDT)
         </h2>

         <div className="overflow-x-auto">
            <table className="w-full border-collapse">
               <thead>
                  <tr className="bg-gray-500 text-left">
                     <th className="p-3 font-semibold border-b">
                        Metal / Purity
                     </th>
                     <th className="p-3 font-semibold border-b">Per Gram</th>
                     <th className="p-3 font-semibold border-b">Per Vori</th>
                     <th className="p-3 font-semibold border-b">Per Anna</th>
                  </tr>
               </thead>

               <tbody>
                  {rows.map((row, idx) => (
                     <tr
                        key={idx}
                        className="hover:bg-gray-400 transition duration-150"
                     >
                        <td className="p-3 border-b">{row.label}</td>
                        <td className="p-3 border-b"> {format(row.value)}tk</td>
                        <td className="p-3 border-b">
                           {format(row.value * GRAMS_PER_VORI)}tk
                        </td>
                        <td className="p-3 border-b">
                           {format(row.value * GRAMS_PER_ANNA)}tk
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
