import { display } from '@mui/system';
import './NoPhotoTest.css';
import { ImQuotesLeft } from "react-icons/im";

interface PropsOBJ {
    key: number;
    description: string;
    name: string;
    position: string;
}


const NoPhotoTest = (props: PropsOBJ) => {

    const { key, description, name, position } = props;


    return (
        <div className='no-photo-testimony-box-content' key={key}>
            <div style={{ display: 'flex' }}>
                <ImQuotesLeft size={40} className='quote-icon'/>
                <div className='text'>
                    <div className='description'>
                        <p className='description-text'>
                            {description}
                        </p>
                    </div>
                    <div className='identification'>
                        <div className='name-div'>
                            <p className='name'>
                                {name}
                            </p>
                        </div>
                        <div className='position-div'>
                            <p className='position'>
                                {position}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NoPhotoTest;