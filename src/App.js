import React, {useEffect} from "react";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
// import TawkComponent from "./components/TawkComponent";
import tawkTo from "tawkto-react";

function App() {

  const tawkToPropertyId = '6114f086649e0a0a5cd0c9cd';
  const tawkToKey = 'c1750d87345da8d2071f35c771ab10bdcb7ab9dd';
  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey)
  }, []);

  return (
    <div className="app">
      <Router>
        <Topbar />
        <ScrollToTop smooth Top/>
        <NavBar />
        <Routes />
        {/* <TawkComponent /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;