import { ShoppingCart } from "lucide-react";
import React from "react";
import Button from "./Common/Button";

const Navbar = ({clickedProduct}) => {
  const navItems = [
    { id: 1, name: "Products", path: "/products" },
    { id: 2, name: "Features", path: "/features" },
    { id: 3, name: "Pricing", path: "/pricing" },
    { id: 4, name: "Testimonials", path: "/testimonials" },
    { id: 5, name: "FAQ", path: "/faq" },
  ];

  let navlinks = navItems.map((item) => {
    return (
      <li key={item.id}>
        <a href="">{item.name}</a>
      </li>
    );
  });
  return (
    <div className="sticky top-0 z-10 bg-white ">

    <div className="container ">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-3xl"
            >
              {navlinks}
            <button className="btn rounded-full">Login</button>
          <a className="btn rounded-full linear text-white">Get Started</a>
            </ul>
          </div>
          <a className="font-bold text-2xl md:text-4xl linear bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end gap-4 font-semibold">
            {/* Shoping Cart */}
          <div className="relative">
            <ShoppingCart></ShoppingCart>
            <div className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 bg-red-600 p-1 rounded-full text-xs text-white">
              <p>{clickedProduct.length}</p>
            </div>
          </div>
          <button className="hidden md:flex">Login</button>
          <a className="btn rounded-full linear text-white hidden md:flex">Get Started</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
