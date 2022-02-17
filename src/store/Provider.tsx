import React, { ReactElement } from "react";
import Web3ContextProvider from "./context/Web3Context";

const Provider: React.FC<{ children: ReactElement }> = ({ children }) => {
  return <Web3ContextProvider>{children}</Web3ContextProvider>;
};

export default Provider;
