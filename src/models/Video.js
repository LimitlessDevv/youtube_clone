import mongoose from "mongoose";

// vidoeSchema라는 새로운 스키마 정의
const videoSchema = new mongoose.Schema({
	title: String,
	description: String,
	createAt: Date,
	hashtags: [{ type: String }],
	meta: {
		views: Number,
		rating: Number,
	},
});

// 위에서 정의한 videoSchema로 Vidoe라는 이름의 모델 생성
const Video = mongoose.model("Video", videoSchema);

// Video 모델을 모듈 외부에서 사용할 수 있도록 export
export default Video;