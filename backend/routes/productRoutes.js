import express from "express";
import { getKey, processPayment, paymentVerification } from "../controller/productController.js";
const router = express.Router();

router.route("/payment/process").post(processPayment);
router.route("/getkey").get(getKey);
router.route("/paymentVerification").post(paymentVerification);

export default router;