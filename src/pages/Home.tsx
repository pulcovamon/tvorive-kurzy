import { useEffect, useState } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const totalSections = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSections);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (dotIndex: number) => {
    setIndex(dotIndex);
  };

  return (
    <div className="home-page">
      <div>
        <img className="logo-img" src="logo.png" alt="Tvorive kurzy Eva" />
      </div>
      <div className="text-container">
        <div
          className="text-sections"
          style={{
            transform: `translateX(-${index * 100/3}%)`,
          }}
        >
          <div className="section">
            <p className="welcome-text">
              Vítejte v ateliéru, kde se naučíte kreslit, malovat a rozvíjet
              své výtvarné dovednosti. Nabízím kurzy kresby, malby pro všechny
              úrovně – od začátečníků po pokročilé.
            </p>
          </div>
          <div className="section">
            <p className="welcome-text">
              Pod vedením zkušené lektorky Evy získáte praktické znalosti,
              osvojíte si nové techniky a objevíte svůj vlastní umělecký styl.
            </p>
          </div>
          <div className="section">
            <p className="welcome-text">
              Přijďte zažít radost z učení i tvoření a vytvořit něco jedinečného.
              Těšíme se na vás!
            </p>
          </div>
        </div>
      </div>
      <div className="dot-container">
        {Array.from({ length: totalSections }).map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`dot ${dotIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
