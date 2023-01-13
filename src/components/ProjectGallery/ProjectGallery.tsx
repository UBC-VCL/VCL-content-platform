import * as React from 'react';
import './ProjectGallery.css';
import { TEXT } from '@statics';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

interface GalleryProps {
    title: string,
    desc: string,
    backgroundColor?: string,
  }

  const defaultProps: GalleryProps = {
    title: '',
    desc: '',
    backgroundColor: '#ffffff'
  }
  
const ProjectGallery = ({ title, desc, backgroundColor }: GalleryProps) => {
    return (
        <div  className="project-gallery-container">
            <h3 className="gallery-section">{TEXT.SECTION_NUMBERS.TWO} </h3>
            <h1 className="gallery-title">{title}</h1>
            <div className='card-decorator' />
        
            <Carousel fade>
            <Carousel.Item className="project-gallery-card">
                <img
                    className="gallery-image"
                    src="correlationgraph.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="image-caption">{TEXT.PROJECT_GALLERY_DEFAULTS.IMAGE_CAPTION} </h3>
                    <p className="image-description">{TEXT.PROJECT_GALLERY_DEFAULTS.IMAGE_DESCRIPTION} </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="project-gallery-card">
                <img
                    className="gallery-image"
                    src="imagetransitionstwo.gif"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="image-caption">{TEXT.PROJECT_GALLERY_DEFAULTS.IMAGE_CAPTION} l</h3>
                    <p className="image-description">{TEXT.PROJECT_GALLERY_DEFAULTS.IMAGE_DESCRIPTION}</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="project-gallery-card">
                <img
                    className="gallery-image"
                    src="correlationgraph2.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="image-caption">{TEXT.PROJECT_GALLERY_DEFAULTS.IMAGE_CAPTION} </h3>
                    <p className="image-description">{TEXT.PROJECT_GALLERY_DEFAULTS.IMAGE_DESCRIPTION} </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="project-gallery-card">
                <img
                    className="gallery-image"
                    src="imagetransitions.gif"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3 className="image-caption">{TEXT.PROJECT_GALLERY_DEFAULTS.IMAGE_CAPTION} </h3>
                    <p className="image-description">{TEXT.PROJECT_GALLERY_DEFAULTS.IMAGE_DESCRIPTION}</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
}

ProjectGallery.defaultProps = defaultProps;

export default ProjectGallery;