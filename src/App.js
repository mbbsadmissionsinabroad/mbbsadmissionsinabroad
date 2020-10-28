import React from "react";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="app">
      <Router>
        <Topbar />
        <ScrollToTop smooth Top/>
        <NavBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;