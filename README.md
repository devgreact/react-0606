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
          <input type="text" name="join-name" class="name-css"/>
        </div>
        <div class="form-group">
          <label for="email">이메일</label>
          <input type="email" name="join-email" class="email-css"/>
        </div>
        <div class="form-group">
          <button type="submit" class="bt-submit">확인</button>
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