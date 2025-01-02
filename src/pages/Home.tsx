import Slideshow from "../components/Slideshow";

const Home = ({ images }: { images: string[] }) => {
  return (
    <div className="home-page">
            <div>
              <img
                className="logo-img"
                src="logo.png"
                alt="Tvorive kurzy Eva"
              />
            </div>
      <div className="text-container">
        <p className="welcome-text">
          Vítejte v ateliéru, kde se naučíte kreslit, malovat a rozvíjet své
          výtvarné dovednosti. Nabízím kurzy kresby, malby pro všechny úrovně 
          – od začátečníků po pokročilé.
          <br />
          <br />
          Pod vedením zkušené lektorky Evy získáte praktické znalosti, osvojíte
          si nové techniky a objevíte svůj vlastní umělecký styl. Každá lekce je
          přizpůsobena vašim potřebám a tempu.
          <br />
          <br />
          Přijďte zažít radost z učení i tvoření a vytvořit něco jedinečného.
          Těšíme se na vás!
        </p>
      </div>
    </div>
  );
};

export default Home;