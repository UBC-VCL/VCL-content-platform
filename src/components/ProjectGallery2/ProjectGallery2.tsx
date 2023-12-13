// Library imports.
import { useEffect, useState, useCallback, useRef } from 'react';

// Style imports.
import './ProjectGallery2.css';

const AUTO_TIME = 10; // Seconds.

interface CarouselItemProps {
    index: number;
}
const data = [
    {
        title: 'title1',
        description: 'description1',
        image: 'image1'
    },
    {
        title: 'title2',
        description: 'description2',
        image: 'image2'
    },
    // {
    //     title: 'title3',
    //     description: 'description3',
    //     image: 'image3'
    // }
]

const CarouselItem: React.FC<CarouselItemProps> = ({ index }) => {
    const carousel = useRef<HTMLDivElement>(null);

    return (
        <div className="CarouselItem" ref={carousel}>
            {
                data[index].title
            }
        </div>
    );
};

interface CarouselProp {
    darkmode: boolean;
}
const ProjectGallery2: React.FC<CarouselProp> = ({darkmode}) => {
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
        >
            <div className="project-gallery-container" 
            style={{backgroundColor: `${darkmode ? '#1B283A': 'white'}`, color: `${darkmode ? 'white': 'black'}`}}
            >
            {data.length > 1 && (
                <div className="LeftArrow" onClick={previous}>
                    <CarouselItem index={currentIndex === 0 ? 0 : currentIndex - 1} />
                </div>
            )}

            <CarouselItem index={currentIndex} />

            {data.length > 1 && (
                <div className="RightArrow" onClick={next}>
                    <CarouselItem index={currentIndex === (data.length - 1) ? 0 : currentIndex + 1} />
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
