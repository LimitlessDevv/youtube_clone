import express from "express";

import {watch, getEdit, postEdit} from "../controllers/videoController"

const videoRouter = express.Router()

// :id : url 경로의 일부를 변수처럼 받아들이겠다는 의미
// (\d+) : 정규 표현식으로, 숫자만 허용 하겠다는 의미
// \d는 숫자 하나를 의미 \d+는 숫자 하나 이상을 의미, Javascript에서는 \를 escape 해야 해서, \\d+라고 쓴다
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit)

export default videoRouter;