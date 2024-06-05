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