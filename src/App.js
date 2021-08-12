import React, { useEffect } from "react";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Routes from "./Routes";

function App() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6114f086649e0a0a5cd0c9cd/1fcssn43d";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
    Tawk_API.onLoad = function () {
      console.log("chat loaded");
      Tawk_API.setAttributes(
        {
          name: "New-Lyf",
          email: "mbbsadmissionsinabroad@gmail.com",
          hash: "hash value",
        },
        function (error) {}
      );
    };
  }, []);
  return (
    <div className="app">
      <Router>
        <Topbar />
        <ScrollToTop smooth Top/>
        <NavBar />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;