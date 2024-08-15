import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

export const BaseEndpoint = "http://localhost:7001/u";
export const tokenVault = "HBSUNEWFJ0WJ";

export const makeRequest = async(endpoint, method, state, payload) => {
  const token = Cookies.get(tokenVault);
  if (!token) {
    window.location.href = "/signin";
    return;
  }
  try {
    const options = {
      method,
      headers: {
          'Content-Type': 'application/json',
          'Pass': btoa(token),
      },
    }
    if (payload) options["body"] = JSON.stringify(payload) 
    const response = await fetch(`${BaseEndpoint}${endpoint}`, options);
      const data = await response.json();
      if (!response.ok && data.message === "Permission Denied") {
          Cookies.remove(tokenVault);
          window.location.href = "/signin";
      } else state(data?.data);
  } catch (error) { toast.error(`An error occurred: ${error.message}`); state("s") }

  return <ToastContainer />
}