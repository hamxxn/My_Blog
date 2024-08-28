import styled from "styled-components";
import SubHeader from "../components/SubHeader";
import PostImg from "../assets/postImg.jpg";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Wrapper>
      <SubHeader></SubHeader>
      <Header></Header>
    </Wrapper>
  );
}

const HeaderWrapper = styled.div`
  margin-top: 90px;
  width: 100%;
  height: 400px;
  background-image: url(${PostImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  > div {
    width: 60%;
    height: 300px;
    display: flex;
    flex-direction: column;
  }
`;
function Header() {
  return (
    <HeaderWrapper>
      <div>카테고리</div>
      <div>스프링 컨테이너</div>
      <div>
        <p>k-hamin</p>
        <p>.</p>
        <p>2024.08.28</p>
      </div>
    </HeaderWrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  > div {
    display: flex;
  }
`;
