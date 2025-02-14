import { useState } from "react";
import CoverImage from "../components/CoverImage";
import ImagePreview from "../components/ImagePreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

const Gallery = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const onImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const imageComponents = images.map((image, index) => (
    <button onClick={() => onImageClick(index)} className="image-button" key={index}>
      <ImagePreview path={`slideshow/${image}`} key={index}/>
    </button>
  ));

  return (
    <div className="gallery-page">
      <h1>Galerie{" "}
        <FontAwesomeIcon icon={faImages} />
      </h1>
      <img src="line.png" height={10} width={"50%"} />
    <div className="gallery">
      {imageComponents}
      {currentIndex !== null && (
        <CoverImage
          images={images.map((image) => `slideshow/${image}`)}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          closeImage={closeImage}
        />
      )}
    </div>
    </div>
  );
};

export default Gallery;
