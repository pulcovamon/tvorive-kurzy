import Slideshow from "../components/Slideshow";

const Gallery = () => {
    return <div className="gallery-page">
        <h1>Galerie</h1>
        <img src={`${import.meta.env.BASE_URL}/line.png`} height={10} width={"100%"} />
        <Slideshow />
    </div>
};

export default Gallery;