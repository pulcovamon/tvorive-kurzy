

const Info = () => {
    const lecturers = [
        {
            name: "Anna Kreslířová",
            nickname: "Anička",
            intro: "Jsem absolventkou AVU a kresba a malba je můj život. Ráda předávám své zkušenosti a pomáhám studentům objevovat krásu klasických technik.",
            avatar: "https://i.pravatar.cc/300?img=5" // Zástupný obrázek
        },
        {
            name: "Petr Malíř",
            nickname: "Péťa",
            intro: "Maluji od dětství a baví mě experimentovat s různými technikami, od akvarelu po olej. Vedu kurzy s nadšením a snažím se studenty inspirovat k vlastní tvorbě.",
            avatar: "https://i.pravatar.cc/300?img=8" // Zástupný obrázek
        },
        {
            name: "Eva Pastelková",
            nickname: "Evča",
            intro: "Specializuji se na pastel a suchou jehlu. Mám ráda detailní práci a ráda vás provedu světem jemných linií a stínování.",
            avatar: "https://i.pravatar.cc/300?img=9" // Zástupný obrázek
        },
        {
            name: "Jan Uhel",
            nickname: "Honza",
            intro: "Uhel je můj nejoblíbenější materiál. Učím, jak s ním zacházet a jak dosáhnout dramatických efektů ve vaší kresbě.",
            avatar: "https://i.pravatar.cc/300?img=12" // Zástupný obrázek
        },
        {
            name: "Tereza Akvarelová",
            nickname: "Terka",
            intro: "Akvarel je pro mě poezie barev. Ráda vás naučím, jak s ním pracovat a jak zachytit lehkost a průsvitnost vody.",
            avatar: "https://i.pravatar.cc/300?img=24" // Zástupný obrázek
        }
    ];
    const lecturersElements = lecturers.map((lecturer) => {
        return <div className="text-container-courses brush-effect">
        <div className="text-inside-container-info">
            <div className="lecturer">
                <div>
                    <img className="avatar" src={lecturer.avatar} />
                </div>
                <div className="lecturer-intro">
                    <b className="course-title">{lecturer.name} - {lecturer.nickname}</b> <br />
                    <img src="line.png" height={10} width={"100%"} />
                    <i>{lecturer.intro}</i> <br /><br />
                </div>
            </div>
        </div>
    </div>
    });
    return <div className="info-page">
        <h1>Naši lektoři</h1>
        {lecturersElements}
    </div>
}

export default Info;