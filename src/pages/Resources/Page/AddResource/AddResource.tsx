import './AddResource.css';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegFileLines } from "react-icons/fa6";
import { useState, ChangeEvent } from 'react';

const AddResource: React.FC<{ isVisible: boolean, setVisible: (bool: boolean) => void }> = ({ isVisible, setVisible }) => {


    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);

        // Perform any other actions with the file if needed
        if (file) {
            console.log('Selected file:', file.name);
            // You can do more with the file, such as displaying its name or uploading it.
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div className='add-resource-content-container' style={{ display: `${isVisible ? '' : 'none'}` }}>
            <div className='add-resource-content'>
                <div className='add-resource-close-tab-container'>
                    {/* <div >
                        close
                    </div> */}
                    <IoCloseSharp className='add-resource-close-tab-button' size={45}
                        onClick={() => {
                            setVisible(false);
                        }} />
                </div>
                <div className='add-resource-content-title-container'>
                    <h1>Add Resource</h1>
                </div>
                <div className='add-resource-input-containers'>
                    <div className='add-resource-input add-resource-input-containers-child' id='add-resource-title-input-container'>
                        <h2>Title</h2>
                        <input type='string' />
                    </div>
                    <div className='add-resource-input add-resource-input-containers-child' id='add-resource-description-input-container'>
                        <h2>Description</h2>
                        <textarea />
                    </div>
                    <div className='add-resource-input-containers-child'>
                        <input type='file' onChange={handleFileChange} id='add-resource-file-input-div' />
                    </div>
                    <div className='add-resource-input add-resource-input-containers-child' id='add-resource-file-input-container'>
                        <h2>Uploaded</h2>
                        {
                            selectedFile ?
                            <div style={{ display: 'flex', alignItems: 'center' }} className="add-resource-file-input">
                                <FaRegFileLines size={40} />
                                <p style={{ marginLeft: '1rem', overflow: 'none' }}>
                                    {
                                        selectedFile.name
                                    }
                                </p>
                                <div onClick={() => {
                                    setSelectedFile(null);
                                    const fileInput = document.getElementById('add-resource-file-input-div') as HTMLInputElement | null;
                                    if (fileInput) {
                                        fileInput.value = '';
                                    }
                                }} className='add-resource-file-input-delete-button'>
                                    DELETE
                                </div>
                            </div> :
                            <h2 style={{textAlign:'center'}}>
                                Nothing has been uploaded
                            </h2>
                        }
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