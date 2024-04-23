import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import BaseUrl from "../baseUrl.js";

export const fetchCurrency = createAsyncThunk(
  "currency/fetchCurrency",
  async () => {
    const response = await axios.get(BaseUrl);
    return response.data;
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: {},
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrency.fulfilled, (state, { payload }) => {
        state.currency = payload;
        state.status = "success";
      })
      .addCase(fetchCurrency.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default currencySlice.reducer;
