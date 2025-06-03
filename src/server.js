// import express module (서버를 만드는 프레임워크)
import express from "express";
// Express에서 가장 많이 쓰이는 HTTP 요청 로깅 미들웨어
// 서버에 요청이 들어올 때마다 로그가 자동으로 터미널에 출력됨
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

// express application 객체 생성
const app = express();

// port 변수 지정
const PORT = 4000;

const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// handleListening : 서버가 시작될 때, 호출되는 콜백 함수
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// 서버를 시작하고, 4000번 포트를 통해 클라이언트 요청 수신 대기(listen)함
// 서버가 정상적으로 시작하면, handleListening 함수 호출
app.listen(4000, handleListening);
