import { color } from '@mui/system';
import './ProjectAddMember.css'
import { GrClose } from "react-icons/gr";
import { useState, useRef } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface PropsOBJ {
    isVisible: boolean;
    setVisibility: (boolean: boolean) => void;
}

const ProjectAddMember = (props: PropsOBJ) => {

    const usernameRef = useRef<HTMLInputElement>(null);
    const firstnameRef = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const linkedInRef = useRef<HTMLInputElement>(null);

    const { isVisible, setVisibility } = props;

    const [inputtedProjects, setProjects] = useState<Array<string>>([])
    const [currentPInput, setPInput] = useState<string>("")

    const handleSubmit = async () => {
        console.log(firstnameRef.current!.value)
        console.log(lastnameRef.current!.value)
        console.log(inputtedProjects)
        try {
            const [usernameData, firstnameData, lastnameData, projectsData, emailData, linkedInData] = [usernameRef.current?.value, firstnameRef.current?.value, lastnameRef.current?.value, inputtedProjects, emailRef.current?.value, linkedInRef?.current!.value]

            const response = await axios.post('http://localhost:4000/api/members',
                { username: usernameData, firstName: firstnameData, lastName: lastnameData, projects: projectsData, email: emailData, linkedIn: linkedInData, isActive: true })
        } catch(err) {

        }
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {

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
                            {/* <input type='text' id='involvement-input' className='input' placeholder="involvement" /> */}
                            {/* <input type='text' id='phone-input' className='input' placeholder="123-45-678" /> */}
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