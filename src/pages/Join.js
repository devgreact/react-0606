import "../css/style.css";
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
