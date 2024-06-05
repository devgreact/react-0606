import React from "react";
const Header = () => {
  // js 자리
  return <header>상단</header>;
};
const Main = () => {
  // js 자리
  return <h1>메인</h1>;
};
const Footer = () => {
  // js 자리
  return <footer>하단</footer>;
};
const Index = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default Index;
