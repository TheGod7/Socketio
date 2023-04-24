import {
  controller,
  NewsControl,
  DeleteNewsControl,
  AddNewsControl,
} from "../controller/admin.controller.js";
import IsLogin from "./../helpers/auth.js";

import { Router } from "express";

const router = new Router();

router.get("/controller", IsLogin, controller);

router.get("/controller/news", IsLogin, NewsControl);

router.delete("/news/delete/:id", IsLogin, DeleteNewsControl);

router.post("/news/add", AddNewsControl);
export default router;
