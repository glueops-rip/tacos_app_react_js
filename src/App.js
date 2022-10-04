import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ConfirmationPage from "./pages/Confirmation";
import OrderPage from "./pages/Order";
import AdminPage from "./pages/Admin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to='/order/create'/> }/>
          <Route path="/order/create" element={<OrderPage/>}/>
          <Route path="/order/confirmation" element={<ConfirmationPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
