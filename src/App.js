import React from "react";
import "./index.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewExpenses from "./components/ViewExpenses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/viewExpenses" element={<ViewExpenses />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
