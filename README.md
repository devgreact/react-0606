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

### 4. 리액트 이벤트 핸들러

#### 4.1. 기본

- click, change

#### 4.2. JS 태그버전

- 먼저 내용을 정리하고 아래 내용을 참조합니다.
  : 반드시 소문자 on 에 소문자 이벤트
  : <태그 on이벤트명="함수명()">내용</태그>
  : 소문자 onclick="함수명()"
  : 소문자 onchange="함수명()"
  : 저는 안좋아합니다. 이유는 태그가 복잡해짐.

- 태그에 직접 이벤트 연결하기
  : 반드시 소문자로 on + 이벤트 로 작성한다.
  : 예) onclick

  ```html
  <button onclick="alert('안녕')">클릭</button>
  ```

  : 태그에 JS 를 실행하는 경우 호출(call)을 꼭 해주자.

  ```html
  <script>
    function 함수() {
      alert("안녕");
    }
  </script>
  : 아래의 예는 실행 안됨.
  <button onclick="함수">클릭</button>

  : 아래의 예는 실행됨.
  <button onclick="함수()">클릭</button>
  ```

#### 4.3. JS 태그 메소드 버전

- 먼저 내용을 정리하고 참조하자.
  : 태그를 먼저 찾고 이벤트를 연결한다.
  : 태그.소문자 on이벤트명 연결한다.
  : on이벤트명 함수 연결시 실행(Call)하면 안되는 주의사항
  : 여러개의 함수를 등록할 수 없다. (사용안하게 된 계기)

  ```js
  const btClass = document.querySelector(".bt");
  const btId = document.querySelector("#bt");
  const btTag = document.querySelector("ul li a");
  btClass.onclick = 함수명;
  btId.onclick = 함수명;
  btTag.onclick = 함수명;
  ```

: 객체.메소드
: 아래의 코드는 순서상 html 태그를 못찾아서 에러 발생

```html
<script>
  function 함수() {
    alert("안녕");
  }

  const bt = document.querySelector("#bt");
  // 객체.메소드
  // 아래 코드는 1번 call 즉, 호출되면서 실행됨
  // bt.onclick = 함수();
  // 아래처럼 진행한다. () 를 제거해야 한다.
  bt.onclick = 함수;
</script>

<button id="bt">클릭</button>
```

```html
<button id="bt">클릭</button>

<script>
  function 함수() {
    alert("안녕");
  }
  function 함수2() {
    alert("반가워");
  }

  const bt = document.querySelector("#bt");
  // 객체.메소드
  bt.onclick = 함수;
  // 기능은 1개 밖에 연결이 안되는 단점이 있다.
  bt.onclick = 함수2;
</script>
```

#### 4.4. JS 태그 이벤트 핸들러 등록 버전

- 아래의 내용을 참조하고 코드 보자.
  : 여러개의 함수를 등록할 수 있다.
  : 주의사항은 on 이라는 글자가 제거되어야 함.

```html
<button id="bt">클릭</button>

<script>
  function 함수() {
    alert("안녕");
  }
  function 함수2() {
    alert("반가워");
  }

  const bt = document.querySelector("#bt");
  // 객체 이벤트 핸들러 등록 방식
  // 이벤트 명만 적어야 함. 그래서 오류
  bt.addEventListener("onclick", 함수);
  bt.addEventListener("onclick", 함수2);
  //아래는 이벤트 명을 정확하게 작성하였으므로 정상
  bt.addEventListener("click", 함수);
  bt.addEventListener("click", 함수2);
</script>
```

#### 4.5 React 버전

- 아래의 내용을 먼저 정리합니다.
  : 리액트는 JSX 버전이 기본입니다.
  : 이벤트는 소문자가 아닙니다.
  : 이벤트는 on소문자에 대문자시작하는 이벤트명입니다.
  : 이벤트에 연결될 함수는 2가지 방식으로 작성이 가능하다.
  : 함수명() 로 () 를 붙이면 함수 Call 즉, 실행입니다.
  : 함수명만 적어주어야 합니다.
  : 매개변수 전달되는 함수라면 화살표 함수로 감싸주세요.

  ```jsx
  // 함수가 실행되므로 오류입니다.
  <JSX onClick={함수명()}></JSX>
  <JSX onClick={함수명}></JSX>
  // 매개변수로 값을 전달하고 싶다면
  <JSX onClick={() => { 함수명(매개변수) } }></JSX>

  <JSX onChange={함수명}></JSX>
  ```

  : 예)

  ```jsx
  <button
    onClick={() => {
      getTodos("와아아앙");
    }}
  >
    읽기
  </button>
  <button
    onClick={() => {
      getTodos("ㅋㅋㅋ");
    }}
  >
    하나만 읽기
  </button>
  <button
    onClick={() => {
      getTodos("ㅎㅎㅎㅎ");
    }}
  >
    쓰기
  </button>
  ```

