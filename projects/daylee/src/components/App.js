import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div />
      </BrowserRouter>
    </div>
  );
};

export default App;
