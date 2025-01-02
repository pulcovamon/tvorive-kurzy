import { useState } from "react";
import CoverImage from "../components/CoverImage";
import ImagePreview from "../components/ImagePreview";

const Gallery = ({ images }: { images: string[] }) => {
  const [image, setImage] = useState<number | null>(null);

  const onImageClick = (index: number) => {
    setImage(index);
  };

  const closeImage = () => {
    setImage(null);
  };

  const imageComponents = images.map((image, index) => {
    return (
      <button onClick={() => onImageClick(index)} className="image-button">
        <ImagePreview path={`slideshow/${image}`} key={index} />
      </button>
    );
  });

  return (
    <div className="gallery-page">
      {imageComponents}
      {image === null ? null : (
        <CoverImage image={`slideshow/${images[image]}`} closeImage={closeImage} />
      )}
    </div>
  );
};

export default Gallery;
