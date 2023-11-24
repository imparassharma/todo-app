import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./App";
const rootElement = document.getElementById('root');

if(rootElement){
    const Root = createRoot(rootElement);
    Root.render(<App/>);
}

