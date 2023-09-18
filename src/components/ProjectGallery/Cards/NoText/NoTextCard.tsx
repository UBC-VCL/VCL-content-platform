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
        <div className='box-content' key={key} style={{backgroundColor: darkMode ? "" : "grey"}}>
            <img src={imgSrc} className='gallery-noText-img' />
        </div>
    )
};

export default NoTextCard;