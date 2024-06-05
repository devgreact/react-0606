# Axios

- CRUD 테스트 (크러드)
  : Create (POST)
  : Read (GET)
  : Update (PUT / Fetch )
  : Delete (DELETE)
- Postman (웹 API 테스트시 일반적 사용)
- Swagger (웹 API 테스트시 별도로 BE에서 셋팅)
- Web Browser (웹 프로젝트 CORS 에러 발생 함)
  : package.json 에 "proxy":"주소" 를 작성해야 한다.

## 1. Axios 활용

- [axios](https://axios-http.com/kr/docs/intro)
- `npm install axios`

## 2. axios 폴더 추천

- /src/apis 폴더 생성
- /src/apis/config.js

```js
// 서버 주소
export const SERVER_URL = "http://localhost:5000";
```

- /src/apis/todos.js

```js
import axios from "axios";
// intercepter 전용 axios 생성
// 로그인 제외 및 일반적 api 요청등을 제외
// 인증이 필요한 경우에 활용하는 용도
const jwtAxios = axios.create();

// 요청(request) intercepter
// request 가 문제가 있든, 없든 실행될 내용 작성
const beforeReq = config => {
  console.log("요청전 전달 .... ", config);
  return config;
};

// fail Request 요청보내서 실패했을 때
const requestFail = err => {
  console.log("요청후 실패시 .... ", err);
  return Promise.reject(err);
};

// 응답(Response) 처리 코드
// Response 전처리
const beforeRes = async res => {
  console.log("Response 전처리 ....", res);
  return res;
};
// Response Fail 처리
const responseFail = err => {
  console.log("Response Fail Err", err);
  return Promise.reject(err);
};

// axios 인터셉터 적용
jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
```
