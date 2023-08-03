import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "@components/Navbar";
import { useHandleCheckAuth } from "@services/authService";
import { useHandleGetAllProjects } from "@services/projectService";
import Switch from "./Switch";
import Modals from "./Modals";
import Footer from "@components/Footer";
import "./App.css";

function App() {
  useHandleCheckAuth();
  useHandleGetAllProjects();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch />
        <Modals />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
