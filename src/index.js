import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavRouter from "./routes/NavRouter";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <NavRouter></NavRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
