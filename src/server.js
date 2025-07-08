import express from "express";
// morgan : Express에서 가장 많이 쓰이는 HTTP 요청 로깅 미들웨어
// 서버에 요청이 들어올 때마다 로그가 자동으로 터미널에 출력됨
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

import "./models/Video.js"

// express application 객체 생성
const app = express();

const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
// expres.urlencoded : HTML form에서 전송된 데이터를 req.body에 넣어주는 parser 미들웨어
app.use(express.urlencoded({extended: true}));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;