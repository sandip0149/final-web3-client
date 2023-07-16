import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter } from "react-router-dom";
import {Sepolia} from "@thirdweb-dev/chains"
import { StateContextProvider } from "./context";
 

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";
import './index.css';
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  
    
    <BrowserRouter>
    <ThirdwebProvider activeChain={Sepolia}>

      <StateContextProvider>
      <App />
      </StateContextProvider>
      
        
    </ThirdwebProvider>
    </BrowserRouter>
    
  
     
   
  
);
