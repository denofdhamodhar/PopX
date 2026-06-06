import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Account from "../pages/Account";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account/:username" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
