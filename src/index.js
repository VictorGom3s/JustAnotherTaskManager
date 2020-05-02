import React from "react";
import ReactDOM from "react-dom";
import "./public/fonts.scss";
import "./public/reset.scss";
import "./public/swal-theme.scss";
import App from "./App";

// import db from "./config/db";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
