import { Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Team from "../Pages/Team";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default MyRoutes;
