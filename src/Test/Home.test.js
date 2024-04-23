import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import currencySlice from "../Redux/CurrencyConventer/currencySlice";
import Home from "../App/Home";
import ScrollingPrices from "../components/ScrollPrices";
import CurrencyDisplay from "../App/CurrencyDisplay";

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe("Home component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        currency: currencySlice,
      },
      preloadedState: {
        currency: {
          currency: {
            conversion_rates: {
              USD: 1,
              EUR: 0.85,
            },
            time_last_update_utc: new Date().toISOString(),
          },
        },
      },
    });
  });

  it("renders Home component with title and last updated time", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/Currency/i)).toBeInTheDocument();
    expect(screen.getByText(/Mate/i)).toBeInTheDocument();
    expect(screen.getByText(/Last updated:/i)).toBeInTheDocument();
  });

  it("renders ScrollingPrices component", () => {
    const store = configureStore({
      reducer: {
        currency: currencySlice,
      },
      preloadedState: {
        currency: {
          currency: {
            conversion_rates: {
              USD: 1,
              EUR: 0.85,
            },
            time_last_update_utc: new Date().toISOString(),
          },
        },
      },
    });

    render(
      <Provider store={store}>
        <ScrollingPrices conversionRates={{ USD: 1, EUR: 0.85 }} />
      </Provider>
    );
  });

  it("renders CurrencyDisplay component", () => {
    const store = configureStore({
      reducer: {
        currency: currencySlice,
      },
      preloadedState: {
        currency: {
          currency: {
            conversion_rates: {
              USD: 1,
              EUR: 0.85,
            },
            time_last_update_utc: new Date().toISOString(),
          },
        },
      },
    });

    render(
      <Provider store={store}>
        <CurrencyDisplay />
      </Provider>
    );
  });

  it("matches snapshot for Home component", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot for ScrollingPrices component", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ScrollingPrices conversionRates={{ USD: 1, EUR: 0.85 }} />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot for CurrencyDisplay component", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CurrencyDisplay />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
