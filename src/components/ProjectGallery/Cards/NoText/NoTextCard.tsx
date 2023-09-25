import react from 'react';
import './NoTextCard.css';

interface PropOBJ {
    key: number;
    imgSrc: string;
    darkMode: boolean;
}

const NoTextCard = (props:PropOBJ) => {

    const {key, imgSrc, darkMode} = props;

    return (
        <div className='no-card-box-content' key={key} style={{backgroundColor: darkMode ? "" : "rgb(42,55,73)"}}>
            <img src={imgSrc} className='gallery-noText-img' />
        </div>
    )
};

export default NoTextCard;