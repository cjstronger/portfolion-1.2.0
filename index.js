const express = require("express");
const projectsRouter = require("./routes/projectsRouter");
const homeRouter = require("./routes/homeRouter");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/projects", projectsRouter);

app.listen(process.env.port, () => {
  console.log(`Listening on port ${process.env.port}`);
});

module.exports = app;
