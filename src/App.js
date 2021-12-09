import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Company from "./screens/Company";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Pricing from "./screens/Pricing";

function App() {
  return (
    <div className="App h-screen">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
