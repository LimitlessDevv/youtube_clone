import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
// :id : url 경로의 일부를 변수처럼 받아들이겠다는 의미
userRouter.get("/:id", see);

export default userRouter;