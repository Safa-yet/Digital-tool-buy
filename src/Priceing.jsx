import React from "react";
import HeadLine from "./component/Common/HeadLine";
import { Check } from "lucide-react";
import Button from "./component/Common/Button";
let data = [
  {
    id: 1,
    name: "Starter Plan",
    price: "$19/",
    period: "monthly",
    tag: "Perfect for getting started",
    tagType: "popular",
    features: [
      "Access to basic tools",
      "5 projects limit",
      "Email support",
      "Basic analytics",
    ],
  },
  {
    id: 2,
    name: "Pro Plan",
    price: "$49/",
    period: "monthly",
    tag: "Best for professionals",
    tagType: "best seller",
    features: [
      "All starter features",
      "Unlimited projects",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
    ],
  },
  {
    id: 3,
    name: "Enterprise Plan",
    price: "$99/",
    period: "monthly",
    tag: "For teams and businesses",
    tagType: "new",
    features: [
      "All pro features",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 premium support",
      "Scalable solutions",
    ],
  },
];

const Priceing = () => {
  return (
    <div className="container mb-32 ">
      <HeadLine
        h1="Simple, Transparent Pricing"
        p="Choose the plan that fits your needs. Upgrade or downgrade anytime."
      ></HeadLine>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  items-stretch">
        {data.map((item) => {
            return <>
            <div className="space-y-4  rounded-4xl hover:scale-110 pricingBox py-6 px-5 group shadow-2xl relative flex flex-col justify-between">
                <div>

                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p className="text-sec group-hover:text-white my-1">{item.tag}</p>
                </div>
                <h3 ><span className="text-3xl font-bold">{item.price}</span><span className="text-sec group-hover:text-white">monthly</span></h3>
                <ul className="space-y-1.5">
                    {
                        item.features.map(i=><li className="flex"><Check className="text-green-500 group-hover:text-white"></Check><span className="text-sec group-hover:text-white">{i}</span></li>)
                    }
                </ul>
                <button className="pricingBtn">Get Started</button>

                <div className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  hidden group-hover:block absolute">
                    <p className="py-.5 px-3 bg-[#FEF3C6] text-[#BB4D00] rounded-4xl">{item.tagType}</p>
                </div>

            </div>
            
            </>
        })}
      </div>
    </div>
  );
};

export default Priceing;
