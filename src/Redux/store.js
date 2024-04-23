import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./CurrencyConventer/currencySlice";

const store = configureStore({
  reducer: {
    currency: currencySlice,
  },
});

export default store;
