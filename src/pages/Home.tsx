import Slideshow from "../components/Slideshow";

const Home = ({ images }: { images: string[] }) => {
    return <div className="home-page page">
        <Slideshow images={images} />
        <div className="text-container">
            <div className="text-inside-container">
                <p className="welcome-text">
                Vítejte v našem ateliéru, kde se rodí umění! U nás najdete inspiraci, pohodu a prostor pro rozvoj vaší kreativity. Nabízíme kurzy kresby, malby, keramiky, akvarelu, ilustrace, kaligrafie a mnoho dalšího. Ať už jste začátečník nebo pokročilý, u nás se budete cítit jako doma. Naši zkušení lektoři vás provedou světem výtvarných technik a pomohou vám objevit váš vlastní umělecký styl. Přijďte se k nám podívat a zažijte radost z tvoření!
                </p>
            </div>
        </div>
    </div>
}


export default Home;