import React from "react";
import Marquee from "react-marquee-slider";

const ScrollingPrices = ({ conversionRates, direction }) => (
  <div className="w-[80%]">
    <Marquee velocity={1} direction={direction}>
      {Object.entries(conversionRates).map(([currency, rate]) => (
        <div key={currency} style={{ whiteSpace: "nowrap" }} className="mx-2">
          <span className="text-xs font-bold font-space-grotesk text-green-700 mx-1">
            {currency}:
          </span>
          <span className="text-xs font-bold font-space-grotesk text-red-500">
            {rate.toFixed(2)}
          </span>
        </div>
      ))}
    </Marquee>
  </div>
);

export default ScrollingPrices;
