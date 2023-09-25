import './ProjectGallery.css'
import DefaultCard from './Cards/Default/DefaultCard';

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useState, useEffect, useRef } from 'react'
import TestimonyCard from './Cards/Testimony(Photo)/TestimonyCard';
import NoPhotoTest from './Cards/Testimony(No-Photo)/NoPhotoTest';
import NoTextCard from './Cards/NoText/NoTextCard';

import { SlideShowOBJ } from '../../pages/Project/types';

interface PropsOBJ {
    itemArray: Array<SlideShowOBJ>;
    displayNumber: string;
    compTitle: string;
    darkMode: boolean;
}

const ProjectGallery = (props:PropsOBJ) => {

    const { itemArray, displayNumber, compTitle, darkMode } = props;

    // This defines the index of which element is being displayed within the gallery at the moment
    const [galleryIndex, setGalleryIndex] = useState<number>(0);

    // This just defines a Timeout object necessary for keeping track of when to auto scroll through the gallery
    const timeoutRef = useRef<any>(null)

    // Will just restart the timer within the Timeout obj
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    // This is the autoscrolling feature
    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () => setGalleryIndex((prev) => prev === itemArray.length - 1 ? 0 : prev + 1), 4000
        )
        return () => {
            resetTimeout()
        }
    }, [galleryIndex])


    return (
        <>
            <div id='container' style={{backgroundColor: darkMode ? "" : 'white'}}>
                <div id='container-titles'>
                    {
                        /* 
                            The titles below should not be hardcoded like this, but should be instead inside a prop
                        */
                    }
                    <div>
                        <h1 id='container-title-h1'>
                            {displayNumber}
                        </h1>
                        <h2 id='container-title-h2'>
                            {compTitle}
                        </h2>
                    </div>
                </div>
                <div id='gallery-container' >
                    < BsArrowLeftCircle className='gallery-buttons' color='white' size={"2.5rem"} onClick={() => {
                        galleryIndex === 0 ? setGalleryIndex(itemArray.length - 1) : setGalleryIndex(galleryIndex - 1)
                    }} 
                    style={{color: darkMode ? "" : 'rgb(42,55,73)'}}/>
                    <div className="gallery-box" >
                        <div className='slideshowSlider'style={{ transform: `translate3d(${-galleryIndex * 100.5}%, 0, 0)`,  }}>
                            {
                                /* 
                                    Theses displayed properties should also be from props
                                */
                                    itemArray.map((obj, index) => {
                                    switch (obj.cardType) {
                                        case 'testimony':
                                            return <TestimonyCard key={index} imgSrc={obj.img!} description={obj.description!} name={obj.name!} position={obj.position!} />;
                                        case 'no-text':
                                            return <NoTextCard key={index} imgSrc={obj.img!} darkMode={darkMode}/>
                                        case 'no-photo-test':
                                            return <NoPhotoTest key={index} description={obj.description!} name={obj.name!} position={obj.position!} />
                                        default:
                                            return <DefaultCard key={index} imgSrc={obj.img!} title={obj.title!} description={obj.description!} />;
                                    }
                                })
                            }
                        </div>
                        <div className='slideshowDots'>
                            {
                                itemArray.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`slideshowDot${galleryIndex === idx ? " active" : ""}`}
                                        onClick={() => {
                                            setGalleryIndex(idx)
                                        }}
                                        // style={{backgroundColor: darkMode ? "" : 'grey'}}
                                        >
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    < BsArrowRightCircle className='gallery-buttons' color='white' size={"2.5rem"} onClick={() => {
                        galleryIndex === itemArray.length - 1 ? setGalleryIndex(0) : setGalleryIndex(galleryIndex + 1)
                    }} 
                    style={{color: darkMode ? "" : 'rgb(42,55,73)'}}/>
                </div>
            </div>
        </>
    )
}

export default ProjectGallery;