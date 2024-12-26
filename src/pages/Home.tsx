import Slideshow from "../components/Slideshow";

const Home = () => {
    return <div className="home-page page">
        <Slideshow />
        <div className="text-container brush-effect">
            <div className="text-inside-container">
                <p className="welcome-text">
                "Ahoj! Díky, že jste zavítali na náš web. Tady najdete všechno, co potřebujete vědět o našich produktech a službách. Snažíme se, aby vše bylo co nejjednodušší a nejpříjemnější pro vás. Pokud máte nějaké dotazy nebo chcete vědět víc, stačí nám napsat – rádi vám pomůžeme!"
                </p>
            </div>
        </div>
    </div>
}


export default Home;