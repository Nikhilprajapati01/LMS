import {createContext, useState, useEffect} from "react"

export const Appcontext = createContext()
import { dummyCourses, dummyTestimonial } from "../assets/assets"
import {useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'

export const Appcontextprovider = (props)=>{
    // const navigate = useNavigate();
    const [allcources , setallcources] = useState([]);
    const [iseducator , setiseducator] = useState(true);
    const [testimonail , settestimonail ] = useState([]);




    // testimonial data

      const testimonialdata = async ()=>{
        settestimonail(dummyTestimonial);
    }

     useEffect (() => {
      testimonialdata();
    
    }, [])

    // dumycource fetch 
    const fetchcources = async ()=>{
        setallcources(dummyCourses);
    }


    // calclulate ratings 
 const calculateRating = (course) => {
//   console.log(course);

  if (!course.courseRatings || course.courseRatings.length === 0) {
    return 0;
  }

  let totalRating = 0;

  course.courseRatings.forEach((rating) => {
    totalRating += rating.rating;
  });

  return totalRating / course.courseRatings.length;
};


// calculatetime

const totaltime = (chapter) => {
  let time = 0;

  chapter?.chapterContent?.forEach((item) => {
    time += item.lectureDuration || 0; // fallback to 0 if undefined
  });

  return humanizeDuration(time * 60 * 1000, {
    units: ['h', 'm'],
    round: true
  });
};



// CALCULATE COURCE DURATION 

const calculateCourseDuration = (course) => {
  let time = 0;

  course?.courseContent?.forEach((chapter) => {
    chapter?.chapterContent?.forEach((lecture) => {
      time += lecture.lectureDuration || 0;
    });
  });

  return humanizeDuration(time * 60 * 1000, {
    units: ['h', 'm'],
    round: true,
  });
};


// CALCULATE NUMBER OF LETURES
const calculatenumberoflecture = (course) => {
  let totalLecture = 0;

  course?.courseContent?.forEach((chapter) => {
    if (Array.isArray(chapter?.chapterContent)) {
      totalLecture += chapter.chapterContent.length;
    }
  });

  return totalLecture;
};


// price calculation
 const currency = (courcedata) =>{
  const originalPrice = courcedata.coursePrice
const discountPercent = courcedata.discount;

const discountedPrice = originalPrice - (originalPrice * discountPercent / 100);
   return discountedPrice.toFixed(2);
 }

// console.log(totaltime())

     useEffect (() => {
      fetchcources();
    
    }, [])
    

const value={
 allcources, iseducator, setiseducator,testimonail, calculateRating,totaltime,calculatenumberoflecture,calculateCourseDuration,currency
}

return (
    <Appcontext.Provider value={value}>
        {props.children}
    </Appcontext.Provider>
)
} 