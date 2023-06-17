import { Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Navbar } from "../src/components/Navbar";
import { ServiceDetails } from "./pages/ServiceDetails";

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
          <Route path="*" element={<Error />} />
        </Routes>
      
    </>
  );
}

export default App;