## 5. sample

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

```js
document.addEventListener("DOMContentLoaded", function () {
  // 실행
});

window.addEventListener("load", function () {
  // 실행
});
```

```js
import { useEffect } from "react";
import "../css/style.css";

const Join = () => {
  useEffect(() => {
    // 출력시 실행할 JS 들
    // 컴포넌트 제거시 실행할 함수
    return () => {

    }
  }, []);
  return (.......)
};

export default Join;
```

- /html/api 폴더 복사후 경로 지정

```js
import { useEffect } from "react";
import "../css/style.css";
const Join = () => {
  useEffect(() => {
    // user.json 파일을 불러오는 비동기 화살표 함수
    const loadJson = async () => {
      try {
        //const response = await fetch("./api/user.json");
        const response = await fetch("/api/user.json");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
        userInfo(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      }
    };
    loadJson();

    const joinName = document.querySelector(".join-name");
    const joinEmail = document.querySelector(".join-email");

    // 아래를 추천
    const userInfo = ({ username, email }) => {
      joinName.value = username;
      joinEmail.value = email;
    };
    return () => {};
  }, []);

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

### 3.4. useRef 를 이용하여 html 태그 요소 참조

```js
import { useEffect, useRef } from "react";
import "../css/style.css";
const Join = () => {
  const joinName = useRef(null);
  const joinEmail = useRef(null);
  useEffect(() => {
    // const joinName = document.querySelector(".join-name");
    // const joinEmail = document.querySelector(".join-email");

    // 아래를 추천
    const userInfo = ({ username, email }) => {
      joinName.current.value = username;
      joinEmail.current.value = email;
    };

    // user.json 파일을 불러오는 비동기 화살표 함수
    const loadJson = async () => {
      try {
        const response = await fetch("/api/user.json");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        // console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
        userInfo(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      }
    };
    loadJson();
    return () => {};
  }, []);

  return (
    <div className="join-wrap">
      <form className="join-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="join-name"
            className="join-name"
            ref={joinName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="join-email"
            className="join-email"
            ref={joinEmail}
          />
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

### 3.5. useState 를 활용한 데이터 출력

```js
import { useEffect, useRef } from "react";
import "../css/style.css";
const Join = () => {
  // const joinName = useRef(null);
  // const joinEmail = useRef(null);

  let regName = "";
  let regEmail = "";

  useEffect(() => {
    // const joinName = document.querySelector(".join-name");
    // const joinEmail = document.querySelector(".join-email");

    // 아래를 추천
    const userInfo = ({ username, email }) => {
      // joinName.current.value = username;
      // joinEmail.current.value = email;
      regName = username;
      regEmail = email;
      console.log(regName);
      console.log(regEmail);
    };

    // user.json 파일을 불러오는 비동기 화살표 함수
    const loadJson = async () => {
      try {
        const response = await fetch("/api/user.json");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        // console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
        userInfo(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      }
    };
    loadJson();
    return () => {};
  }, []);

  return (
    <div className="join-wrap">
      <form className="join-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="join-name"
            className="join-name"
            // ref={joinName}
            value={regName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="join-email"
            className="join-email"
            // ref={joinEmail}
            value={regEmail}
          />
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

```js
import { useEffect, useRef, useState } from "react";
import "../css/style.css";
const Join = () => {
  // const joinName = useRef(null);
  // const joinEmail = useRef(null);
  console.log("리랜더링이 필요하다.");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");

  useEffect(() => {
    // const joinName = document.querySelector(".join-name");
    // const joinEmail = document.querySelector(".join-email");

    // 아래를 추천
    const userInfo = ({ username, email }) => {
      // joinName.current.value = username;
      // joinEmail.current.value = email;
      setRegName(username);
      setRegEmail(email);
      console.log(regName);
      console.log(regEmail);
    };

    // user.json 파일을 불러오는 비동기 화살표 함수
    const loadJson = async () => {
      try {
        const response = await fetch("/api/user.json");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        // console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
        userInfo(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      }
    };
    loadJson();
    return () => {};
  }, []);

  return (
    <div className="join-wrap">
      <form className="join-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="join-name"
            className="join-name"
            // ref={joinName}
            value={regName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="join-email"
            className="join-email"
            // ref={joinEmail}
            value={regEmail}
          />
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

```js
import { useEffect, useRef, useState } from "react";
import "../css/style.css";
const Join = () => {
  // const joinName = useRef(null);
  // const joinEmail = useRef(null);
  console.log("리랜더링이 필요하다.");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");

  useEffect(() => {
    // const joinName = document.querySelector(".join-name");
    // const joinEmail = document.querySelector(".join-email");

    // 아래를 추천
    const userInfo = ({ username, email }) => {
      // joinName.current.value = username;
      // joinEmail.current.value = email;
      setRegName(username);
      setRegEmail(email);
      console.log(regName);
      console.log(regEmail);
    };

    // user.json 파일을 불러오는 비동기 화살표 함수
    const loadJson = async () => {
      try {
        const response = await fetch("/api/user.json");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        // console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
        userInfo(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      }
    };
    loadJson();
    return () => {};
  }, []);

  return (
    <div className="join-wrap">
      <form className="join-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="join-name"
            className="join-name"
            // ref={joinName}
            value={regName}
            onChange={e => {
              setRegName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="join-email"
            className="join-email"
            // ref={joinEmail}
            value={regEmail}
            onChange={e => {
              setRegEmail(e.target.value);
            }}
          />
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

### 3.6. axios 를 활용한 데이터 출력

```js
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../css/style.css";
const Join = () => {
  // const joinName = useRef(null);
  // const joinEmail = useRef(null);
  console.log("리랜더링이 필요하다.");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");

  useEffect(() => {
    // const joinName = document.querySelector(".join-name");
    // const joinEmail = document.querySelector(".join-email");

    // 아래를 추천
    const userInfo = ({ username, email }) => {
      // joinName.current.value = username;
      // joinEmail.current.value = email;
      setRegName(username);
      setRegEmail(email);
      console.log(regName);
      console.log(regEmail);
    };

    // user.json 파일을 불러오는 비동기 화살표 함수
    const loadJson = async () => {
      try {
        const response = await axios.get("/api/user.json");
        const data = response.data;
        // console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
        userInfo(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      }
    };
    loadJson();
    return () => {};
  }, []);

  return (
    <div className="join-wrap">
      <form className="join-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="join-name"
            className="join-name"
            // ref={joinName}
            value={regName}
            onChange={e => {
              setRegName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="join-email"
            className="join-email"
            // ref={joinEmail}
            value={regEmail}
            onChange={e => {
              setRegEmail(e.target.value);
            }}
          />
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

```js
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../css/style.css";
const Join = () => {
  // const joinName = useRef(null);
  // const joinEmail = useRef(null);
  console.log("리랜더링이 필요하다.");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");

  useEffect(() => {
    // const joinName = document.querySelector(".join-name");
    // const joinEmail = document.querySelector(".join-email");

    // 아래를 추천
    const userInfo = ({ username, email }) => {
      // joinName.current.value = username;
      // joinEmail.current.value = email;
      setRegName(username);
      setRegEmail(email);
      console.log(regName);
      console.log(regEmail);
    };

    // user.json 파일을 불러오는 비동기 화살표 함수
    const loadJson = async () => {
      try {
        const response = await axios.get("/api/user.json");
        const data = response.data;
        // console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
        userInfo(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      }
    };
    loadJson();
    return () => {};
  }, []);

  const handleSubmit = e => {
    e.preventDefault(); // 기본 제출 이벤트 막기
    // 폼 데이터를 처리하는 로직
    console.log("이름:", regName);
    console.log("이메일:", regEmail);
    alert(`이름: ${regName}\n이메일: ${regEmail}`);
  };

  return (
    <div className="join-wrap">
      <form className="join-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="join-name"
            className="join-name"
            // ref={joinName}
            value={regName}
            onChange={e => {
              setRegName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="join-email"
            className="join-email"
            // ref={joinEmail}
            value={regEmail}
            onChange={e => {
              setRegEmail(e.target.value);
            }}
          />
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
