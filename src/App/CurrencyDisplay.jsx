import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../components/Loading";
import Error from "../components/Error";
import { fetchCurrency } from "../Redux/CurrencyConventer/currencySlice";

const CurrencyDisplay = () => {
  const dispatch = useDispatch();
  const currencyData = useSelector((state) => state.currency.currency);
  const status = useSelector((state) => state.currency.status);

  const [amount, setAmount] = useState(1);
  const [targetCurrency, setTargetCurrency] = useState("USD");

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  if (status === "loading") {
    return <Loading />;
  } else if (status === "failed") {
    return <Error message="Failed to load currency data" />;
  }

  let conversionRate = 0;
  let convertedAmount = 0;

  if (currencyData && currencyData.conversion_rates) {
    conversionRate = currencyData.conversion_rates[targetCurrency];
    convertedAmount = (amount * conversionRate).toFixed(2);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-2 space-y-5">
      <h1 className="text-3xl font-bold text-blue-600 mb-2 font-space-grotesk">
        Currency Converter
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-5 w-80">
        <div className="flex space-x-5">
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-full border-2 border-blue-200 rounded-md p-2 shadow-md font-space-grotesk text-xs font-semibold"
            placeholder="Amount"
          />
          {currencyData && currencyData.conversion_rates && (
            <select
              value={targetCurrency}
              onChange={handleCurrencyChange}
              className="w-full border-2 border-blue-200 rounded-md p-2 shadow-md font-poppins text-xs font-semibold"
            >
              {Object.keys(currencyData.conversion_rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="border-t border-blue-200 mt-4 pt-4 text-xs font-space-grotesk font-semibold">
          <span className="text-green-600">{amount}</span> USD is equivalent to{" "}
          <span className="text-red-400">{convertedAmount}</span>{" "}
          {targetCurrency}
        </div>
      </div>
    </div>
  );
};

export default CurrencyDisplay;
