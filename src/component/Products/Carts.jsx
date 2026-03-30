import { X } from "lucide-react";
import React from "react";

const Carts = ({ clickedProduct, setChilckedProduct }) => {

    let total = clickedProduct.reduce((sum,add)=>sum+Number(add.price),0)

    let deleteCart= (e)=>{
        let filterCart= clickedProduct.filter((i)=>i.name !== e.name)
        setChilckedProduct(filterCart)
    }
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Your Cart</h1>

      <div className="space-y-3">
        {clickedProduct.map((item) => {
          return (
            <>
              <div className="border rounded-2xl bg-green-50 p-5 flex justify-between items-center">
                <img src={item.icon} alt="" />
                <div className="text-center">
                  <h1 className="text-2xl font-bold">{item.name}</h1>
                  <h3>
                    <span className="text-2xl font-bold">${item.price}/</span>
                    {item.period}
                  </h3>
                </div>
                <p onClick={()=>deleteCart(item)} className="hover:text-primary flex hover:font-bold cursor-pointer duration-300 ">
                  Remove <X></X>
                </p>
              </div>
            </>
          );
        })}
      </div>
      
      <div className="flex justify-between py-8 px-4 rounded-2xl text-4xl items-center font-semibold text-white linear">
      <h1>Total</h1>
      <p>${total}</p>
      </div>
    </div>
  );
};

export default Carts;
