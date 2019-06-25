import React from "react";
import ReactDOM from "react-dom";
import Steps from "./components/steps";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return <Steps />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
