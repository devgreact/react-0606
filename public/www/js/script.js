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