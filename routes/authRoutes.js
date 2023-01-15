import express from "express";
import { login, register, updateUser } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/updateUser").patch(updateUser);

export default authRouter;
