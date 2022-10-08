import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfirmationPage from "./pages/Confirmation";
import OrderPage from "./pages/Order";
import AdminPage from "./pages/Admin";
import IndexPage from "./pages/Index";
import ErrorPage from "./pages/Error";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={ <Navigate replace to='/order/create'/> }/> */}
          <Route path="/" element={<IndexPage/>}/>
          <Route path="/order/create" element={<OrderPage/>}/>
          <Route path="/order/confirmation" element={<ConfirmationPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="/error" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
