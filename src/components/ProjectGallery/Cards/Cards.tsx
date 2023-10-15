import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import './Cards.css';

interface PropsOBJ1 {
    key: number;
    imgSrc: string;
    title: string;
    description: string;
}

const DefaultCard = (props: PropsOBJ1) => {

    const {key, imgSrc, title, description} = props;

    return (
        <div className='default-card-box-content' key={key}>
            <div className='default-image-container'>
                <img src={imgSrc} alt='' className='gallery-img' />
            </div>
            <h1 className='gallery-title'>{title}</h1>
            <p className='gallery-description'>{description}</p>
        </div>
    );
};

interface PropsOBJ2 {
    key: number;
    description: string;
    name: string;
    position: string;
}

const NoPhotoTest = (props:PropsOBJ2) => {
    const { key, description, name, position } = props;


    return (
        <div className='no-photo-testimony-box-content' key={key}>
            <div style={{ display: 'flex' }}>
                <ImQuotesLeft size={45} className='quote-icon'/>
                <div className='text'>
                    <div className='description'>
                        <p className='description-text'>
                            {description}
                        </p>
                    </div>
                    <div className='identification'>
                        <div className='name-div'>
                            <p className='no-photo-testimony-name'>
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
    );
};

interface PropsOBJ3 {
    key: number;
    imgSrc: string;
    description: string;
    name: string;
    position: string;
}

const TestimonyCard = (props:PropsOBJ3) => {
    const { key, imgSrc, description, name, position } = props;

    return (
        <div className='testimony-box-content' key={key}>
            <div className='img-container'>
                <img src={imgSrc} className={'profile-photo'} />
            </div>
            <div className='info-container'>
                <ImQuotesLeft className='quote-icon' size={45} />
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
    );
};


export {DefaultCard, NoPhotoTest, TestimonyCard};
