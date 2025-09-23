import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home/Home";
import About from "./assets/Pages/About/About";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* About Page Route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

//  refarence Website 
//https://shopo.quomodothemes.website/