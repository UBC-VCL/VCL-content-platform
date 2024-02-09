import React from 'react';
import { CONSTANTS, TEXT } from '@statics';
import './GetInvolvedSidebar.css';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowIcon from '@mui/icons-material/FirstPage';

interface propsOBJ {
    pRef: React.RefObject<HTMLElement>;
    labMemberRef: React.RefObject<HTMLElement>;
    coPilotRef: React.RefObject<HTMLElement>;
    dsCoPilotRef: React.RefObject<HTMLElement>;
    volunteerRef: React.RefObject<HTMLElement>;
    directedStudiesRef: React.RefObject<HTMLElement>;
    raRef: React.RefObject<HTMLElement>;
    ctRef: React.RefObject<HTMLElement>;
    customAutoScroll: (refOBJ: React.RefObject<HTMLElement>) => void;
    sidebarState: boolean;
    setbarState: (boolean: boolean) => void;
}

const GetInvolvedSidebar = (props: propsOBJ) => {
    const history = useHistory();

    const { pRef, labMemberRef, coPilotRef, dsCoPilotRef, volunteerRef, directedStudiesRef, raRef, ctRef, customAutoScroll, sidebarState, setbarState } = props;

    return (

        <div id='get-involved-sidebar' className={`sidebar ${sidebarState ? "animationOn" : "animationOff"}`}>
            <div id="contentEncapsulate">
                <div id='titleDiv'>
                <div className='sidebar-icon'>
                    <IconButton
                        color="inherit"
                        style={{left:"95%", color: "gray", marginTop: "25px"}}
                        onClick={() => {
                            setbarState(!sidebarState)
                            setTimeout(function() {
                                document.getElementById('get-involved-sidebar')!.style.display = 'none'
                                document.getElementById('info-icon')!.style.display = 'block'
                            }, 400)
                        }
                        }
                    >
                        <ArrowIcon/>
                    </IconButton>
                    </div>
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
                        <li id="coding-team" className='clickableOption'><a onClick={() => customAutoScroll(ctRef)}>Coding Team</a></li>
                    </ul>
                </div>
                
                <div id="view-prj-btn" onClick={() => history.push("/projects")}>View Projects</div>
            </div>
        </div>
    )
}

export default GetInvolvedSidebar;