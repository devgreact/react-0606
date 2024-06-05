# Vanila JS

## 1. Syntax

- Syntax (구문) : 약속된 문법

- Interpreter (번역) : 갤럭시 AI/웹브라우저

- 프로그래밍은 요구사항을 분석하고, (개인별로 작성 : 의사코드 )
   Syntax 를 이용해서
   적절한 자료구조 + 적절한 함수를 활용하고,
   흐름을 제어하여 요구사항을 만족 시킨다.

## 2. Syntax 코드 위치

- inline 방식

```html
<div class="wrap" onclick="alert('안녕');"></div>
```

- 태그 방식

```html
<script>
  alert("반가워");
</script>
```

- 외부파일 방식

```html
<script src="./js/script.js">
  alert("반가워"); // 실행안됨
</script>
```
```js
 <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>회원가입</title>
    <link rel="stylesheet" href="css/style.css" />
    <script src="js/script.js"></script>
  </head>
```
## 3. script DOM 체크

```js
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  // DOM 조작 작업
});

window.addEventListener('load', function() {
  console.log('Page fully loaded');
  // 모든 리소스가 로드된 후 작업
});
```
## 4. 이벤트 핸들러 방식
```js
function handleClick() {
  alert('Button clicked!');
}
<button onclick="handleClick()">Click me</button>
```
```js
const button = document.getElementById('myButton');
button.onclick = function() {
  alert('Button clicked!');
};
```
```js
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});
```

## 5. 선택자
```js
// DOM 찾아서 변수로 레퍼런스 하기
const tags = document.querySelector(".클래스명");
// DOM 을 이용해서 선택한 곳에 적용된 css 클래스 목록 추가
tags.classList.add("클래스명");
// DOM 을 이용해서 선택한 곳에 적용된 css 클래스 목록 제거
tags.classList.remove("클래스명");
// DOM 을 이용해서 선택한 곳에 적용된 css 클래스 목록 추가 / 제거
tags.classList.toggle("클래스명");
// DOM 을 이용해서 선택한 곳에 적용된 css 클래스 목록 포함여부
tags.classList.contain("클래스명");
```
## 6. 응용
### 6.1. sample
- 필수 요소 값(required)
```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>회원가입</title>
    <link rel="stylesheet" href="css/style.css" />
    <script src="js/script.js"></script>
  </head>
  <body>
    <h1>입력양식(Form)</h1>
    <h2>회원가입</h2>
    <div class="join-wrap">
      <form action="/member/join.php" method="get" enctype="multipart/form-data" id="joinform">
        <div class="form-group">
          <label for="name">이름</label>
          <input type="text" id="name" name="name" class="name" required/>
        </div>
        <div class="form-group">
          <label for="email">이메일</label>
          <input type="email" id="email" name="email" class="email" required/>
        </div>
        <div class="form-group">
          <label for="pw">비밀번호</label>
          <input type="password" id="pw" name="pw" class="pw" required/>
        </div>
        <div class="form-group">
          <label for="pwcheck">비밀번호확인</label>
          <input type="password" id="pwcheck" name="pwcheck" class="pwcheck" required/>
        </div>
        <div class="form-group">
          <label for="phone">전화번호</label>
          <input type="tel" id="phone" name="phone" class="phone" required/>
        </div>
        <div class="form-group">
          <label for="address">주소</label>
          <input type="text" id="address" name="address" class="address" required/>
        </div>
        <div class="form-group">
          <label for="address2">상세주소</label>
          <input type="text" id="address2" name="address2" class="address2" />
        </div>
        <div class="form-group">
          <label for="birthday">생년월일</label>
          <input type="date" id="birthday" name="birthday" class="birthday" required/>
        </div>
        <div class="form-group">
          <label for="gender">성별</label>
          <select id="gender" name="gender" class="gender" required>
            <option value="">선택하세요.</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </select>
        </div>
        <div class="form-group">
            <label for="hobbies">취미</label>
            <div class="form-list">
                <div>
                    <input type="checkbox" id="hobby1" name="hobbies" value="reading" />
                    <label for="hobby1">독서</label>
                </div>
                <div>
                    <input type="checkbox" id="hobby2" name="hobbies" value="traveling" />
                    <label for="hobby2">여행</label>
                </div>
                <div>
                    <input type="checkbox" id="hobby3" name="hobbies" value="cooking" />
                    <label for="hobby3">요리</label>
                </div>
                <div>
                    <input type="checkbox" id="hobby4" name="hobbies" value="sports" />
                    <label for="hobby4">운동</label>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label>학생 여부</label>
            <div class="form-list">
                <div>
                    <input type="radio" id="student_yes" name="student" value="yes" required/>
                    <label for="student_yes">예</label>
                </div>
                <div>
                    <input type="radio" id="student_no" name="student" value="no" required />
                    <label for="student_no">아니오</label>
                </div>
            </div>
        </div>
        <div class="form-group">
          <label for="profile_image">프로필 이미지</label>
          <input type="file" id="profile_image" name="profile_image" class="profile_image" />
        </div>
        <div class="form-group">
          <label for="memo">메모 남기기</label>
          <textarea id="memo" name="memo" class="memo" rows="4" cols="50"></textarea>
        </div>
        <div class="form-group">
          <input type="submit" value="확인" />
          <button type="submit">submit 확인</button>
          <button type="button">button type 확인</button>
          <button>그냥 버튼 확인</button>
          <button type="reset" class="clearbt">재작성</button>
        </div>
      </form>
    </div>
  </body>
</html>

```
```js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('joinform');

    form.addEventListener('submit', function(event) {
      const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
      let allFieldsFilled = true;
      requiredFields.forEach(function(field) {
        if (!field.value) {
          allFieldsFilled = false;
          console.log(`${field.name} 필드가 비어 있습니다.`);
          field.style.border = '2px solid red'; // 경고를 위해 테두리 빨간색으로 변경
        } else {
          field.style.border = ''; // 테두리 초기화
          console.log(`${field.name} 필드의 값: ${field.value}`);
        }
      });
  
      if (!allFieldsFilled) {
        alert('모든 필수 필드를 채워주세요.');
        event.preventDefault(); // 폼 제출 방지
        return false;
      }

  
      const pw = document.getElementById('pw').value;
      const pwcheck = document.getElementById('pwcheck').value;
      
      if (pw !== pwcheck) {
        alert('비밀번호가 일치하지 않습니다.');
        event.preventDefault(); // 폼 제출 방지
        return false;
      }

      // JSON 객체 생성
      const formData = new FormData(form);
      const jsonData = {};
      formData.forEach((value, key) => {
        if (jsonData[key]) {
          if (Array.isArray(jsonData[key])) {
            jsonData[key].push(value);
          } else {
            jsonData[key] = [jsonData[key], value];
          }
        } else {
          jsonData[key] = value;
        }
      });
      
      console.log(JSON.stringify(jsonData));

      event.preventDefault(); // 폼 제출 방지
    });
  
    document.querySelector('.clearbt').addEventListener('click', function() {
      form.reset();
      const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
      requiredFields.forEach(function(field) {
        field.style.border = ''; // 테두리 초기화
      });
    });
  });
```