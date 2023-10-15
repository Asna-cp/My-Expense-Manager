import React from "react";
import './index.css';
// import {useState} from "react";
// import RegisterForm from "./components/RegisterForm";
import Login from "./components/Login"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ViewExpenses from "./components/ViewExpenses";
import AddExpenses from "./components/AddExpenses";


function App() {
  const addNewExpense = (newExpense)=> {
     
  }
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route path="/" element ={<RegisterForm/>}></Route> */}

      <Route path="/" element ={<Login/>}></Route>
      <Route path="/viewExpenses" element ={<ViewExpenses/>}></Route>
      {/* <Route path="/addExpenses" element={<AddExpenses addNewExpense={addNewExpense}/>}></Route> */}
    </Routes>
    </BrowserRouter>

  );
}

export default App;
