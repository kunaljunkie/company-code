const expres = require("express");
const app = expres();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./src/routes/routing");
const bodyParser = require("body-parser");;
const helmet = require("helmet");

app.get("/", async (req, res) => {
  // console.log(req);
  res.json({ message: "nothing to show" });
});
dotenv.config();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use((req, res, next) => {
  console.log("requested url is: ", req.url, " and the method is ", req.method);
  next();
});
app.use("/images", expres.static("images"));
app.use("/video", expres.static("video"));
app.use("/", routes);

module.exports = app;
