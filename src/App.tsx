import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

const App: React.FC = () => {
  return (
    <MainPage />
    // <BrowserRouter>
    //   <Route path="/" element={<MainPage />} />
    // </BrowserRouter>
  );
};

export default App;
