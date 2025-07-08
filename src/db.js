// Node.js와 MongoDB 간의 연결 및 데이터 모델링을 도와줄 mongoose 라이브러리 호출
import mongoose from "mongoose";

// 연결할 MongoDB 서버 정보를 입력
// slash 뒤에는 연결할 DB 이름을 적어야 함
mongoose.connect("mongodb://127.0.0.1:27017/youtube");

// mongoose.connection을 통해, 실제 DB 연결 객체를 가져옴
const db = mongoose.connection;

const handleOpen=() => console.log("✅ Connected to DB")
const handleError = (error) => console.log("DB Error", error);

// 에러 발생 시, handleError 함수 호출
db.on("error", handleError);

// once : 한 번만 실행되는 이벤트 리스너 -> DB 연결 성공 시, handleOpen 함수 호출
db.once("open", handleOpen)