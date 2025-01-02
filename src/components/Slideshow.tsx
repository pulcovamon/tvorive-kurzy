import { useState } from "react";
import { useDrag } from "@use-gesture/react";

const Slideshow = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageHover, setImageHover] = useState(false);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const bind = useDrag(
    ({ movement: [dx], last }) => {
      if (last) {
        if (dx > 50) goToPrevSlide();
        if (dx < -50) goToNextSlide();
      }
    },
    { preventDefault: true, filterTaps: true }
  );

  const onMouseEnter = () => {
    setImageHover(true);
  };

  const onMouseLeave = () => {
    setImageHover(false);
  };

  const buttons = (
    <div className="controls">
      <button className="left-button" onClick={goToPrevSlide}>
        <i className="fa fa-chevron-left"></i>
      </button>
      <button className="right-button" onClick={goToNextSlide}>
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );

  return (
    <div
      className="slideshow"
      {...bind()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="slideshow-track"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={`slideshow/${src}`}
            alt={`Slide ${index}`}
            draggable="false"
          />
        ))}
      </div>
      {imageHover ? buttons : null}
    </div>
  );
};

export default Slideshow;
