import React from 'react';
import { CONSTANTS, TEXT } from '@statics';
import './GetInvolvedSidebar.css';
import sidebarIcon from '@statics/images/involved-sidebar-icon.png';
import { useHistory } from 'react-router-dom';


const GetInvolvedSidebar = () => {
    const history = useHistory();

    return(
        
        <div className="sidebar">
            <div id="sidebar-icon"><img src={sidebarIcon} alt="Sidebar Icon" width="20" height="20" /></div>
            <div id="now-viewing" className="component">Now Viewing</div>
            <div id="get_involved_heading" className='component'> Get Involved</div>
            
            <div className="component" id="as-a-participant"> <a href="#">As a Participant</a></div>
            <ul className="component labMem" id="as-a-lab-mem">
                <a href="#">As a Lab Member</a>
                <li id="co-pilot"><a href="#">Co-Pilot</a></li>
                <li id="dscico-pilot"><a href="#">Data Science Co-Pilot</a></li>
                <li id="volunteer"><a href="#">Volunteer</a></li>
                <li id="directed-studies"><a href="#">Directed Studies</a></li>
                <li id="research-assistant"><a href="#">Research Assistant</a></li>
                <li id="tech-support"><a href="#">Tech Support</a></li>
                <li id="lab-mana"><a href="#">Lab Manager</a></li>
            </ul>
            
            <div className="component" id="application-instructions"><a href="#">Application Instructions</a></div>
            <div className='view-projects-btn component' onClick={() => history.push("/join/#")}>
                <div id="view-prj-text">View Projects</div>
            </div>
            
        </div>

        
    )
}
export default GetInvolvedSidebar;