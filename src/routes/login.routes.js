import { Router } from "express";
import {
  LoginRoutes,
  PostLoginRoutes,
  Logout,
} from "./../controller/login.controller.js";

const router = Router();

router.get("/users/login", LoginRoutes);

router.post("/users/login", PostLoginRoutes);

router.get("/users/logout", Logout);

export default router;
