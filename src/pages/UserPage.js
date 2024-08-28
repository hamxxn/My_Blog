import styled from "styled-components";
import UserPage from "../components/UserPage";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Wrapper>
      <UserPage userName="k-hamin"></UserPage>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  > div {
    display: flex;
  }
`;
