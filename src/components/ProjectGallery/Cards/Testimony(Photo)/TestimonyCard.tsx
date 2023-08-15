import react from 'react'
import './TestimonyCard.css'
import { ImQuotesLeft } from "react-icons/im";

interface PropsOBJ {
    key: number;
    imgSrc: string;
    description: string;
    name: string;
    position: string;
}


const TestimonyCard = (props:PropsOBJ) => {

    const {key, imgSrc, description, name, position} = props;

    return(
        <div className='testimony-box-content' key={key}>
            <div className='img-container'>
                <img src={imgSrc} className={'profile-photo'}/>
            </div>
            <div className='info-container'>
                <ImQuotesLeft className='quote-icon' size={40}/>
                <div className='description-section'>
                    <p className='description-p'>
                        {description}
                    </p>
                </div>
                <div className='identification-section'>
                    <h1 id='name'>
                        {name}
                    </h1>
                    <h2 id='position'>
                        {position}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default TestimonyCard;