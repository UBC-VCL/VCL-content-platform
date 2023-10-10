import react from 'react';
import './DefaultCard.css'

interface PropsOBJ {
    key: number;
    imgSrc: string;
    title: string;
    description: string;
}

const DefaultCard = (props: PropsOBJ) => {

    const {key, imgSrc, title, description} = props;

    return (
        <div className='box-content' key={key}>
            <div className='image-container'>
                <img src={imgSrc} alt='' className='gallery-img' />
            </div>
            <h1 className='gallery-title'>{title}</h1>
            <p className='gallery-description'>L{description}</p>
        </div>
    )
}

export default DefaultCard;