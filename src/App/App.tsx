import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from '@components/Navbar';
import { useHandleCheckAuth } from '@services/authService';
import { useHandleGetAllProjects } from '@services/projectService'
import AlertPopup from '@components/AlertPopup';
import Modals from './Modals';
import Footer from '@components/Footer'
import './App.css';
import ROUTES from "@statics/routes";
import Timeline from '@pages/Timeline';
import {ProjectWrapper} from "@pages/Project";
import Home from "@pages/Home";
import About from "@pages/About";
import Resources from "@pages/Resources";
import TimelineEntry from "@components/TimelineEntry/TimelineEntry";

function App() {
  useHandleCheckAuth();
  useHandleGetAllProjects();

  return (
    <div className="App">
        <Routes>
            <Navbar />
            <Modals />
            <AlertPopup />
            <Footer />
            <Route path={ROUTES.TIMELINE} element={<Timeline/>}/>
            <Route path={ROUTES.PROJECT.PATH} element={<ProjectWrapper/>}/>
            <Route path={ROUTES.ABOUT} element={About}/>
            <Route path={ROUTES.HOME} element={Home}/>
            <Route path={ROUTES.RESOURCES} element={Resources}/>
            <Route path={ROUTES.TIMELINE_CREATE} element={TimelineEntry}/>
        </Routes>
    </div>
  );
}

export default App;
