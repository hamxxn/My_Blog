import "../styles/App.css";
import MainHeader from "../components/MainHeader";
import styled from "styled-components";
import MainImg from "./MainImg";
import TodoList from "./TodoList";
import MyPage from "./MyPage";
function App() {
  return (
    <Wrapper>
      <MainHeader />
      <div>
        <MainImg />
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

export default App;
