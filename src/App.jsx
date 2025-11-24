import "./App.css";
import Navbar from "./ReactComponents/Navbar.jsx";
import Trendingplant from "./ReactComponents/Trendingplant.jsx";
import PlantCard from "./ReactComponents/PlantCard";
import CustomerReview from "./ReactComponents/CustomerReview.js";
import OurBestPlant from "./ReactComponents/OurBestPlant.jsx";
import Footer from "./ReactComponents/Footer.js";
import Herosection from "./ReactComponents/Herosection.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./ReactComponents/Error.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/404" element={<Error />} />
        </Routes>
      </Router>
      <Herosection />
      <Trendingplant />
      <PlantCard />
      <CustomerReview />
      <OurBestPlant />
      <Footer />
    </>
  );
}

export default App;
