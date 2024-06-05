# Sample

## 1. html
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
    <div class="join-wrap">
      <form class="join-form">
        <div class="form-group">
          <label for="name">이름</label>
          <input type="text" name="join-name" class="join-name"/>
        </div>
        <div class="form-group">
          <label for="email">이메일</label>
          <input type="email" name="join-email" class="join-email"/>
        </div>
        <div class="form-group">
          <button type="submit" class="bt-submit">수정</button>
          <button type="reset" class="bt-cancel">취소</button>
        </div>
      </form>
    </div>
  </body>
</html>


```
## 2. js
```js
document.addEventListener('DOMContentLoaded', function() {
  
});
```
## 3. json
```json
{
    "pk": 1,
    "username": "#",
    "email": "test@test.net"
}
```
## 4. js
```js
document.addEventListener('DOMContentLoaded', function() {
   fetch('./api/user.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
});
```
```js
document.addEventListener('DOMContentLoaded', function() {
   fetch('./api/user.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
});
```
```js
document.addEventListener('DOMContentLoaded', function() {
  // user.json 파일을 불러오는 함수
  function loadJson(){
    fetch('./api/user.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
  }

  loadJson();
  
});
```
```js
document.addEventListener('DOMContentLoaded', function() {
  // user.json 파일을 불러오는 비동기 함수
  async function loadJson() {
    try {
        const response = await fetch('./api/user.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
  }

  loadJson();
});
```
```js
document.addEventListener('DOMContentLoaded', () => {
  // user.json 파일을 불러오는 비동기 화살표 함수
  const loadJson = async () => {
    try {
        const response = await fetch('./api/user.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data); // JSON 데이터를 콘솔에 출력
        // JSON 데이터를 화면에 표시하는 함수 호출
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
  }

  loadJson();
});
```
```js
document.addEventListener('DOMContentLoaded', () => {
  // user.json 파일을 불러오는 비동기 화살표 함수
  const loadJson = async () => {
    try {
        const response = await fetch('./api/user.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data); // JSON 데이터를 콘솔에 출력

        // JSON 데이터를 화면에 표시하는 함수 호출        
        const joinName = document.querySelector(".join-name");
        const joinEmail = document.querySelector(".join-email");
        joinName.value = data.username;
        joinEmail.value = data.email;

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
  }
  loadJson();
});
```
```js
document.addEventListener('DOMContentLoaded', () => {
  // user.json 파일을 불러오는 비동기 화살표 함수
  const loadJson = async () => {
    try {
        const response = await fetch('./api/user.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data); // JSON 데이터를 콘솔에 출력

        // JSON 데이터를 화면에 표시하는 함수 호출   

        // const joinName = document.querySelector(".join-name");
        // const joinEmail = document.querySelector(".join-email");
        // joinName.value = data.username;
        // joinEmail.value = data.email;

        userInfo(data)

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
  }
  loadJson();
  
  const joinName = document.querySelector(".join-name");
  const joinEmail = document.querySelector(".join-email");
  
  // 아래로 하셔도 됩니다만, 
  /*
  const userInfo = (data) => {
    joinName.value = data.username;
    joinEmail.value = data.useremail;
  }
  */

  // 아래를 추천
  const userInfo = ( {username, email} ) => {
    joinName.value = username;
    joinEmail.value = email;
  }

});
```

- 참고 (XHR) 샘플
```js
document.addEventListener('DOMContentLoaded', () => {
  // user.json 파일을 불러오는 함수
  const loadJson = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './api/user.json', true);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);
          userInfo(data); // JSON 데이터를 화면에 표시하는 함수 호출
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      } else {
        console.error('Network response was not ok ' + xhr.statusText);
      }
    };

    xhr.onerror = () => {
      console.error('There has been a problem with your fetch operation:', xhr.statusText);
    };

    xhr.send();
  };

  loadJson();
  
  const joinName = document.querySelector(".join-name");
  const joinEmail = document.querySelector(".join-email");
  
  const userInfo = ({username, email}) => {
    joinName.value = username;
    joinEmail.value = email;
  };
});
```