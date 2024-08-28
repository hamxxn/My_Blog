import HomeImg from "../assets/homeImg.png";
import "../styles/HomeImg.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
      <img src={HomeImg} alt="home-img" />
    </div>
  );
}
