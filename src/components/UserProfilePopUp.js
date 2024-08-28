import Pen from "../assets/penBtn.png";
import Setting from "../assets/settingBtn.png";
import styled from "styled-components";
import "../styles/UserProfilePopUp.css";
import { useNavigate } from "react-router-dom";
export default function PopUp(prop) {
  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate("/user-page");
  };

  return (
    <div>
      <div className="info-wrapper">
        <InfoDiv className="info-div">
          <div className="user-title">{prop.userName}</div>
          <div className="user-info">
            <p>{prop.userEmail}</p>
            <p>계정 관리</p>
          </div>
        </InfoDiv>
        <InfoDiv className="info-div">
          <div className="blog-title">운영중인 블로그</div>
          <div className="blog-info">
            <p onClick={goToUserPage}>{prop.userName} 님의 블로그</p>
            <div>
              <img alt="pen" src={Pen} />
              <img alt="settingt" src={Setting} />
            </div>
          </div>
        </InfoDiv>
        <div className="logout">로그아웃</div>
      </div>
    </div>
  );
}
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  border-bottom: 1px solid black;

  //height: 200px;
  > div.user-title {
    font-weight: 700;
    font-size: 20px;
    padding-left: 25px;
    padding-top: 20px;
    height: 20px;
  }
  > div.user-info {
    display: flex;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 13px;
    color: #b2b2b2;
  }
  > div.blog-title {
    padding-left: 25px;
    font-size: 13px;
    color: #b2b2b2;
    padding-top: 20px;
  }
  > div.blog-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
    padding-left: 20px;
    > p {
      cursor: pointer;
    }
    > div > img {
      opacity: 0.6;
      width: 20px;
      height: 20px;
      padding-right: 20px;
    }
    > div > img:nth-of-type(1) {
      width: 25px;
      height: 25px;
    }
  }
`;
