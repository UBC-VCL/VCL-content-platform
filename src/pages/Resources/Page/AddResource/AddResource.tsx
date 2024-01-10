import './AddResource.css';

const AddResource = () => {

    return (
        <div className='add-resource-content-container'>
            <div className='add-resource-content'>
                <div className='add-resource-close-tab-container'>
                    <div className='add-resource-close-tab-button'>
                        close
                    </div>
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
                    <div className='add-resource-input add-resource-input-containers-child' id='add-resource-file-input-container'>
                        <h2>Uploaded</h2>
                    </div>
                    <div className='add-resource-input-containers-child'>
                        {
                            // where you render which files have ben uploaded
                            "uploaded files"
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