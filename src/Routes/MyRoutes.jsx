import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Team from "../Pages/Team";
import ContactUs from "../Pages/Contact";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<ContactUs />}></Route>
      <Route path="/team" element={<Team />}></Route>
    </Routes>
  );
};

export default MyRoutes;
