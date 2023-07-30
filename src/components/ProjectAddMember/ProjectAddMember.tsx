import './ProjectAddMember.css'
import { GrClose } from "react-icons/gr";

interface PropsOBJ {
    isVisible: boolean;
    setVisibility: (boolean: boolean) => void;
}

const ProjectAddMember = (props: PropsOBJ) => {

    const { isVisible, setVisibility } = props;

    return (
        <>
            <div className='add-viewing-div' style={{ display: isVisible ? 'block' : 'none' }}>
                <GrClose size={30} className='close-icon' onClick={() => setVisibility(!isVisible)} />
                <div className='content-viewing-div'>
                    <div className='inputs-div'>
                        <div className='input-div'>
                            <input type='text' id='name-input' className='input' placeholder="Full name" />
                            <input type='text' id='involvement-input' className='input' placeholder="involvement" />
                            <input type='text' id='email-input' className='input' placeholder='email123@email.com' />
                            <input type='text' id='phone-input' className='input' placeholder="123-45-678" />
                            <input type='text' id='linkedInInput' className='input' placeholder="LinkedIn" />
                        </div>
                        <div className='display-involvement'>

                        </div>
                    </div>
                    <div className='button-div'>
                        <div className='button'>
                            <p>
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