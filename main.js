
const mongoose = require("mongoose");
const Subscriber = require("./models/Subscriber");
const Recipe = require("./models/recipe");
const express = require("express");
const app = express();
const errorController = require("./controllers/errorController");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");
const subscriberController = require("./controllers/subscriberController");
const usersController = require("./controllers/usersController");
const router = express.Router();

mongoose.connect("mongodb://localhost:27017/recipe_db", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.once("open", () => {
    console.log("successfully connected to MongoDB using mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use("/", router);
app.use(express.json());
app.use(homeController.logRequestPaths);

router.get("/users/new", usersController.new);
router.get("/name", homeController.respondWithName);
router.get("/items/:vegetable", homeController.sendReqParam);
router.get("/contact", subscriberController.getSubscriptionPage);
router.get("/users", usersController.index, usersController.indexView);
router.get("/subscribers", subscriberController.index, subscriberController.indexView);
router.post("/users/new", usersController.create, usersController.redirectView);

router.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});

router.use(errorController.logErrors);
router.use(errorController.respondNoResourceFound);
router.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});