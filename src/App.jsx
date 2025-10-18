import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home/Home";
import About from "./assets/Pages/About/About";
import NavBar from "./assets/Pages/Navbar/NavBar"
import ContactUs from "./assets/Pages/ContactUs/ContactUs";
import FashionClothes from "./assets/Pages/Categories/FashionClothes/FashionClothes";
import PhoneAndTablet from "./assets/Pages/Categories/PhoneAndTablet/PhoneAndTablet";
import GamingAndSports from "./assets/Pages/Categories/GamingAndSports/GamingAndSports";
import HomeAppliance from "./assets/Pages/Categories/HomeAppliance/HomeAppliance";
import Footer from "./assets/Pages/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* About Page Route */}
        <Route path="/about" element={<About />} />

        {/* Contact us Page Route */}
        <Route path="/contact" element={<ContactUs/>} />

          {/* categorys pages */}
          <Route path="/category/phones" element={<PhoneAndTablet/>} />
          <Route path="/category/gaming" element={<GamingAndSports/>} />
          <Route path="/category/home-appliance" element={<HomeAppliance/>} />
          <Route path="/category/fashion" element={<FashionClothes/>} />

      </Routes>
      < Footer />
    </Router>
  );
}

export default App;

//  refarence Website 
//https://shopo.quomodothemes.website/