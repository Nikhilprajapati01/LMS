import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../../context/Appcontext";
import Loading from "../../components/students/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";

function Courcesinfo() {
  const { id } = useParams();
  const {
    allcources,
    calculateRating,
    totaltime,
    calculateCourseDuration,
    calculatenumberoflecture,
    currency,
  } = useContext(Appcontext);
  const [courcedata, setcourcedata] = useState([]);
  const [opensection, setopensection] = useState({});
  // console.log(allcources);

  const togglesecton = (i) =>
    setopensection((prev) => ({ ...prev, [i]: !prev[i] }));

  const fetchdata = async () => {
    const findcource = allcources.find((item) => item._id === id);
    setcourcedata(findcource);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(courcedata);

  return courcedata ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-100/70"></div>
        {/* left column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className=" text-3xl text-gray-800">{courcedata.courseTitle}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: courcedata?.courseDescription?.slice(0, 200) || "",
            }}
          />

          {/* revire and reating */}
          <div className=" flex items-center space-x-2 ">
            <p>{calculateRating(courcedata)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  className="w-3.5 h-3.5"
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courcedata))
                      ? assets.star
                      : assets.star_blank
                  }
                />
              ))}
            </div>
          </div>

          <p>
            course by<span className="text-blue-600 underline">GreatStack</span>
          </p>

          <div className="pt-8 text-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Course Structure</h2>

            <div className="space-y-4">
              {courcedata?.courseContent?.map((chapter, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <div
                    onClick={() => togglesecton(i)}
                    className="flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-5">
                      <img
                        src={assets.down_arrow_icon}
                        alt="arrow"
                        className={`w-4 h-4 transform transition-transform ${
                          opensection[i] ? "rotate-180" : ""
                        }`}
                      />
                      <p className="font-medium text-lg">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600">
                      {chapter.courseContent?.length || 0} lecture
                      {chapter.courseContent?.length === 1 ? "" : "s"} -{" "}
                      {totaltime?.(chapter) || "0 min"}
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300  ${
                      opensection[i] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className=" list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li
                          key={i}
                          className="flex items-start justify-between py-1"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={assets.play_icon}
                              alt=""
                              className="w-4 h-4 mt-1"
                            />
                            <p>{lecture.lectureTitle}</p>
                          </div>
                          {/* <div className="flex items-center justify-center w-full text-gray-800 text-xs md:text-default"> */}
                          <div className="flex gap-2">
                            {lecture.isPreviewFree && (
                              <p className="text-blue-500 cursor-pointer">
                                Preview
                              </p>
                            )}
                            <p>
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 100,
                                { units: ["h", "m"] }
                              )}
                            </p>
                          </div>
                          {/* </div> */}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold md:text-2xl">
              Course Description
            </h3>
            <p
              className="pt-3 "
              dangerouslySetInnerHTML={{
                __html: courcedata?.courseDescription || "",
              }}
            />
          </div>
        </div>

        {/* Right? */}
        <div className="max-w-md z-10 rounded-t shadow-2xl md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]">
          <img src={courcedata.courseThumbnail} alt="" />
          <div className="p-5">
            <div className="flex items-center gap-4 m-2">
              <img src={assets.time_left_clock_icon} alt="" />
              <p className="text-red-500">
                {" "}
                <span>5 days</span> letf at this price
              </p>
            </div>
            <div className="flex items-center gap-6 p-2 ">
              <h1 className="text-2xl">${currency(courcedata)}</h1>
              <p className="">{courcedata.coursePrice}</p>
              <p>{courcedata.discount}%off</p>
            </div>
            <div className="flex flex-row gap-12 items-center p-2 ">
              <div className="flex items-center  gap-3  ">
                <img src={assets.star} alt="" />
                <p>{calculateRating(courcedata)}</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={assets.time_clock_icon} alt="clockiicon" />
                <span>{calculateCourseDuration(courcedata)}</span>
              </div>
              <div className="flex items-center gap-4">
                <img src={assets.lesson_icon} alt="" />
                 <span>{calculatenumberoflecture(courcedata)} lession</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Courcesinfo;
