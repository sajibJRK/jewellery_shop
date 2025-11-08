import React from 'react'

export default function ClassicCard({item}) {
  return (
    <div>
     <div key={item.id} className="border bg-[#E6BE8A] w-[420px] h-[500px] overflow-hidden">
            <div className="border border-red-500 w-[400px] h-[400px] ">
                <img className=" w-full h-full " src={item.image} alt="" />
            </div>
          <h2>{item.name}</h2>
          <p>Price: {item.price}৳</p>
        </div>
    </div>
  )
}
