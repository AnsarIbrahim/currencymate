import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Error = ({ message }) => {
  toast.error(message);

  return <ToastContainer />;
};

export default Error;
