import express from "express";
import { authenticate } from "../middleware/auth";
import groupProductController from "../controllers/cms/groupProductController";

const router = express.Router();

// Jika ingin menggunakan middleware untuk semua routes
// router.use(authenticate);

router.get("/group-product/paging", authenticate, groupProductController.paging);
router.post("/group-product", authenticate, groupProductController.create);
router.put("/group-product/restore/:id", authenticate, groupProductController.restore);
router.get("/group-product/:id", authenticate, groupProductController.show);
router.put("/group-product/:id", authenticate, groupProductController.update);
router.delete("/group-product/:id", authenticate, groupProductController.destroy);

export default router;
