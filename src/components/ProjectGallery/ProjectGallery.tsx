import "./ProjectGallery.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { SlideShowOBJ } from "../../pages/Project/types";
import {DefaultCard, NoPhotoTest, TestimonyCard} from './Cards/Cards';

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

  useEffect(() => {
    setGalleryIndex(0);
  }, [itemArray]);

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
    <>
      <div id="container">
        <div id="container-titles">
          {/* 
                            The titles below should not be hardcoded like this, but should be instead inside a prop
                        */}
          <div>
            <h1 id="container-title-h1">{displayNumber}</h1>
            <h2 id="container-title-h2">{compTitle}</h2>
          </div>
        </div>
        <div id="gallery-container">
          {itemArray.length > 1 && (
            <BsArrowLeftCircle
              className="gallery-buttons"
              color="white"
              size={"2.5rem"}
              onClick={() => {
                galleryIndex === 0
                  ? setGalleryIndex(itemArray.length - 1)
                  : setGalleryIndex(galleryIndex - 1);
              }}
            />
          )}
          <div className="gallery-box">
            <div
              className="slideshowSlider"
              style={{
                transform: `translate3d(${-galleryIndex * 100}%, 0, 0)`,
              }}
            >
              {
                /* 
                                    Theses displayed properties should also be from props
                                */
                itemArray.map((obj, index) => {
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
            {itemArray.length > 1 && (
              <div className="slideshowDots">
                {itemArray.map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${
                      galleryIndex === idx ? " active" : ""
                    }`}
                    onClick={() => {
                      setGalleryIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
          {itemArray.length > 1 && (
            <BsArrowRightCircle
              className="gallery-buttons"
              color="white"
              size={"2.5rem"}
              onClick={() => {
                galleryIndex === itemArray.length - 1
                  ? setGalleryIndex(0)
                  : setGalleryIndex(galleryIndex + 1);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectGallery;
