import styled from "styled-components";
import Logo from "../assets/logo.png";
import "../styles/MainHeader.css";
import { useState } from "react";
import Pen from "../assets/penBtn.png";
import Setting from "../assets/settingBtn.png";
function UserProfile(prop) {
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
            <p>{prop.userName} 님의 블로그</p>
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
const HeaderUserControls = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #ecffe6;
  margin-right: 50px;
  position: relative;
  > div {
    position: absolute;
    background-color: white;
    top: 50px;
    left: -300px;
    width: 350px;
    height: 250px;

    > div.info-wrapper {
      height: 250px;
      width: 350px;
      border: 1px solid black;
      position: absolute;
      background-color: white;
      display: flex;
      flex-direction: column;
      > div.info-div:nth-child(1) {
        width: 350px;
        height: 100px;
      }
      > div.info-div:nth-child(2) {
        width: 350px;
        height: 110px;
      }
      > div.logout {
        height: 40px;
        width: 350px;
        padding-left: 25px;
        height: 50px;
        line-height: 50px;
        color: #b2b2b2;
      }
    }
  }
`;
export default function MainHeader() {
  const [userProfile, setUserProfile] = useState(false);
  const handleProfile = () => {
    setUserProfile((user) => !user);
  };
  return (
    <header>
      <HeaderBrand>
        <img src={Logo} />
        <h1>제목 뭘로 하징..</h1>
      </HeaderBrand>
      <HeaderUserControls onClick={handleProfile}>
        {userProfile ? (
          <UserProfile
            userName="k-hamin"
            userEmail="hamin031121@konkuk.ac.kr"
          />
        ) : (
          <></>
        )}
      </HeaderUserControls>
    </header>
  );
}

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
