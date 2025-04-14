// import express module (서버를 만드는 프레임워크)
import express from "express";

// express application 객체 생성
const app = express();

// port 변수 지정
const PORT = 4000;

// req : request 객체 : 클라가 보낸 요청 정보 (ex. url, header, body) 정보를 담고 있음
// res : response 객체 : 서버가 클라에게 보낼 응답을 제어하는 객체
const handleHome = (req, res) => {
  return res.end("Hi"); // 문자열을 HTTP body에 담아서 브라우저로 전송하고, 응답을 종료
};

// app.get 메소드 : 클라이언트가 특정 경로로 GET 요청을 보낼 때, 요청에 대한 처리를 정의
// app.get(path, callback)
app.get("/", handleHome);

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

app.get("/login", handleLogin);

// handleListening : 서버가 시작될 때, 호출되는 콜백 함수
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// 서버를 시작하고, 4000번 포트를 통해 클라이언트 요청 수신 대기(listen)함
// 서버가 정상적으로 시작하면, handleListening 함수 호출
app.listen(4000, handleListening);
