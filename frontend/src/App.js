import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LogiinScreen from "./Screens/LogiinScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileSecreeen from "./Screens/ProfileSecreeen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrder from "./Screens/PlaceOrder";
import OrderScreen from "./Screens/OrderScreen";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <div style={{ position: "sticky", top: 0, zIndex: "100" }}>
          <Header />
        </div>
        <Container>
          <main className="py-3">
            <Route path="/" Component={HomeScreen} />
            <Route path="/login" Component={LogiinScreen} />
            <Route path="/register" Component={RegisterScreen} />
            <Route path="/profile" Component={ProfileSecreeen} />
            <Route path="/shipping" Component={ShippingScreen} />
            <Route path="/payment" Component={PaymentScreen} />
            <Route path="/placeorder" Component={PlaceOrder} />
            <Route path="/orderDetail" Component={OrderScreen} />
            <Route path="/product/:id" Component={ProductScreen} />
            <Route path="/cart/:id" Component={CartScreen} />
          </main>
        </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
