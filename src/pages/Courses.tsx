

const Courses = () => {
    const courses = [
        {
            title: "Kurz kresby ✏️",
            description: "Kurz kresby pro prijimaci zkousky na SS.",
            time: "Pondeli 18:00 - 20:00",
            price: 3000
        },
        {
            title: "Krouzek malovani ️",
            description: "Vytvarny krouzek malovani na platno.",
            time: "Streda 17:00 - 18:00",
            price: 2000  
        },
        {
            title: "Kresba a malba pro dospele ️",
            description: "Kurz vytvarnych technik pro dospele a starsi 15 let.",
            time: "Streda 18:00 - 20:00",
            price: 3500 
        },
        {
            title: "Vytvarka pro deti ",
            description: "Vytvarny krouzek kresleni, malovani a tvoreni.",
            time: "Utery 15:00 - 16:30",
            price: 2500 
        },
        {
            title: "Keramika pro zacatecniky ",
            description: "Uvod do prace s hlinou a modelovani.",
            time: "Ctvrtek 16:00 - 18:00",
            price: 2800
        },
        {
            title: "Akvarel pro pokrocile ️",
            description: "Techniky akvarelove malby a krajinomalba.",
            time: "Patek 17:30 - 19:30",
            price: 3200
        },
        {
            title: "Ilustrace pro deti i dospele ✍️",
            description: "Kurz kresleni postav a tvorby ilustraci.",
            time: "Sobota 10:00 - 12:00",
            price: 3800
        },
        {
            title: "Kaligrafie pro zacinajici ️",
            description: "Uvod do krasopisu a prace s perem.",
            time: "Pondeli 16:00 - 17:30",
            price: 2200
        },
        {
          title: "Enkaustika - malovani horkym voskem ",
          description: "Netradicni technika malovani horkym voskem.",
          time: "Nedele 14:00 - 16:00",
          price: 4000
        }
    ];
    const coursesElements = courses.map((course) => {
        return <div className="text-container-courses brush-effect">
        <div className="text-inside-container-courses">
            <b className="course-title">{course.title}</b> <br />
            <img src="line.png" height={10} width={"100%"} />
            <i>{course.description}</i> <br /><br />
            <b>Kdy:</b> {course.time} <br />
            <b>Za kolik:</b> {course.price} kc <br /><br />
            <button className="course-detail">Detail</button>
        </div>
    </div>
    } )
    return <div className="courses-page page">
        {coursesElements}
    </div>
}


export default Courses;