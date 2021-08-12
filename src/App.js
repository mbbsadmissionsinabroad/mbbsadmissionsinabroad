import React from "react";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
import TawkComponent from "./components/TawkComponent";


function App() {
  return (
    <div className="app">
      <Router>
        <Topbar />
        <ScrollToTop smooth Top/>
        <NavBar />
        <Routes />
        <TawkComponent />
        <Footer />
      </Router>
    </div>
  );
}

export default App;