import styled from "styled-components";
import ProfileImg from "../assets/profileImg.jpg";
import SettingBtn from "../assets/settingBtn.png";
import FriendBtn from "../assets/friendBtn.png";
import ShareBtn from "../assets/shareBtn.png";
import PostImg from "../assets/postImg.jpg";
function Profile(prop) {
  return (
    <ProfileWrapper>
      <div>
        <VisitHistory>
          <p>오늘 0</p>
          <p>*</p>
          <p>전체 100</p>
        </VisitHistory>
        <BlogIntro>한줄 소개</BlogIntro>
        <ProfileContainer>
          <ProfileImageWrapper>
            <img alt="profile-img" src={ProfileImg} />
          </ProfileImageWrapper>
          <ProfileDetails>
            <p>{prop.userName}님의 블로그</p>
            <p>10명의 이웃</p>
          </ProfileDetails>
        </ProfileContainer>
        <ControlWrapper>
          <button>
            <img alt="setting" src={SettingBtn} />
            <p>홈편집</p>
          </button>
          <button>
            <p>글쓰기</p>
          </button>
          <button>
            <img alt="friend" src={FriendBtn} />
          </button>
          <button>
            <img alt="share" src={ShareBtn} />
          </button>
        </ControlWrapper>
      </div>
    </ProfileWrapper>
  );
}
function PopularContent() {
  return (
    <PopularPost>
      <img alt="post-img" src={PostImg} />
      <p className="post-title">TITLE</p>
      <p className="post-date">2023.08.14</p>
    </PopularPost>
  );
}
function AllContent() {
  return (
    <AllPost>
      <p className="post-date">2024.08.14</p>
      <div className="post-wrapper">
        <img alt="post-img" src={PostImg} />
        <div className="post-details">
          <p className="post-title">Title</p>
          <p className="post-write">
            Something in here. Something in here. Something in here. Something
            in here.Something in here Something in hereSomething in
            hereSomething in hereSomething in hereSomething in hereSomething in
            hereSomething in here Something in here. Something in here.
            Something in here. Something in here.Something in here Something in
            hereSomething in hereSomething in hereSomething in hereSomething in
            hereSomething in hereSomething in here
          </p>
        </div>
      </div>
    </AllPost>
  );
}
function Contents() {
  return (
    <ContentBox>
      <PopularWrapper>
        <p>인기글</p>
        <div>
          <PopularContent />
          <PopularContent />
        </div>
      </PopularWrapper>
      <AllWrapper>
        <p>전체글</p>
        <AllContent />
        <AllContent />
      </AllWrapper>
    </ContentBox>
  );
}

const AllPost = styled.div`
  margin: 40px;
  border-bottom: 1px solid #b2b2b2;
  padding-bottom: 20px;
  > div.post-wrapper {
    display: flex;
    justify-content: space-between;
    > img {
      width: 300px;
      height: 300px;
      margin-right: 20px;
    }
    > div.post-details {
      > p.post-title {
        font-size: 25px;
        font-weight: 800;
      }
      > p.post-write {
        color: #b2b2b2;
        width: 300px;
        display: -webkit-box;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5;
      }
    }
  }
`;
const PopularWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-around;
  }
  > p {
    margin: 40px;
    font-size: 20px;
    font-weight: 700;
  }
  border-bottom: 1px solid black;
`;
const PopularPost = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    display: block;
    width: 220px;
    height: 170px;
  }
  > p:nth-of-type(1) {
    font-size: 18px;
    font-weight: 600;
  }
  > p:nth-of-type(2) {
    color: #b2b2b2;
  }
`;

const AllWrapper = styled.div`
  > p {
    margin: 40px;
    font-size: 20px;
    font-weight: 700;
  }
  border-bottom: 1px solid black;
`;
const ContentBox = styled.div`
  width: 60%;
  border-right: 1px solid black;
  border-left: 1px solid black;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
const ControlWrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  > button {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    > img {
      width: 30px;
      height: 30px;
    }
  }
  > button:nth-child(1),
  button:nth-child(2) {
    width: 200px;
    justify-content: center;
    font-size: 15px;
  }
  > button:nth-child(1) {
    > img {
      margin-right: 10px;
    }
  }
  > button:nth-child(3),
  button:nth-child(4) {
    padding: 10px;
    opacity: 0.4;
  }
`;
const ProfileContainer = styled.div`
  height: 150px;
  display: flex;
  padding: 10px;
`;
const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  align-items: center;

  > img {
    height: 100px;
    width: 100px;
    border-radius: 50px;
  }
`;
const ProfileDetails = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  > p {
    display: block;
  }
  > p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 600;
  }
`;

const VisitHistory = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  > p {
    margin-right: 20px;
    line-height: 30px;
  }
`;
const BlogIntro = styled.div`
  height: 50px;
  font-size: 25px;
  font-weight: 700;
  align-items: center;
  line-height: 50px;
`;
const ProfileWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: #b2b2b2;
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
function MyPage(prop) {
  return (
    <>
      <Profile userName={prop.userName}></Profile>
      <Contents></Contents>
    </>
  );
}
export default MyPage;
