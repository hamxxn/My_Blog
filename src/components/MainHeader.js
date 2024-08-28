import styled from "styled-components";
import Logo from "../assets/logo.png";
import UserProfile from "./UserProfile.js";

export default function MainHeader() {
  return (
    <Header>
      <HeaderBrand>
        <img src={Logo} alt="logo" />
        <h1>제목 뭘로 하징..</h1>
      </HeaderBrand>
      <UserProfile />
    </Header>
  );
}
const Header = styled.header`
  display: flex;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const HeaderBrand = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    width: 150px;
    height: 150px;
  }
  > h1 {
    display: block;
  }
`;
