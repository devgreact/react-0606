# React Sample

- `npm install`
- `npm run start`

## 1. 기본구성의 이해

### 1.1. public 폴더

- 리소스로 번들링 및 트랜스파일링에서 제외

### 1.2. src 폴더

- 번들링 및 트랜스파일링 대상

### 1.3. React 파일의 대표적 종류

- js
- jsx
- ts
- tsx

### 1.4. 기본 폴더 구조

- /src/pages/
  : Router 경로에 따라서 보여줄 페이지
- /src/components/
  : 페이지에 배치되어질 기능들
- /src/css/
  : 페이지에 적용할 css 파일들
- /src/apis/
  : API 연동
- /src/utils/
  : js 일반 기능들
- /src/images/
  : css 및 html 에 활용될 이미지들
- /src/config/
  : 환경설정 파일들

## 2. 기본만 이해해도 업무 가능

- jsx
- useState
- useEffect
- ureRef
- react-router-dom
- axios

## 3. 컴포넌트의 이해

- html 형태를 출력
- css 적용
- js 코드

### 3.1. jsx를 활용한 컴포넌트 작성

- html 로 생각하면 되요.

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ts 에서는 데이터 종류를 구별한다.
// as 는 강제로 타입지정
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// js 버전
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
  </>,
);
```

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ts 에서는 데이터 종류를 구별한다.
// as 는 강제로 타입지정
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// js 버전
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<h1>안녕</h1>);
```

```js
root.render(
  <div>
    <h1>안녕</h1>
  </div>,
);
```

```js
root.render(
  <div>
    <header>상단</header>
    <main>
      <h1>메인</h1>
    </main>
    <footer>하단</footer>
  </div>,
);
```

```js
const Header = () => {
  // js 자리
  return <header>상단</header>;
};
const Main = () => {
  // js 자리
  return <h1>메인</h1>;
};
const Footer = () => {
  // js 자리
  return <footer>하단</footer>;
};
root.render(
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>,
);
```

```js
const Header = () => {
  // js 자리
  return <header>상단</header>;
};
const Main = () => {
  // js 자리
  return <h1>메인</h1>;
};
const Footer = () => {
  // js 자리
  return <footer>하단</footer>;
};
const App = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};
root.render(<App></App>);
```

- /src/pages/Index.js
  : Router 경로에 따라서 보여줄 페이지

```js
import React from "react";
const Header = () => {
  // js 자리
  return <header>상단</header>;
};
const Main = () => {
  // js 자리
  return <h1>메인</h1>;
};
const Footer = () => {
  // js 자리
  return <footer>하단</footer>;
};
const Index = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default Index;
```

- /src/App.js

```js
import "./App.css";
import Index from "./pages/Index";

function App() {
  return <Index></Index>;
}

export default App;
```

- /src/index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import App from "./App";

// ts 에서는 데이터 종류를 구별한다.
// as 는 강제로 타입지정
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// js 버전
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App></App>);
```

### 3.2. sample

- /src/pages/Join.js

```js
const Join = () => {
  return (
    <div class="join-wrap">
      <form class="join-form">
        <div class="form-group">
          <label for="name">이름</label>
          <input type="text" name="join-name" class="join-name" />
        </div>
        <div class="form-group">
          <label for="email">이메일</label>
          <input type="email" name="join-email" class="join-email" />
        </div>
        <div class="form-group">
          <button type="submit" class="bt-submit">
            수정
          </button>
          <button type="reset" class="bt-cancel">
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default Join;
```

- /src/index.js

```js
import Join from "./pages/Join";
...
root.render(<Join></Join>);
```

- css 문제 해결
  : class 를 className 로 변경
  : for 를 htmlFor 로 변경

```js
const Join = () => {
  return (
    <div className="join-wrap">
      <form className="join-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input type="text" name="join-name" className="join-name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input type="email" name="join-email" className="join-email" />
        </div>
        <div className="form-group">
          <button type="submit" className="bt-submit">
            수정
          </button>
          <button type="reset" className="bt-cancel">
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default Join;
```

### 3.2. css 적용

- /src/css/style.css

```js
import "../css/style.css";
const Join = () => {
  ............
};

export default Join;

```

### 3.3. js 적용
