import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import { PhantomWalletProvider } from "./PhantomProvider";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <PhantomWalletProvider network="mainnet-beta">
      <App />
    </PhantomWalletProvider>
  </StrictMode>
);
