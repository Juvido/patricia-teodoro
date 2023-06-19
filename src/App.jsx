import { Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Navbar } from "../src/components/Navbar";
import { ServiceDetails } from "./pages/ServiceDetails";
import { Cart } from "./pages/Cart";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coloracao" element={<ServiceDetails id={1}/>} />
          <Route path="/descubra" element={<ServiceDetails id={2}/>} />
          <Route path="/closet" element={<ServiceDetails id={3}/>} />
          <Route path="/consultoria-completa" element={<ServiceDetails id={4}/>} /> 
          <Route path="/cart" element={<Cart />} />     
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
