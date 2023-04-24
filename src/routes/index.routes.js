import { Router } from "express";
import { renderIndex,renderNews,renderNewsId } from "./../controller/index.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/home", renderIndex);
router.get("/news", renderNews);
router.get("/news/:id",renderNewsId)
export default router;
