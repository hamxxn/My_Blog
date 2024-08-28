import MainHeader from "../components/MainHeader";
import HomeImg from "../components/HomeImg";
import TodoList from "../components/TodoList";
import styled from "styled-components";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Wrapper>
      <MainHeader />
      <div>
        <HomeImg />
        <TodoList />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  > div {
    display: flex;
  }
`;
