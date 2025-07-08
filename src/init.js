// import express module (서버를 만드는 프레임워크)
import "./db.js";
import "./models/Video.js";
import app from "./server.js";


// port 변수 지정
const PORT = 4000;

// handleListening : 서버가 시작될 때, 호출되는 콜백 함수
const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT}`);

// 서버를 시작하고, 4000번 포트를 통해 클라이언트 요청 수신 대기(listen)함
// 서버가 정상적으로 시작하면, handleListening 함수 호출
app.listen(4000, handleListening);