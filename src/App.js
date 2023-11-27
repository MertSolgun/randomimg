import "./App.css";
import Course from "./Course";
import { useState } from "react";

function getRandomCourse() {
  const courseArr = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6",
  ];
  return courseArr[Math.floor(Math.random() * courseArr.length)];
}

function App() {
  const [course, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...course, getRandomCourse()]);
  };

  const courseList = course.map((course, index) => {
    return <Course key={index} courseName={course}></Course>;
  });

  return (
    <div className="App">
      <button onClick={handleClick} className="kursBtn">
        Get img
      </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
