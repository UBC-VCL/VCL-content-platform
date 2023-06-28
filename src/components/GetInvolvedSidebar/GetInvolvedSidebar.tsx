import React from 'react';
import { CONSTANTS, TEXT } from '@statics';
import './GetInvolvedSidebar.css';
import sidebarIcon from '@statics/images/involved-sidebar-icon.png';
import { useHistory } from 'react-router-dom';

interface propsOBJ {
    pRef: React.RefObject<HTMLElement>;
    labMemberRef: React.RefObject<HTMLElement>;
    coPilotRef: React.RefObject<HTMLElement>;
    dsCoPilotRef: React.RefObject<HTMLElement>;
    volunteerRef: React.RefObject<HTMLElement>;
    directedStudiesRef: React.RefObject<HTMLElement>;
    raRef: React.RefObject<HTMLElement>;
    tsRef: React.RefObject<HTMLElement>;
    labManagerRef: React.RefObject<HTMLElement>;
    customAutoScroll: (refOBJ: React.RefObject<HTMLElement>) => void;
    sidebarState: boolean;
    setbarState: (boolean: boolean) => void;
}

const GetInvolvedSidebar = (props: propsOBJ) => {
    const history = useHistory();

    const { pRef, labMemberRef, coPilotRef, dsCoPilotRef, volunteerRef, directedStudiesRef, raRef, tsRef, labManagerRef, customAutoScroll, sidebarState, setbarState } = props;

    return (

        <div className={`sidebar ${sidebarState ? "animationOn" : "animationOff"}`}>
            <div id="contentEncapsulate">
                <div id='titleDiv'>
                    <div id="sidebar-icon"><img src={sidebarIcon} alt="Sidebar Icon" width="20" height="20" onClick={() => setbarState(!sidebarState)} /></div>
                    <div id="now-viewing" className="text-component">Now Viewing</div>
                    <div id="get_involved_heading" className='text-component'> Get Involved</div>
                </div>

                <div className="lab-roles">
                    <div className="text-component clickableOption"> <a onClick={() => customAutoScroll(pRef)}>As a Participant</a></div>
                    <ul className="text-component labMem clickableOption" id="as-a-lab-mem">
                        <a onClick={() => customAutoScroll(labMemberRef)}>As a Lab Member</a>
                        <li id="co-pilot" className='clickableOption'><a onClick={() => customAutoScroll(coPilotRef)}>Co-Pilot</a></li>
                        <li id="dscico-pilot" className='clickableOption'><a onClick={() => customAutoScroll(dsCoPilotRef)}>Data Science Co-Pilot</a></li>
                        <li id="volunteer" className='clickableOption'><a onClick={() => customAutoScroll(volunteerRef)}>Volunteer</a></li>
                        <li id="directed-studies" className='clickableOption'><a onClick={() => customAutoScroll(directedStudiesRef)}>Directed Studies</a></li>
                        <li id="research-assistant" className='clickableOption'><a onClick={() => customAutoScroll(raRef)}>Research Assistant</a></li>
                        <li id="tech-support" className='clickableOption'><a href="#">Tech Support</a></li>
                        <li id="lab-mana" className='clickableOption'><a href="#" >Lab Manager</a></li>
                    </ul>
                </div>

                <div className="text-component" id="application-instructions"><a href="#">Application Instructions</a></div>
                <div id="view-prj-btn" onClick={() => history.push("/projects")}>View Projects</div>
            </div>
        </div>
    )
}

export default GetInvolvedSidebar;