import { X } from "lucide-react";
import React from "react";

const Carts = ({ clickedProduct, setChilckedProduct }) => {
  let total = clickedProduct.reduce((sum, add) => sum + Number(add.price), 0);

  let deleteCart = (e) => {
    let filterCart = clickedProduct.filter((i) => i.name !== e.name);
    setChilckedProduct(filterCart);
  };
  return (
    <div className="space-y-8 shadow-2xl p-7 rounded-2xl">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {clickedProduct.length === 0 && (
        <>
          <div className="py-12 text-center">
            <h1 className="text-2xl text-sec">Cart is empty</h1>
          </div>
        </>
      )}

      <div className="space-y-3">
        {clickedProduct.map((item) => {
          return (
            <>
              <div className="border rounded-2xl bg-green-50 p-5 flex justify-between items-center">
              <div className="flex gap-6">

                <img className="lg:w-14 " src={item.icon} alt="" />
                <div >
                  <h1 className="lg:text-lg font-bold">{item.name}</h1>
                  <h3>
                    <span className="lg:text-lg font-bold">${item.price}/</span>
                    <span className="text-sec">

                    {item.period}
                    </span>
                  </h3>
                </div>
              </div>
                <p
                  onClick={() => deleteCart(item)}
                  className="text-[#FF3980] flex font-semibold cursor-pointer duration-300 "
                >
                  Remove x
                </p>
              </div>
            </>
          );
        })}
              <div className=" shadow-lg flex justify-between py-4 px-4 rounded-2xl text-2xl  items-center font-semibold ">
                <h1>Total</h1>
                <p>${total}</p>
              </div>
      </div>

      <button
        onClick={() => setChilckedProduct([])}
        className="btn btn-lg text-white w-full rounded-full linear"
      >
        Process to CheckOut
      </button>
    </div>
  );
};

export default Carts;
