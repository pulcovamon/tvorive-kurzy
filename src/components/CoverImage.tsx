import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoverImage = ({
  image,
  closeImage,
}: {
  image: string;
  closeImage: Function;
}) => {
  return (
    <div className="cover-image-container">
    <button className="close-image-button" onClick={() => closeImage()}>
        <FontAwesomeIcon icon={faXmark} />
    </button>
      <img src={image} className="cover-image" />
    </div>
  );
};

export default CoverImage;
