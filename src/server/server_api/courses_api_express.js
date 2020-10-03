const express = require("express");
var coursesApp = express.Router();

const courses = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];

coursesApp.get("/", (req, res) => {
  // callback function which is route handler
  res.send("Hello world 2");
});

coursesApp.get("/api/course/:id", (req, res) => {
  const course = courses.filter((c) => c.id === parseInt(req.params.id));
  res.send(course);
});

coursesApp.get("/simple_array", (req, res) => {
  // callback function which is route handler
  res.send([1, 2, 3]);
});

coursesApp.get("/get_all_courses", (req, res) => {
  res.status(200).json({
    // It's a JSON with several objects
    // First one is courses
    courses: [1, 2, 3],
  });
});

// Try with http://localhost:5000/api/posts/2020/1?sortyBy=Acs
coursesApp.get("/api/posts/:year/:month", (req, res) => {
  // res.send(req.params);
  // res.send(req.query);
  res.status(200).json({
    params: req.params,
    query: req.query,
  });
});

module.exports = coursesApp;
