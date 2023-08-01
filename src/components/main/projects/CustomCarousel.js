import { Carousel } from "react-bootstrap";

const CustomCarousel = ({ images }) => {
  return (
    <Carousel
      className="carousel"
      slide
      fade
      controls
      indicators={false}
      prevLabel={null}
      nextLabel={null}
    >
      {images.map(({ src }) => (
        <Carousel.Item className="carousel-item">
          <img src={src} alt="alt" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
