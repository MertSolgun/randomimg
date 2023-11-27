import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";

const courseMap = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
};

function Course({ courseName }) {
  return <img src={courseMap[courseName]}></img>;
}

export default Course;
