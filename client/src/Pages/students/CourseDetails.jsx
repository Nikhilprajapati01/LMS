import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/students/SearchBar";
import { Appcontext } from "../../context/Appcontext";
import Card from "../../components/students/Card";
import { assets } from "../../assets/assets";

function CourseDetails() {
  const { allcources } = useContext(Appcontext);
  const navigate = useNavigate();
  const [ismapdata, setismapdata] = useState([]);
  const { input } = useParams();
console.log(allcources);

  useEffect(() => {
    
    // console.log(allcources);
    console.log(input);
    if (allcources && allcources.length > 0) {
      const tempdata = allcources.slice();

      input
        ? setismapdata(
            tempdata.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setismapdata(tempdata);
    }
  }, [input, allcources]);

  return (
    <div>
      <div className="flex flex-col ml-10 md:flex-row justify-between text-center">
        <div>
          <h1 className="text-2xl">Course List</h1>
          <p>
            <span
              className="text-blue-600 px-3.5 cursor-pointer mt-2"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            /<span>course list</span>
          </p>
        </div>
        <SearchBar data={input} />
      </div>

      {
        input && <div  className="inline-flex border-1 border-gray-700 gap-3 ml-12 px-2 rounded-xl cursor-pointer">
          <p>{input}</p>
          <img src={assets.cross_icon} alt="cross-icon" onClick={() => navigate('/course-List')}/> 
          </div>
      }

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 m-10">
        {ismapdata.map((course, index) => (
          <Card key={index} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;
