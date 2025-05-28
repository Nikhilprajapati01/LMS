const Course = require('../models/courses-schema');

const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find({}).select('-lecture'); 

    res.status(200).json({
      success: true,
      message: "Data sent successfully",
      courses, 
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const getallcoursebyid = async () =>{

}

module.exports = {
    getAllCourse,
    getallcoursebyid
}