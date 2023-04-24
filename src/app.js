import express from "express";
import { join } from "path";
import { getDirname } from "./utils/dirname.js";
import expressLayouts from "express-ejs-layouts";
import morgan from "morgan";
import session from "express-session";
import flash from "connect-flash";
import passport from "passport";
import method from "method-override";
import MongoStore from "connect-mongo";

//Dotenv

import { PORT, SESSION_SECRET } from "./configs/env.js";

//Routes Import

import LoginRoutes from "./routes/login.routes.js";
import IndexRoutes from "./routes/index.routes.js";
import AdminRoutes from "./routes/admin.routes.js";

const __dirname = getDirname(import.meta.url); // __dirname definition

//Initialize

const app = express();
import "./configs/passport.js";

//Settings

app.set("port", PORT);
app.use(expressLayouts);
app.set("layout", "./layouts/main.ejs");
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

//Middleware

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(method("_method"));
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Global Variables
app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  res.locals.done = req.flash("done");
  // console.log(res.locals);
  next();
});

//Routes
app.use(LoginRoutes);
app.use(IndexRoutes);
app.use(AdminRoutes);

//Static Files
app.use(express.static(join(__dirname, "public")));

export default app;
