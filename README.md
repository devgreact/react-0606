# 작업순서 기준

## 1. 웹서비스 개발 순서(프론트)

- 퍼블리싱부터 진행
- 리액트 진행(필요시)
- 타입스크립트 진행(필요시)
- Next.js 진행(필요시)

## 2. 퍼블리싱 해보기

- 생성된 폴더 최상위를 `Root` 라고 부른다.
- 코드상으로는 `/` 로 표현합니다.
- 퍼블리싱은 `/public` 폴더에 `www` 폴더 생성후 진행
- 퍼블리싱 기본 폴더 생성 진행
  : images 폴더 생성(.png, .jpg, .gif, .svg )
  : css 폴더 생성 (.css 파일들을 보관)
  : js 폴더 생성 (.js 파일들을 보관)
  : assets 폴더 생성(문서, 동영상, 디자인원본(.psd)..)
  : index.html 파일 생성

## 3. index.html 기본구성

- `! 누르면서 Tab 키를 선택`하면 html 기본형이 제공된다. (스냅샷기능)
- lang="en" 은 "ko" 로 수정한다.
- 최소 title 은 변경한다.
- 미리보기 (html 파일에서 마우스 오른쪽 Open Width Live Server 선택)

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>회원가입</title>
  </head>
  <body></body>
</html>
```

## 4. html 문서 작업 순서

- 디자인 레이아웃 보기
- https://chromewebstore.google.com/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl
  : 디자인 파일은 /public/www/assets 폴더에 보관
- html 의 태그의 활용 이전에 꼭 체크 해 보자.
  : https://caniuse.com/ 의심가면 확인해 보자.
- 디자인을 살펴보고 영역을 구분하는 작업 진행
  : 레이아웃을 위한 영역 구분 (div 태그)

  ```html
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>회원가입</title>
    </head>
    <body>
      <!-- 전체 레이아웃 -->
      <div class="wrap">
        <!-- 상단 레이아웃 -->
        <div class="header"></div>
        <!-- 메인 레이아웃 -->
        <div class="main"></div>
        <!-- 하단 레이아웃 -->
        <div class="footer"></div>
      </div>
    </body>
  </html>
  ```

  : 내용별 배치 영역(시멘틱 태그 활용 추천)
  : 태그가 내용을 설명하는 역할을 시멘틱

  ```html
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>회원가입</title>
    </head>
    <body>
      <!-- 전체 레이아웃 -->
      <div class="wrap">
        <!-- 상단 레이아웃 -->
        <header class="header"></header>
        <!-- 메인 레이아웃 -->
        <main class="main"></main>
        <!-- 하단 레이아웃 -->
        <footer class="footer"></footer>
      </div>
    </body>
  </html>
  ```

- 참고사항
  : camelCase(카멜케이스)
  : PscalCase(파스칼케이스)
  : snake_case(스네이크케이스)

- div 구조를 이용해서 뼈대를 잘만드는 것이 실력
  : <div class="wrap">내용</div> 무조건 기본

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>회원가입</title>
  </head>
  <body>
    <!-- 전체 레이아웃 -->
    <div class="wrap">
      <!-- 상단 레이아웃 -->
      <header class="header">
        <!-- 상단 로고 -->
        <div class="header-logo"></div>
        <!-- 상단 메뉴 -->
        <div class="header-navi"></div>
      </header>
      <!-- 메인 레이아웃 -->
      <main class="main">
        <!-- 메인 상단 -->
        <div class="main-top">
          <!-- 슬라이드 -->
          <div class="main-top-slide"></div>
          <!-- 타이틀 배너 -->
          <div class="main-top-banner"></div>
        </div>
        <!-- 메인 하단 -->
        <div class="main-bottom">
          <!-- 메인 리스트 영역 -->
          <div class="main-bottom-list">
            <!-- 새글 리스트 -->
            <div class="main-bottom-list-news"></div>
            <!-- 배너 -->
            <div class="main-bottom-list-banner"></div>
            <!-- 추천글 리스트 -->
            <div class="main-bottom-list-picks"></div>
          </div>
          <!-- 메인 카드 영역 -->
          <div class="main-bottom-cards">
            <!-- 카드 슬라이드 -->
            <div class="main-bottom-cards-slide"></div>
          </div>
        </div>
      </main>
      <!-- 하단 레이아웃 -->
      <footer class="footer">
        <!-- 하단 사이트 정보 및 사이트 맵 -->
        <div class="footer-top">
          <!-- 회사소개 -->
          <div class="footer-top-info"></div>
          <!-- 사이트맵 -->
          <div class="footer-top-sitemap"></div>
        </div>
        <!-- 하단 카피라이터 및 SNS 링크 -->
        <div class="footer-bottom">
          <!-- 카피라이터 -->
          <div class="footer-bottom-copyright"></div>
          <!-- SNS 목록 -->
          <div class="footer-bottom-sns"></div>
        </div>
      </footer>
    </div>
  </body>
</html>
```
# CSS 기초

