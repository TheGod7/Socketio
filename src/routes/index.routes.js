import { Router } from "express";
import { renderIndex } from "./../controller/index.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/home", renderIndex);

export default router;
