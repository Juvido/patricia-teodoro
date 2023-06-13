import { Route, Routes } from "react-router-dom";
import { AuthRouteProtector } from "./components/AuthRouteProtector";
import { AuthContextComponent } from "./contexts/authContext";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Signup } from "./pages/Signup";
import { Navbar } from "../src/components/Navbar";
import { Complete } from "./pages/Complete";

function App() {
  return (
    <>
      <AuthContextComponent>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultoria-completa" element={<Complete />} />
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
