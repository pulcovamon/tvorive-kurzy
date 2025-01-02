const AboutMe = () => {
    return <div className="info-page">
        <div className="text-inside-container-info">
          <div className="lecturer">
            <div className="">
              <img className="avatar" src="avatar.jpg" />
            </div>
            <div className="lecturer-intro">
              <b className="course-title">
              <h1>O mě</h1>
              </b>
              <img src="line.png" height={10} width={"100%"} />
              <i className="intro-text">
                Ahoj, jmenuju se Eva, jsem ilustratorka knih pro deti s desetiletou praxi vyuky kresby,
                malby a ruznych vytvarnych technik a praipravy na talentova zkousky.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </i> <br />
              <br />
            </div>
          </div>
        </div>
    </div>
};

export default AboutMe;