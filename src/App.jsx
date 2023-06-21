import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Navbar } from "../src/components/Navbar";
import { ServiceDetails } from "./pages/ServiceDetails";
import { FinishShop } from "./pages/FinishShop";
import { Footer } from "./components/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
  };
  return (
    <>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/coloracao"
          element={<ServiceDetails id={1} updateCartCount={updateCartCount} />}
        />
        <Route
          path="/descubra"
          element={<ServiceDetails id={2} updateCartCount={updateCartCount} />}
        />
        <Route
          path="/closet"
          element={<ServiceDetails id={3} updateCartCount={updateCartCount} />}
        />
        <Route
          path="/consultoria-completa"
          element={<ServiceDetails id={4} updateCartCount={updateCartCount} />}
        />
        <Route path="/finalizar" element={<FinishShop />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
