import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import "./global.scss";
import { EventProvider } from "./js/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EventProvider>
    <App />
  </EventProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
