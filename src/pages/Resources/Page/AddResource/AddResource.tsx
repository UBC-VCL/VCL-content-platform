import './AddResource.css';
import { IoCloseSharp } from "react-icons/io5";

const AddResource: React.FC<{ isVisible: boolean, setVisible:(bool:boolean)=>void }> = ({ isVisible, setVisible }) => {

    return (
        <div className='add-resource-content-container' style={{display:`${isVisible ? '' : 'none'}`}}>
            <div className='add-resource-content'>
                <div className='add-resource-close-tab-container'>
                    {/* <div >
                        close
                    </div> */}
                    <IoCloseSharp className='add-resource-close-tab-button' size={45} 
                    onClick={() => {
                        setVisible(false);
                    }}/>
                </div>
                <div className='add-resource-input-containers'>
                    <div className='add-resource-input add-resource-input-containers-child' id='add-resource-title-input-container'>
                        <h2>Title</h2>
                        <input type='string' />
                    </div>
                    <div className='add-resource-input add-resource-input-containers-child' id='add-resource-description-input-container'>
                        <h2>Description</h2>
                        <textarea/>
                    </div>
                    <div className='add-resource-input-containers-child'>
                        <input type='file'/>
                    </div>
                    <div className='add-resource-input add-resource-input-containers-child' id='add-resource-file-input-container'>
                        <h2>Uploaded</h2>
                    </div>
                    <div id='add-resource-submit-button' className='add-resource-input-containers-child'>
                        <h2>
                            Submit
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default AddResource;