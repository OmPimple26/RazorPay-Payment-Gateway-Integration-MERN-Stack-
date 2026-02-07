import express from 'express';
import payment from './Routes/productRoutes.js';
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies (Static Middleware)
app.use(express.urlencoded({extended:true})); // Middleware to parse URL-encoded bodies (Static Middleware)
app.use("/api/v1", payment);  // Middleware to use payment routes
export default app;