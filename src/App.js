import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Footer } from "./components/index.js";
import { Home, Products,Cart,Wishlist } from "./pages";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/mock" element={<Mockman />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
