console.log("Starting server");

// Cannot use import so I'm using require with export module
const coursesRouter = require("./server_api/courses_api_express");
const pizzasRouter = require("./server_api/pizzas_api_express");

const express = require("express");
const app = express();

// Can be dev which is concise: GET /api/all_pizzas 304 2.676 ms - -
// Or combined which is elaborated: ::ffff:127.0.0.1 - - [26/Sep/2020:21:17:35 +0000] "GET /api/all_pizzas HTTP/1.1"
const morgan = require("morgan");
app.use(morgan("dev"));

// Needed for parsing JSON from request
// It's middleware - when we call pizzaApp we use this middleware
app.use(express.json());

// Middleware for COS
var cors = require("cors");
app.use(cors());

// Use http://localhost:9000/pizzas/ will return Hello pizza
app.use("/pizzas", pizzasRouter);
app.use("/courses", coursesRouter);

// You can set process environment PORT using eith
// export PORT=5000
// or in Windows set PORT=5000
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Listning on port", port);
  // To create a template literal you need to use backticks next to the 1 key and not quote or single quotes
  let browserLink = `http://localhost:${port}/`;
  console.log("Use this link in the broweser " + browserLink);
});
