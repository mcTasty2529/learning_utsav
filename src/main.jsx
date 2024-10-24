import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <Analytics>
    <App />
  </Analytics>
);
