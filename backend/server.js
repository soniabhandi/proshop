import express from "express";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables early
import connectDB from "./config/db.js";
import productRoutes from "../backend/routes/productRoute.js";
import { errorHandler, notFound } from "./middleware/errormiddleware.js";
// Assuming you are using ES modules

const port = process.env.PORT || 5000;

connectDB(); //connext to mongoDB

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
