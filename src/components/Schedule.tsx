
interface Course {
    time: string;
    place: string;
    days: string[];
    price: number[];
  }
  

const Schedule = ({ courses }: {courses: Course[]}) => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="schedule-container">
      <h2>Course Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.time}</td>
              {daysOfWeek.map((day) => (
                <td key={day}>
                  {course.days.includes(day) ? course.place : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
