import app from "./app.js";
import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config({path:"./config/config.env"});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET
});

// const processPayment = async (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Payment processed successfully"
//   });
// };

// app.post("/payment/process", processPayment);


//// app.route("/payment/process").post(processPayment);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});