- html 은 화면에 보여줄 데이터(글자) 입니다.
- css 는 화면에 보여줄 데이터를 보기 좋게 꾸며주는 역할을 합니다.

## 1. css 작성법 (4가지)

### 1.1. 인라인 방식 : html 직접 적용

- <태그 style="이름 : 값">
- 가독성이 떨어져요.
- css 코드를 재활용하는 것이 불가능.

```html
<body style="background: hotpink"></body>
```

### 1.2. `<style>` 태그 활용하기

- 가독성은 좋아요.
- css 코드 재활용은 어렵습니다.
- 선택자 { css 적용 }
- css Selector { css 적용}

```html
<style>
  body {
    background: hotpink;
  }
</style>
```

### 1.3. 외부파일로 css 분리하기

- 가독성 좋아요.
- 재활용 좋아요.
- 일반적으로 활용해요. (무조건 추천)
- 예) css/common.css (확장자는 무조건 파일명.css)

```html
<link rel="stylesheet" href="./css/common.css" />
```

### 1.4. css 에 css 파일 불러들여서 관리하기

- 대표적으로 글꼴을 @import 해서 사용

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
body {
  background: green;
}
```

- 참고사항
  : 프로그래밍 언어는 문장의 끝을 표현한다.
  : `;` 으로

## 2. css 초기화 하기

### 2.1. 선택을 하자. (코딩 컨벤션)

- https://necolas.github.io/normalize.css/8.0.1/normalize.css
- https://meyerweb.com/eric/tools/css/reset/reset.css
- 우리가 만든 common.css 도 링크하자.
  : 꼭 기억하자. `box-sizing: border-box`
  : 필요시 기억하자. `outline-style: none;`
- 정말 중요한 것은 css 코드 배치 순서
  : html 태그 > .class > #id의 순서로 적용됨.
  : 만약 같은 종류라면 작성 순서 기준
  : 가장 우선시 한다면 `!important`

```css
@charset "utf-8";
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  /* 옵션 */
  /* outline-style: none; */
}
html {
  font-size: 16px;
}
body {
  color: #000000;
}
.wrap {
  width: 1170px;
}
```

## 3. css 로 전체 레이아웃에 적용해 보기

### 3.1. 멘토 및 실무자는 반드시 반응형을 봅니다.

- 화면(디바이스) 너비 관례상 기준
  : 기본 화면(1280px 이상)을 먼저 작업한다.

  ```css
  .wrap {
    width: 95%;
    max-width: 1280px;
    margin: 0 auto;
  }
  ```

  : 랜탑 화면(1024px) 화면의 레이아웃을 작업한다.

  ```css
  @media screen and (max-width: 1024px) {
  }
  ```

  : 타블렛 화면(960px) 화면의 레이아웃을 작업한다.

  ```css
  @media screen and (max-width: 960px) {
  }
  ```

  : 고해상도 모바일 화면(760px) 화면의 레이아웃을 작업한다.

  ```css
  @media screen and (max-width: 760px) {
  }
  ```

  : 중해상도 모바일 화면(480px) 화면의 레이아웃을 작업한다.

  ```css
  @media screen and (max-width: 480px) {
  }
  ```

  : 저해상도 모바일 화면(320px) 화면의 레이아웃을 작업한다.

  ```css
  @media screen and (max-width: 320px) {
  }
  ```

  : 완성된 예

  ```css
  .wrap {
    width: 95%;
    max-width: 1280px;
    margin: 0 auto;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 760px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-width: 320px) {
  }
  ```
