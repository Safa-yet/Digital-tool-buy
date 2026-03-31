import { ShoppingCartIcon, X } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";
import empty from '../../../src/assets/products/alert-error.png'

const Carts = ({ clickedProduct, setChilckedProduct }) => {
  let total = clickedProduct.reduce((sum, add) => sum + Number(add.price), 0);

  let deleteCart = (e) => {
    let filterCart = clickedProduct.filter((i) => i.name !== e.name);
    setChilckedProduct(filterCart);
    toast("Successfully Remove")
    
  };
  return (
    <div className="space-y-8 shadow-2xl p-7 rounded-2xl">
      <h1 className="text-xl font-bold">Your Cart</h1>
      {clickedProduct.length === 0 && (
        <>
          <div className="py-12 text-center">
            <div>
              <img className="mx-auto" src={empty} alt="" />
            </div>
            <h1 className="text-xl text-sec">Cart is empty</h1>
          </div>
        </>
      )}

      <div className="space-y-3">
        {clickedProduct.map((item) => {
          return (
            <>
              <div className="shadow-lg hover:outline-black/20 hover:outline-1 rounded-2xl  p-5 flex justify-between items-center">
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
                  Remove
                </p>
              </div>
            </>
          );
        })}
              <div className=" shadow-lg flex justify-between py-4 px-4 rounded-2xl text-xl  items-center font-semibold ">
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
