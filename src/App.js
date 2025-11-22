
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
 <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;










