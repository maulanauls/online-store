import React from "react";
import ReactDOM from "react-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import App from "./App";
import Store from "./state/store";
import Restore from "./state/restore";
import reportWebVitals from "./reportWebVitals";

import "./style/style.main.scss";
const engine = new Styletron();

ReactDOM.render(
  <React.Fragment>
    <StyletronProvider value={engine}>
      <Store>
        <Restore>
          <App />
        </Restore>
      </Store>
    </StyletronProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
