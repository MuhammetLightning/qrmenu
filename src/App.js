import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Restoran from "./pages/restoran/Restoran.jsx";
import Gurme from "./pages/gurme/Gurme.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
// import "./app.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/poyraz" element={<Restoran />} />
        <Route path="/gurme" element={<Gurme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
