const Info = () => {
  return (
    <div className="info-page">
      <div className="text-container-courses">
        <div className="text-inside-container-info">
          <h1><b>Kurz kresby a malby</b></h1>
            <img src="line.png" height={10} width={"100%"} />
            <i>
              Pro ty, co si chteji zkusit neco noveho i jako priprava na talentove zkousky.
            </i> <br />
            <br />
            <div className="brush-effect-info">
            <b>Cena:</b> 3000 kč za <i>n</i> lekcí <br />
            <b>Kde:</b> Praha <br />
            <b>kdy:</b> Každé liché úterý 18:00-20:00 <br />
            <b>Kapacita:</b> 5-8 studentu <br />
            <br />
            <b>Ukazkova hodina zdarma 19. 9. 2024</b>
            </div>
            <br />
            <ul className="topics">
              <li>Zaklady kresby podle predlohy</li>
              <li>Mereni</li>
              <li>Stinovani</li>
              <li>Perspektiva</li>
              <li>Ruzne techniky kresby a malby</li>
              <li>Malba v pleneru</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
