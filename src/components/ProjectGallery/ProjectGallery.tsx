import './ProjectGallery.css'
import img1 from '@statics/images/correlation/correlation1.png';
import { useState, useEffect, useRef } from 'react'


interface SlideShowOBJ {
    img: string;
    title: string;
    description: string;
}

const dummyList: SlideShowOBJ[] = [
    {
        img: img1,
        title: 'Figure 1.1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        img: img1,
        title: 'Figure 1.2',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        img: img1,
        title: 'Figure 1.3',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        img: img1,
        title: 'Figure 1.4',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        img: img1,
        title: 'Figure 1.5',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

const ProjectGallery = () => {

    const [galleryIndex, setGalleryIndex] = useState<number>(0);
    const timeoutRef = useRef<any>(null)

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () => setGalleryIndex((prev) => prev === dummyList.length - 1 ? 0 : prev + 1), 2500
        )
        return () => {
            resetTimeout()
        }
    }, [galleryIndex])

    return (
        <>
            <div className="gallery-box">
                {/* <div className='box-content'>
                    <div className='image-container'>
                        <img src={img1} alt='' className='gallery-img' />
                    </div>
                    <h1 className='gallery-title'>Figure 1.1</h1>
                    <p className='gallery-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='box-content'>
                    <div className='image-container'>
                        <img src={img1} alt='' className='gallery-img' />
                    </div>
                    <h1 className='gallery-title'>Figure 1.1</h1>
                    <p className='gallery-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='box-content'>
                    <div className='image-container'>
                        <img src={img1} alt='' className='gallery-img' />
                    </div>
                    <h1 className='gallery-title'>Figure 1.1</h1>
                    <p className='gallery-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>*/}
                <div className='slideshowSlider' style={{ transform: `translate3d(${-galleryIndex * 102}%, 0, 0)` }}>
                    {
                        dummyList.map((obj, index) => (
                            <div className='box-content' key={index}>
                                <div className='image-container'>
                                    <img src={obj.img} alt='' className='gallery-img' />
                                </div>
                                <h1 className='gallery-title'>{obj.title}</h1>
                                <p className='gallery-description'>L{obj.description}</p>
                            </div>
                        ))
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
        </>
    )
}

export default ProjectGallery;