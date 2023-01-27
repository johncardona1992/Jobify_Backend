import express from "express";
import { login, register, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

const authRouter = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/updateUser").patch(authenticateUser,updateUser);

export default authRouter;
