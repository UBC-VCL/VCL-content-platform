import { useEffect, useState, useCallback, useRef } from 'react';
import './ProjectGallery2.css';
import { PROJECT } from '@statics/projectsV2';

const AUTO_TIME = 10; // Seconds.

interface CarouselItemProps {
    active: boolean;
    data: {
        img?: string;
        title?: string;
        description: string;
        cardType: string;
        name?: string; // only if the card is of type 'testimony'
        position?: string; // only if the card is of type 'testimony'}[];
    };
}
// const data = [
//     {
//         title: 'title1',
//         description: 'description1',
//         image: 'image1'
//     },
//     {
//         title: 'title2',
//         description: 'description2',
//         image: 'image2'
//     },
//     // {
//     //     title: 'title3',
//     //     description: 'description3',
//     //     image: 'image3'
//     // }
// ]

const CarouselItem: React.FC<CarouselItemProps> = ({ data, active }) => {
    const carousel = useRef<HTMLDivElement>(null);

    return (
        <div className="carousel-item" ref={carousel}>
            <div style={{width:"100%", justifyContent:'center', alignContent:'center', display:'flex'}}>
                <img src={data.img} alt="" className="carousel-item-img"/>
            </div>
            <h1 className="carousel-item-title">
                {
                    data.title
                }
            </h1>
            <p className="carousel-item-desc">
                {
                    data.description
                }
            </p>
        </div>
    );
};

interface CarouselProp {
    title: string;
    titleNum: string;
    darkmode: boolean;
    data: {
        img?: string;
        title?: string;
        description: string;
        cardType: string;
        name?: string; // only if the card is of type 'testimony'
        position?: string; // only if the card is of type 'testimony'}[];
    }[];
}
const ProjectGallery2: React.FC<CarouselProp> = ({ darkmode, data, title, titleNum }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [touchStart, setTouchStart] = useState<number>(0);
    const [touchEnd, setTouchEnd] = useState<number>(0);
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

    const previous = useCallback(() => {
        currentIndex === 0
            ? setCurrentIndex(data.length - 1)
            : setCurrentIndex(currentIndex - 1);
    }, [currentIndex]);

    const next = useCallback(() => {
        currentIndex === data.length - 1
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + 1);
    }, [currentIndex]);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchStart(event.touches[0].clientX);
        setTouchEnd(event.touches[0].clientX);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 150) next();
        else if (touchEnd - touchStart > 150) previous();
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') previous();
            else if (event.key === 'ArrowRight') next();
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [previous, next]);

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, AUTO_TIME * 1000);

        return () => clearInterval(interval);
    }, [next]);

    useEffect(() => {
        // Function to update window size
        const updateWindowSize = () => {
            setWindowSize(window.innerWidth);
            console.log(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowSize);

        // Initial window size
        updateWindowSize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, []); // Empty dependency array ensures that the effect runs only on mount and unmount


    return (
        <div

            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ backgroundColor: `${darkmode ? '#1B283A' : 'white'}`, color: `${darkmode ? 'white' : 'black'}` }}
            className="project-gallery-container"
        >
            <div className="project-gallery-titles">
                <h1 className="project-gallery-title">
                    {titleNum}
                </h1>
                <h2 className="project-gallery-title">
                    {title} 
                </h2>
            </div>
            <div className="project-gallery-content-container"
            >
                {data.length > 1 && windowSize >= 1024 && (
                    <div className="LeftArrow" onClick={previous}>
                        <CarouselItem data={currentIndex === 0 ? data[0] : data[currentIndex - 1]} active={false}/>
                    </div>
                )}

                <CarouselItem data={data[currentIndex]} active={true}/>

                {data.length > 1 && windowSize >= 1024 && (
                    <div className="RightArrow" onClick={next}>
                        <CarouselItem data={currentIndex === (data.length - 1) ? data[0] : data[currentIndex + 1]} active={false}/>
                    </div>
                )}
            </div>
            <div className="gallery-dots">
                {data.map((_, index: number) => {
                    return (
                        <div
                            key={index}
                            className={
                                index === currentIndex ? 'gallery-dot-active' : 'gallery-dot'
                            }
                            onClick={() => setCurrentIndex(index)}
                        />
                    );
                })}
            </div>

        </div>
    );
};

export default ProjectGallery2;