import React, { useState } from "react";
import { useDrag } from "@use-gesture/react";

const images = [
  `${
    import.meta.env.BASE_URL
  }/469081208_122168847446249789_5586547136073549947_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469087949_122168847656249789_1229563101964536289_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469089958_122169044972249789_4051613390176550732_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469121031_122168847392249789_228136787837621275_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469124228_122168847416249789_529083761992409823_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469130843_122168847410249789_6458794863008195022_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469163912_122168847398249789_565327365816039447_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469176748_122168847386249789_6166407068095635099_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469180886_122168847374249789_6529274338169913467_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469181741_122168847578249789_1928072034286469386_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469182960_122169044864249789_1392439034712960945_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469208140_122168847464249789_5005832497987227905_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469222243_122168847404249789_7256726528005602055_n.jpg`,
  `${
    import.meta.env.BASE_URL
  }/469284172_122168847440249789_3063773670360851138_n.jpg`,
];

const Slideshow: React.FC = () => {
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
          <img key={index} src={src} alt={`Slide ${index}`} draggable="false" />
        ))}
      </div>
      {imageHover ? buttons : null}
    </div>
  );
};

export default Slideshow;
