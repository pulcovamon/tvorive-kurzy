import { useState } from "react";
import CoverImage from "../components/CoverImage";
import ImagePreview from "../components/ImagePreview";

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
  );
};

export default Gallery;
