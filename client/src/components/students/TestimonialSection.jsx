import React, { useContext } from "react";
import Testimonilacard from "./Testimonilacard";
import { Appcontext } from "../../context/Appcontext";

function TestimonialSection() {

    const {testimonail} = useContext(Appcontext)
    // console.log(testimonail);
    
  return (
    <div className="mt-26">
      <h3 className="text-3xl ">Testimonials</h3>
      <p className="text-xl text-gray-500 mt-3.5">
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br /> platform has made a difference in their lives.
      </p>
        <div className="flex-col flex gap-11 md:flex-row md:gap-3.5 mt-15 mx-10">
      { testimonail.map((testimonaildata, i)=>(<Testimonilacard key={i} testimonaildata={testimonaildata}/>))}
        </div>
    </div>
  );
}

export default TestimonialSection;
