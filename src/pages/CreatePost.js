import styled from "styled-components";
import SubHeader from "../components/SubHeader";
import "../styles/CreatePost.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate("/user-page");
  };
  const [animateDraftPopup, setAnimateDraftPopup] = useState(false);
  const [showDraftPopup, setShowDraftPopup] = useState(false);
  const handleDraftSave = () => {
    setShowDraftPopup(true);
    setAnimateDraftPopup(true);
    setTimeout(() => {
      setAnimateDraftPopup(false);
    }, 2000);
  };

  useEffect(() => {
    if (!animateDraftPopup) {
      setTimeout(() => {
        setShowDraftPopup(false);
      }, 300);
    }
  }, [animateDraftPopup]);
  return (
    <Wrapper>
      <SubHeader />
      {showDraftPopup && <DraftPopUp show={animateDraftPopup} />}
      <PostForm></PostForm>
      <Footer
        draftNum="10"
        onDraftSave={handleDraftSave}
        goToUserPage={goToUserPage}
      ></Footer>
    </Wrapper>
  );
}

function PostForm() {
  return (
    <form>
      <input
        type="text"
        className="title-input"
        placeholder="제목을 입력하세요"
      />
      <textarea type="text" className="main-content-input"></textarea>
      <input type="text" className="tag-input" placeholder="#태그입력" />
    </form>
  );
}
function Footer(prop) {
  return (
    <footer>
      <button onClick={prop.onDraftSave} className="draft-button">
        임시저장 | {prop.draftNum}
      </button>
      <button className="submit-button" onClick={prop.goToUserPage}>
        완료
      </button>
    </footer>
  );
}
function DraftPopUp({ show }) {
  return (
    <div className={`draft-popup ${show ? "show" : "hide"}`}>
      <p>작성 중인 글이 저장되었습니다.</p>
    </div>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
