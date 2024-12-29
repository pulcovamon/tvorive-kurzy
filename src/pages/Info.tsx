const Info = () => {
  const course = {
    title: "Kurz kresby ✏️",
    description: "Kurz kresby pro prijimaci zkousky na SS.",
    time: "Pondeli 18:00 - 20:00",
    price: 3000,
  };

  const lecturer = {
    name: "Anna Kreslířová",
    nickname: "Anička",
    intro:
      "Jsem absolventkou AVU a kresba a malba je můj život. Ráda předávám své zkušenosti a pomáhám studentům objevovat krásu klasických technik.",
    avatar: "https://i.pravatar.cc/300?img=5",
  };

  return (
    <div className="info-page">
      <div>
        <h1>O mě</h1>
        <div className="text-container-courses brush-effect-info">
          <div className="text-inside-container-info">
            <div className="lecturer">
              <div>
                <img className="avatar" src={lecturer.avatar} />
              </div>
              <div className="lecturer-intro">
                <b className="course-title">
                  {lecturer.name} - {lecturer.nickname}
                </b>{" "}
                <br />
                <img src="line.png" height={10} width={"100%"} />
                <i>{lecturer.intro}</i> <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
          <h1><b>O kurzu kresby a malby 🖌️✏️</b></h1>
            <img src="line.png" height={10} width={"100%"} />
            <i>{course.description}</i> <br />
            <br />
            <b>Kdy:</b> {course.time} <br />
            <b>Za kolik:</b> {course.price} kc <br />
            <br />
      </div>
    </div>
  );
};

export default Info;
