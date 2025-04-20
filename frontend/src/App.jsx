import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";

function App() {
  return (
    <div className="min-h[100vh]">
      <div className="App w-[80%] m-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
