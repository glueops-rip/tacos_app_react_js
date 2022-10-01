import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfirmationPage from "./pages/Confirmation";
import OrderPage from "./pages/Order";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path='/order'> */}
          <Route index path="/order/create" element={<OrderPage/>}/>
          <Route path="/order/confirmation" element={<ConfirmationPage/>}/>
          {/* </Route> */}
          <Route path="/admin" element={<ConfirmationPage/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
