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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<LogiinScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileSecreeen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrder />} />
              <Route path="/orderDetail" element={<OrderScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />
            </Routes>
          </main>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
