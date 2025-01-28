import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import { ToastContainer } from "react-toastify";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer />

    </QueryClientProvider>
  </StrictMode>
);
