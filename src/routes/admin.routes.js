import {
  controller,
  NewsControl,
  DeleteNewsControl,
} from "../controller/admin.controller.js";
import IsLogin from "./../helpers/auth.js";

import { Router } from "express";

const router = new Router();

router.get("/controller", IsLogin, controller);

router.get("/controller/news", IsLogin, NewsControl);

router.delete("/controller/news", IsLogin, NewsControl);



export default router;
