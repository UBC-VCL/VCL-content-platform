import "./ProjectGallery.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { SlideShowOBJ } from "../../pages/Project/types";
import { DefaultCard, NoPhotoTest, TestimonyCard } from './Cards/Cards';

interface PropsOBJ {
  itemArray: Array<SlideShowOBJ>;
  displayNumber: string;
  compTitle: string;
}

const ProjectGallery = (props: PropsOBJ) => {
  const { itemArray, displayNumber, compTitle } = props;

  // This defines the index of which element is being displayed within the gallery at the moment
  const [galleryIndex, setGalleryIndex] = useState<number>(0);

  // This just defines a Timeout object necessary for keeping track of when to auto scroll through the gallery
  const timeoutRef = useRef<any>(null);

  // Will just restart the timer within the Timeout obj
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const GALLERY_WINDOW_WIDTH = document.getElementById("gallery-box")?.offsetWidth;

  useEffect(() => {
    console.log(window.innerWidth);
    setGalleryIndex(0);
  }, [itemArray]);

  let touchstartX = 0
  let touchendX = 0

  function checkDirection() {
    if (touchendX < touchstartX) {
      galleryIndex === itemArray.length - 1 ? setGalleryIndex(0) : setGalleryIndex(galleryIndex + 1);
    }
    if (touchendX > touchstartX) {
      galleryIndex === 0 ? setGalleryIndex(itemArray.length - 1) : setGalleryIndex(galleryIndex - 1);
    };
  }

  document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
  })

  document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection();
  })

  // This is the autoscrolling feature
  // useEffect(() => {

  //     if (itemArray.length > 1) {
  //         resetTimeout()
  //         timeoutRef.current = setTimeout(
  //             () => setGalleryIndex((prev) => prev === itemArray.length - 1 ? 0 : prev + 1), 4000
  //         )
  //         return () => {
  //             resetTimeout()
  //         }
  //     }
  // }, [galleryIndex, itemArray])

  return (

    <div id="gallery-container">
      <h1 className="gallery-title">{displayNumber}</h1>
      <h2 className="gallery-title">{compTitle}</h2>
      <div id="gallery-window">
        { // Left arrow will only show for devices that are not mobile
          (window.innerWidth >= 767) && < BsArrowLeftCircle className='gallery-buttons' color='white' size={"2.5rem"} onClick={() => {
            galleryIndex === 0 ? setGalleryIndex(itemArray.length - 1) : setGalleryIndex(galleryIndex - 1)
          }} />}

        <div id="gallery-box"
        >
          <div className="slideshow-slider" style={{
            transform: `translate3d(${-galleryIndex * 99}%, 0, 0)`,
            display: 'flex',
          }}>
            {itemArray.map((obj, index) => {
              switch (obj.cardType) {
                case "testimony":
                  return (
                    <TestimonyCard
                      key={index}
                      imgSrc={obj.img!}
                      description={obj.description}
                      name={obj.name!}
                      position={obj.position!}
                    />
                  );
                case "no-photo-test":
                  return (
                    <NoPhotoTest
                      key={index}
                      description={obj.description}
                      name={obj.name!}
                      position={obj.position!}
                    />
                  );
                default:
                  return (
                    <DefaultCard
                      key={index}
                      imgSrc={obj.img!}
                      title={obj.title!}
                      description={obj.description}
                    />
                  );
              }
            })
            }
          </div>

          
        </div>

        {// right arrow will only show for devices that are not mobile
          (window.innerWidth >= 767) && < BsArrowRightCircle className='gallery-buttons' color='white' size={"2.5rem"} onClick={() => {
            galleryIndex === itemArray.length - 1 ? setGalleryIndex(0) : setGalleryIndex(galleryIndex + 1)
          }} />}
      </div>
      {
            // (window.innerWidth >= 767) &&
            (itemArray.length > 1 && 
            (
              <div className="slideshowDots">
                {itemArray.map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${galleryIndex === idx ? " active" : ""
                      }`}
                    onClick={() => {
                      setGalleryIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            ))}
    </div>
  );
};


export default ProjectGallery;
