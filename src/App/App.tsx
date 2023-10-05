import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "@components/Navbar";
import { useHandleCheckAuth } from "@services/authService";
import { useHandleGetAllProjects } from "@services/projectService";
import Switch from "./Switch";
import Modals from "./Modals";
import Footer from "@components/Footer";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

function App() {
  useHandleCheckAuth();
  useHandleGetAllProjects();

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch />
        <Modals />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
