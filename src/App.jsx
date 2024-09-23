import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./Routes/MyRoutes";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MyRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
