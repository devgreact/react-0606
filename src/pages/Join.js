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
