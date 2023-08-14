import './ProjectGallery.css'
import img1 from '@statics/images/correlation/correlation1.png';
import img2 from '@statics/images/correlation/correlation2.png';
import img3 from '@statics/images/correlation/correlation3.png';
import img4 from '@statics/images/correlation/correlation4.png';
import DefaultCard from './Cards/Default/DefaultCard';

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import { useState, useEffect, useRef } from 'react'
import TestimonyCard from './Cards/Testimony/TestimonyCard';


interface SlideShowOBJ {
    img: string;
    title: string;
    description: string;
    cardType: string;
    name?: string; // only if the card is of type 'testimony'
    position?: string; // only if the card is of type 'testimony'
}

const dummyList: SlideShowOBJ[] = [
    {
        img: img1,
        title: 'Figure 1.1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        cardType: 'testimony',
        name: 'Sally',
        position: 'Project Correlation, Researcher'
    },
    {
        img: img2,
        title: 'Figure 1.2',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        , cardType: 'default'
    },
    {
        img: img3,
        title: 'Figure 1.3',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        , cardType: 'default'
    },
    {
        img: img4,
        title: 'Figure 1.4',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        , cardType: 'default'
    },
    {
        img: img1,
        title: 'Figure 1.5',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        , cardType: 'default'
    }
]

const ProjectGallery = () => {

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
    // useEffect(() => {
    //     resetTimeout()
    //     timeoutRef.current = setTimeout(
    //         () => setGalleryIndex((prev) => prev === dummyList.length - 1 ? 0 : prev + 1), 4000
    //     )
    //     return () => {
    //         resetTimeout()
    //     }
    // }, [galleryIndex])


    return (
        <>
            <div id='container'>
                <div id='container-titles'>
                    {
                        /* 
                            The titles below should not be hardcoded like this, but should be instead inside a prop
                        */
                    }
                    <div>
                        <h1 id='container-title-h1'>
                            02
                        </h1>
                        <h2 id='container-title-h2'>
                            Gallery
                        </h2>
                    </div>
                </div>
                <div id='gallery-container'>
                    < BsArrowLeftCircle className='gallery-buttons' color='white' size={"2.5rem"} onClick={() => {
                        galleryIndex === 0 ? setGalleryIndex(dummyList.length - 1) : setGalleryIndex(galleryIndex - 1)
                    }} />
                    <div className="gallery-box">
                        <div className='slideshowSlider' style={{ transform: `translate3d(${-galleryIndex * 100.5}%, 0, 0)` }}>
                            {
                                /* 
                                    Theses displayed properties should also be from props
                                */
                                dummyList.map((obj, index) => {
                                    switch (obj.cardType) {
                                        case 'testimony':
                                            return <TestimonyCard key={index} imgSrc={obj.img} title={obj.title} description={obj.description} name={obj.name!} position={obj.position!}/>;
                                        default:
                                            return <DefaultCard key={index} imgSrc={obj.img} title={obj.title} description={obj.description} />;
                                    }
                                })
                            }
                        </div>
                        <div className='slideshowDots'>
                            {
                                dummyList.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`slideshowDot${galleryIndex === idx ? " active" : ""}`}
                                        onClick={() => {
                                            setGalleryIndex(idx)
                                        }}>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    < BsArrowRightCircle className='gallery-buttons' color='white' size={"2.5rem"} onClick={() => {
                        galleryIndex === dummyList.length - 1 ? setGalleryIndex(0) : setGalleryIndex(galleryIndex + 1)
                    }} />
                </div>
            </div>
        </>
    )
}

export default ProjectGallery;