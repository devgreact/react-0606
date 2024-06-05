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
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
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
$(document).ready(function() {
  
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
$(document).ready(function() {
  const loadJson = () => {
    $.ajax({
      url: './api/user.json',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        userInfo(data); // JSON 데이터를 화면에 표시하는 함수 호출
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('There has been a problem with your fetch operation:', textStatus, errorThrown);
      }
    });
  };

  const joinName = $(".join-name");
  const joinEmail = $(".join-email");

  const userInfo = ({username, email}) => {
    joinName.val(username);
    joinEmail.val(email);
  };

  loadJson();
});
```