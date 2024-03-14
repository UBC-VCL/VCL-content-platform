import { color } from '@mui/system';
import './ProjectAddMember.css'
import { GrClose } from "react-icons/gr";
import { useState, useRef } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

interface PropsOBJ {
    isVisible: boolean;
    setVisibility: (boolean: boolean) => void;
}

const ProjectAddMember = (props: PropsOBJ) => {
    const baseURL = process.env.REACT_APP_API_URL;
    

    // useRefs for getting the values, provided by the user, in the inputs.
    const usernameRef = useRef<HTMLInputElement>(null);
    const firstnameRef = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const linkedInRef = useRef<HTMLInputElement>(null);

    // This is to determine the visibility of the add member page, false for non-visible and true for is-visible.
    const { isVisible, setVisibility } = props;

    // This highlights the amount of inputted projects and will be displayed the on the screen.
    //   Currently there is no way for a user to delete an already inputted project
    const [inputtedProjects, setProjects] = useState<Array<string>>([])

    // This useState is used inorder to extract a user input for their current input
    const [currentPInput, setPInput] = useState<string>("")

    const handleSubmit = async () => {
        try {
            // a single line variable instantiation
            const [usernameData, firstnameData, lastnameData, projectsData, emailData, linkedInData] = [usernameRef.current?.value, firstnameRef.current?.value, lastnameRef.current?.value, inputtedProjects, emailRef.current?.value, linkedInRef?.current!.value]

            // a call to our backend API that inserts an memeber with the information that the user has inputted
            await axios.post(`${baseURL}/api/members`,
                { username: usernameData, firstName: firstnameData, lastName: lastnameData, projects: projectsData, email: emailData, linkedIn: linkedInData, isAlumni: false }).catch(err => {throw err}).then(() => setVisibility(false))
        } catch(err) {
            console.log(err)
        }
    }

    // thsi function is used to handle the event when the user presses 'Enter' when monuted onto the projects' input field, id='project-input'
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {

        // When the user presses "Enter" it will set the current input (that is not a empty string to be inserted into the inputtedProjects useState)
        if (event.key == 'Enter') {
            if (currentPInput !== '') {
                setProjects([...inputtedProjects, currentPInput])
            }
        }
    }

    return (
        <>
            <div className='add-viewing-div' style={{ display: isVisible ? 'block' : 'none' }}>
                <GrClose size={30} className='close-icon' onClick={() => setVisibility(!isVisible)} />
                <div className='content-viewing-div'>
                    <div className='inputs-div'>
                        <div className='input-div'>
                            <input type='text' id='username-input' className='input' placeholder=" Username" ref={usernameRef} />
                            <input type='text' id='firstname-input' className='input' placeholder=" First name" ref={firstnameRef} />
                            <input type='text' id='lastname-input' className='input' placeholder=" Last name" ref={lastnameRef} />
                            <input type='text' id='project-input' className='input' placeholder=" Projects"
                                onChange={(e) => setPInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <input type='text' id='linkedIn-input' className='input' placeholder=" LinkedIn" ref={linkedInRef} />
                            <input type='text' id='email-input' className='input' placeholder=' email123@email.com' ref={emailRef} />
                        </div>
                        <div className='display-involvement'>
                            {
                                inputtedProjects.map(
                                    (item, index) => {
                                        return (
                                            <div key={index}>
                                                {item}
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className='button-div'>
                        <div className='button' onClick={handleSubmit}>
                            <p style={{ color: "white" }}>
                                Submit
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectAddMember;