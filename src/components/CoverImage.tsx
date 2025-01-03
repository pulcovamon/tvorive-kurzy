import { faAnglesLeft, faAnglesRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useDrag } from "@use-gesture/react";

const CoverImage = ({
  images,
  currentIndex,
  setCurrentIndex,
  closeImage,
}: {
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  closeImage: Function;
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextSlide = () => {
    if (currentIndex != images.length - 1) {
      setIsTransitioning(true);
    }
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    if (currentIndex != 0) {
      setIsTransitioning(true);
    }
    const prevIndex = (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goToNextSlide();
      } else if (event.key === "ArrowLeft") {
        goToPrevSlide();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const bind = useDrag(
    ({ movement: [dx], last }) => {
      if (last) {
        if (dx > 50) goToPrevSlide();
        if (dx < -50) goToNextSlide();
      }
    },
    { preventDefault: true, filterTaps: true }
  );

  const transformValue = `translateX(-${currentIndex * 100}%)`;

  return (
    <div className="cover-image-container" {...bind()}>
      <button className="close-image-button" onClick={() => closeImage()}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <button className="left-button" onClick={goToPrevSlide}>
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
      <div
        className="cover-image-track"
        style={{
          transform: transformValue,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="cover-image"
            alt={`cover-image-${index}`}
          />
        ))}
      </div>
      <button className="right-button" onClick={goToNextSlide}>
        <FontAwesomeIcon icon={faAnglesRight} />
      </button>
    </div>
  );
};

export default CoverImage;
