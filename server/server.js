const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  name: process.env.SESS_NAME,
  secret: process.env.SESS_SECRET,
  cookie: {
    maxAge: Number(process.env.SESS_AGE),
  },
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/the-budget",
  }),
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}.`));
});
