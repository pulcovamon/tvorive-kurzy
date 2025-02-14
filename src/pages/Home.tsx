import { useEffect, useState } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const totalSections = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSections);
    }, 7500);

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
            transform: `translateX(-${index * 100/5}%)`,
          }}
        >
          <div className="section">
            <p className="welcome-text">
              Vítejte v ateliéru, kde se naučíte kreslit, malovat a rozvíjet
              své výtvarné dovednosti.
            </p>
          </div>
          <div className="section">
            <p className="welcome-text">
            Rádi byste se naučili něco nového, připravujete se na přijímačky
            nebo chcete jen relaxovat se štětcem v ruce?
            </p>
          </div>
          <div className="section">
            <p className="welcome-text">
              Nebojte se vzít do ruky tužku a štětec. Nejlepší je začít hned.
              Kreslit se naučí každý, kdo chce!
            </p>
          </div>
          <div className="section">
            <p className="welcome-text">
            Tvořivé kurzy jsou pro
              začátečníky i pokročilé, děti i dospělé,
              prostě všechny, kdo rádi tvoří.
            </p>
          </div>
          <div className="section">
            <p className="welcome-text">
              Přijďte zažít radost z malování, objevit svůj umělecký styl
              a vytvořit něco jedinečného.
              Těším se na vás!
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
