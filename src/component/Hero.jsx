import React from "react";

import banner from "../assets/banner.png";
import dot from '../assets/Group 5.png'
import { Play } from "lucide-react";
import Button from "./Common/Button";
const Hero = () => {
  return (
    <div className="container">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          <img src={banner} className=" w-full rounded-lg shadow-2xl" />
          <div>
            <div className="my-3 inline-flex items-center bg-[#E1E7FF] py-2 px-4 rounded-full gap-3">
                <img src={dot} alt=""  />
                <p className="linear text-transparent bg-clip-text font-semibold">New: AI-Powered Tools Available</p>
            </div>
            <h1 className=" text-5xl md:text-7xl font-extrabold text-dark">Supercharge Your Digital Workflow</h1>
            <p className="py-6 text-sec">
              Access premium AI tools design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
            </p>
            <div className=" flex gap-4">
            <Button btn='Explore Products'></Button>
            <button className=" btn btn-lg btn-outline btn-primary rounded-full"><Play></Play> Watch Demo</button>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
