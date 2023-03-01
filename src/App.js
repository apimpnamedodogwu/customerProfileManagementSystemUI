import React from "react";
// import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router'
import AddCustomer from "./pages/AddCustomer";
import ListOfCustomers from "./pages/ListOfCustomers";
import UpdateCustomers from "./pages/UpdateCustomers";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes >
          <Route element={<Login />} path={'/'} />
          <Route element={<Login />} path={'/login'} />
          <Route element={<AddCustomer />} path={'/add'} />
          <Route element={<UpdateCustomers />} path={'/update'} />
          <Route element={<UpdateCustomers />} path={'/update/:id'} />
          <Route element={<ListOfCustomers />} path={'/list'} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
