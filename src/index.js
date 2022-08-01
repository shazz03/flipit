import React from "react";
import ReactDOM from "react-dom";
import MultiStep from "react-multistep";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFour } from "./step-four";

import "./prog-track.css";
import "./styles.css";

const steps = [
  { name: "Name A", component: <StepOne /> },
  { name: "Email", component: <StepTwo /> },
  { name: "Password", component: <StepThree /> },
  { name: "Agreement", component: <StepFour /> }
];

function App() {
  return (
    <div className="App">
      <h1>React multi step</h1>
      <MultiStep steps={steps} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
