import styled from "styled-components";
import UserProfile from "./UserProfile";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Header>
      <h2>k-hamin님의 블로그</h2>
      <UserProfile></UserProfile>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 90px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  > h2 {
    padding-right: 200px;
    font-weight: 400;
    font-size: 20px;
  }
`;
