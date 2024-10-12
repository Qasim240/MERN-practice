/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef, no-unused-vars

const express = require("express");
// eslint-disable-next-line no-unused-vars, no-undef
const jwt = require("jsonwebtoken");
// eslint-disable-next-line no-undef
const cors = require("cors");
const app = express();
app.use(express.json());
// eslint-disable-next-line no-undef
const Joi = require("joi");
app.use(cors());

const logger = require("./Middlewares/logger");
const authMiddleware = require("./Middlewares/auth");

// custome middleware
app.use(logger);
app.use(authMiddleware);

const videos = [
  {
    id: 1,
    name: "Inception",
    genres: ["Sci-Fi", "Action", "Thriller"],
  },
  {
    id: 2,
    name: "The Godfather",
    genres: ["Crime", "Drama"],
  },
  {
    id: 3,
    name: "The Dark Knight",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: 4,
    name: "Pulp Fiction",
    genres: ["Crime", "Drama"],
  },
  {
    id: 5,
    name: "The Matrix",
    genres: ["Sci-Fi", "Action"],
  },
];

app.get("/", (req, res) => {
  res.send(videos);
});

app.get("/api/videos/:id", (req, res) => {
  const FoundVidoe = videos.find(
    (video) => video.id === parseInt(req.params.id)
  );

  if (!FoundVidoe)
    return res.status(404).send("Video With the given ID not Found");
  res.send(FoundVidoe);
});

app.get("/api/videos/genre/:genre", (req, res) => {
  const genreParam = req.params.genre.toLowerCase();

  const filteredVideos = videos.filter((video) =>
    video.genres.some((genre) => genre.toLocaleLowerCase() === genreParam)
  );

  if (filteredVideos.length === 0)
    return res.status(404).send("No videos found for the given genre.");

  res.send(filteredVideos);
});

app.get("/api/videos/name/:name", (req, res) => {
  const moviename = req.params.name.toLocaleLowerCase();
  const vidoeName = videos.filter(
    (video) => video.name.toLocaleLowerCase() === moviename
  );

  if (vidoeName.length === 0) return res.status(404).send("Name Not Found!");

  res.send(vidoeName);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course.body, schema);
}

// PORT
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get("/", (req, res) => {
//   res.send("Hello wordl!");
// });

// app.get("/api/courses", (req, res) => {
//   res.send(courses);
// });

// app.get("/api/courses/:id", (req, res) => {
//   const foundCourse = courses.find(
//     (course) => course.id === parseInt(req.params.id)
//   );
//   if (!foundCourse) return res.status(404).send("not found");
//   res.send(foundCourse);
// });

// app.post("/api/courses", (req, res) => {
//   const { error } = validateCourse(req.body);

//   if (error) {
//     res.status(400).send(error.details[0].message);
//   }

//   const course = {
//     id: courses.length + 1,
//     name: req.body.name,
//   };
//   courses.push(course);
//   res.send(course);
// });

// // update the course
// app.put("/api/courses/:id", (req, res) => {
//   // 1:look
//   const foundCourse = courses.find(
//     (course) => course.id === parseInt(req.params.id)
//   );

//   if (!foundCourse) return res.status(404).send("not found");

//   //   2:validation

//   const { error } = validateCourse(req.body);

//   if (error) {
//     foundCourse.status(400).send(error.details[0].message);
//     return;
//   }

//   //   3:update
//   foundCourse.name = req.body.name;
//   res.send(foundCourse);
// });

// app.delete("/api/courses/:id", (req, res) => {
//   const foundCourse = courses.find(
//     (course) => course.id === parseInt(req.params.id)
//   );

//   if  (!foundCourse) return res.status(404).send("not found");

//   const index = courses.indexOf(foundCourse);
//   courses.splice(index, 1);
//   res.send(foundCourse)

// });
