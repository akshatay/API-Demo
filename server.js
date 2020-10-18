let express = require("express");

let mongoose = require("mongoose");

let bodyParser = require("body-parser");

let router = express.Router();

let app = express();
var env = require("./config/env/development");

mongoose.connect(env.dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = env.port;
app.listen(port, function () {
  console.log(`App listing on port ${port} !`);
});
let userRoutes = require("./controllers/UserController");
app.use("/User", router);

userRoutes(router);
