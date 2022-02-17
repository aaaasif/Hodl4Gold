import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { BrowserRouter } from "react-router-dom";
import Provider from "./store/Provider";

const supportedChainIds = [4];

const connectors = {
  injected: {},
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
        <Provider>
          <App />
        </Provider>
      </ThirdwebWeb3Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
