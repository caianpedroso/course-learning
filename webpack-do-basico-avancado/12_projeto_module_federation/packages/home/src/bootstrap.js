import Home from "./Home";
import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById("#root"));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Home />);