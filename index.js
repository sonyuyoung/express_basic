import express from "express";

const app = express();

// 서버 포트번호 8000 으로 지정
// localhost:8000
app.listen(8000),
  () => {
    console.log("8000 서버 호출");
  };
