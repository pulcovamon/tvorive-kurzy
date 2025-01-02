const AboutMe = () => {
  return (
      <div className="info-page">
          <div className="text-inside-container-info">
              <div className="lecturer">
                  <img className="avatar" src="avatar.jpg" alt="Profilová fotografie" />
                  <div className="lecturer-intro">
                      <h1 className="course-title">O mně</h1>
                      <img src="line.png" alt="Oddělovač" height={10} width="100%" />
                      <p className="intro-text">
                          Ahoj, jmenuji se Eva. Jsem ilustrátorka knih pro děti s desetiletou praxí ve výuce kresby,
                          malby, různých výtvarných technik a přípravě na talentové zkoušky.
                          <br/><br/>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default AboutMe;
