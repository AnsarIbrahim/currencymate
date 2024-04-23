import React from "react";
import { useSelector } from "react-redux";

import CurrencyDisplay from "./CurrencyDisplay";
import ScrollingPrices from "../components/ScrollPrices";

const Home = () => {
  const conversionRates = useSelector(
    (state) => state.currency.currency.conversion_rates
  );

  const timeUpdate = useSelector(
    (state) => state.currency.currency.time_last_update_utc
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-100 flex flex-col items-center justify-center space-y-10 p-5">
      <h1 className="text-xl font-bold text-white font-poppins md:text-4xl">
        Currency<span className="md:text-xl text-blue-600 text-2xl">Mate</span>
      </h1>
      {conversionRates && (
        <ScrollingPrices conversionRates={conversionRates} direction="rtl" />
      )}
      <p className="text-white text-xs md:text-sm bg-blue-900 bg-opacity-50 rounded-xl p-2">
        Last updated:{" "}
        <span className="text-yellow-300">
          {new Date(timeUpdate).toLocaleString()}
        </span>
      </p>
      {conversionRates && (
        <ScrollingPrices conversionRates={conversionRates} direction="ltr" />
      )}
      <div className="bg-slate-300 shadow-lg rounded-lg p-5 w-full max-w-md pb-10">
        <CurrencyDisplay />
      </div>
    </div>
  );
};

export default Home;
