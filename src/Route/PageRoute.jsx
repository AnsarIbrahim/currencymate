import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../App/Home";

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default PageRoute;
