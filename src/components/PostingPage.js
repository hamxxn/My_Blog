import styled from "styled-components";
import Logo from "../assets/logo.png";
import UserProfile from "./UserProfile";
import "../styles/PostingPage.css";
export default function Posting(prop) {
  return (
    <Wrapper>
      <Header>
        <img alt="logo" src={Logo} />
        <div>
          <p>{prop.userName}</p>
          <UserProfile />
        </div>
      </Header>
      <UserInput />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  height: 120px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0px 30px;
  > img {
    width: 100px;
    height: 100px;
  }
  > div {
    display: flex;
    align-items: center;
    > p {
      padding-right: 20px;
    }
  }
`;
function UserInput() {
  return (
    <form id="submit-form">
      <header>
        <input
          id="header-input"
          type="text"
          placeholder="제목을 입력하세요."
          required
        />
      </header>
      <main>
        <textarea
          id="main-input"
          placeholder="내용을 입력하세요."
          type="text"
          required
        ></textarea>
        <label id="main-input-label" for="main-input"></label>
        <input
          id="footer-tag-input"
          placeholder="#태그입력"
          type="text"
          required
        />
      </main>
      <footer class="footer">
        <div class="spacer"></div>
        <div id="post-button">
          <button type="submit">완료</button>
        </div>
      </footer>
    </form>
  );
}
