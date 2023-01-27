import "express-async-errors";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
import morgan from "morgan";
import authenticateUser from "./middleware/auth.js";

//dotenv configuration
dotenv.config();

const app = express();

//middleware

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

//give access to the frontend
app.use(cors());
//make json data available on all controllers.
app.use(express.json());

//get request
app.get("/", (req, res) => {
  res.send({ msg: "Welcome!" });
});
//call routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs",authenticateUser, jobsRouter);
//handle unknown urls
app.use(notFoundMiddleware);
//handle errors
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
