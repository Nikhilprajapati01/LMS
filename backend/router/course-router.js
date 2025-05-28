const express = require('express');
const { getAllCourse, getallcoursebyid } = require('../controllers/course-conntroller');
// const { model } = require('mongoose');

const router = express.Router();

router.get("/", getAllCourse)
router.get("/:id", getallcoursebyid)

module.exports = router;