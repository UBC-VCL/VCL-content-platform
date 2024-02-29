import { useEffect, useState, useCallback } from 'react';
import './ProjectGallery2.css';
import { GALLERY_ITEM } from '@statics/projectsV2';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";


const AUTO_TIME = 5; // Seconds.

interface CarouselItemProps {
    active: boolean;
    side: string;
    data: GALLERY_ITEM;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ data, active, side }) => {

    switch (data.cardType) {
        case "no-photo-test": {
            return (
                <div className='carousel-grid-item' style={{ display: "flex", justifyContent: `${active ? "center" : `${side == 'left' ? "end" : ""}`}`, alignItems: `${active ? "center" : ""}`, height: `${side == 'center' ? "100%" : "30vh"}` }}>
                    <div className="carousel-item" style={{ width: `${active ? "100%" : "20%"}` }}>
                        <div className='no-photo-test-quote-container'>
                            <ImQuotesLeft id='no-photo-test-left-quote' size={25} />
                        </div>
                        <p className="carousel-item-desc" id="no-photo-test-description">
                            {
                                data.description
                            }
                        </p>
                        <div className='no-photo-test-quote-container'>
                            <ImQuotesRight id='no-photo-test-right-quote' size={25} />
                        </div>
                        <div className='no-photo-test-identification-container'>
                            <div className='no-photo-test-fullName'>
                                {data.name}
                            </div>
                            {
                                ","
                            }
                            &nbsp;
                            <div className='no-photo-test-position'>
                                {data.position}
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
        default: {
            return (
                <div className='carousel-grid-item' style={{ display: "flex", justifyContent: `${active ? "center" : `${side == 'left' ? "end" : ""}`}`, alignItems: `${active ? "center" : ""}`, height: `${side == 'center' ? "100%" : "30vh"}` }}>
                    <div className="carousel-item" style={{ width: `${active ? "100%" : "20%"}` }}>
                        <div style={{ width: "100%", justifyContent: 'center', alignContent: 'center', display: 'flex' }}>
                            {active && <img src={data.img} alt="" className="carousel-item-img" />}
                        </div>
                        {
                            active ? (
                                <div>
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
                            ) : ""
                        }
                    </div>
                </div>
            );
        }
    }
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
                {currentIndex != 0 ? data.length > 1 && windowSize >= 1024 && (
                    <div onClick={previous} className='project-gallery-arrows'>
                        <IoIosArrowDropleft size={60} style={{ float: 'right' }} />
                    </div>
                ) : <div></div>}

                <CarouselItem data={data[currentIndex]} active={true} side={"center"} />

                {currentIndex != data.length - 1 ? data.length > 1 && windowSize >= 1024 && (
                    <div onClick={next} className='project-gallery-arrows'>
                        <IoIosArrowDropright size={60} />
                    </div>
                ) : <div></div>}
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