import React from "react";
import ReactDOM from "react-dom";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import App from "./App";

console.log(awsconfig);
Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById("root"));
