import { color } from '@mui/system';
import './ProjectAddMember.css'
import { GrClose } from "react-icons/gr";
import { useState } from 'react';


interface PropsOBJ {
    isVisible: boolean;
    setVisibility: (boolean: boolean) => void;
}

const ProjectAddMember = (props: PropsOBJ) => {

    const { isVisible, setVisibility } = props;

    const [inputtedProjects, setProjects] = useState<Array<string>>([])
    const [currentPInput, setPInput] = useState<string>("")

    const handleSubmit = () => {

    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {

        if (event.key == 'Enter') {
            if(currentPInput !== '') {
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
                            <input type='text' id='firstname-input' className='input' placeholder=" First name" />
                            <input type='text' id='lastname-input' className='input' placeholder=" Last name" />
                            <input type='text' id='project-input' className='input' placeholder=" Projects"
                                onChange={(e) => setPInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            {/* <input type='text' id='involvement-input' className='input' placeholder="involvement" />
                            <input type='text' id='email-input' className='input' placeholder='email123@email.com' />
                            <input type='text' id='phone-input' className='input' placeholder="123-45-678" />
                            <input type='text' id='linkedInInput' className='input' placeholder="LinkedIn" /> */}
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