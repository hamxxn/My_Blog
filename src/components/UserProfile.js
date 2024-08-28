import styled from "styled-components";
import { useState } from "react";
import PopUp from "./UserProfilePopUp.js";

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState(false);
  const handleProfile = () => {
    setUserProfile((user) => !user);
  };
  return (
    <>
      <Profile onClick={handleProfile}>
        {userProfile ? (
          <PopUp userName="k-hamin" userEmail="hamin031121@konkuk.ac.kr" />
        ) : (
          <></>
        )}
      </Profile>
    </>
  );
}
const Profile = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #ecffe6;
  margin-right: 50px;
  position: relative;
  > div {
    position: absolute;
    background-color: white;
    top: 60px;
    left: -330px;
    width: 350px;
    height: 250px;
  }
`;
