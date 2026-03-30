import React from "react";
import HeadLine from "./Common/HeadLine";

let data = [
  {
    id: 1,
    img: "src/assets/user.png",
    name: "Create Account",
    bio: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: 2,
    img: "src/assets/package.png",
    name: "Choose Products",
    bio: "Browse our catalog and select the tools that fit your needs."
  },
  {
    id: 3,
    img: "src/assets/rocket.png",
    name: "Start Creating",
    bio: "Download and start using your premium tools immediately."
  }
];
let StepSec = () => {
  return (
    <div className="container mb-32">
      <HeadLine  h1="Get Started in 3 Steps" p="Start using premium digital tools in minutes, not hours." ></HeadLine>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-4">
        {
        data.map((item) => {
          return (
            
              <div key={item.id} className="text-center shadow-2xl rounded-2xl  py-5 px-8 relative hover:scale-105 duration-300">

                <img
                  className="p-5 bg-sec/10 rounded-full mx-auto my-5"
                  src={item.img}
                  alt=""
                />
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p className="text-sec ">{item.bio}</p>
                <div className="w-6 h-6 rounded-full linear absolute text-white flex items-center justify-center top-3 right-3">

                <p className='p-1 '>{item.id}</p>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepSec;