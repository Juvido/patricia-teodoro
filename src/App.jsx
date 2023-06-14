import { Route, Routes } from "react-router-dom";
import { AuthRouteProtector } from "./components/AuthRouteProtector";
import { AuthContextComponent } from "./contexts/authContext";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Signup } from "./pages/Signup";
import { Navbar } from "../src/components/Navbar";
import { ServiceDetails } from "./pages/ServiceDetails";

function App() {
  return (
    <>
      <AuthContextComponent>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coloracao" element={<ServiceDetails id={1}/>} />
          <Route path="/descubra" element={<ServiceDetails id={2}/>} />
          <Route path="/closet" element={<ServiceDetails id={3}/>} />
          <Route path="/consultoria-completa" element={<ServiceDetails id={4}/>} />


          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<AuthRouteProtector component={Profile} />}
          />
          
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
