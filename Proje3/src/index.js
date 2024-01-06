import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route>
          <App/>
        </Route>
      </Routes>
    </BrowserRouter>
  
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);