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