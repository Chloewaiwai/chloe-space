import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ProjectCarousel({projectimgs}) {
  return (
    <Carousel variant="dark">
     {projectimgs.map((image, index) => {
      const imageUrl = process.env.PUBLIC_URL + image;
      return (
        <Carousel.Item key={index}>
          <img
            className="d-block"
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            style={{width:"85%"}}
          />
        </Carousel.Item>
      );
    })}
    </Carousel>
  );
}
