import "./SocialIconStyles.css";
import yt_icon from "../../assets/images/yt-icon.png";
import fb_icon from "../../assets/images/fb-icon.png";
import insta_icon from "../../assets/images/insta-icon.png";
const SocialIcons = () => {
  function clickHandler(name: string) {
    window.open(name, "_blank");
  }
  return (
    <div id="social-icons-container">
      <img
        src={yt_icon}
        alt="yt-icon"
        className="social-icon"
        onClick={() => {
          clickHandler(
            "https://youtube.com/@balatirupati_appanapalli?si=uGH9IulKT4qhHNB1"
          );
        }}
      />
      <img
        src={fb_icon}
        alt="yt-icon"
        className="social-icon"
        onClick={() => {
          clickHandler("https://www.facebook.com/share/16GcUxpZM5/");
        }}
      />
      <img
        src={insta_icon}
        alt="yt-icon"
        className="social-icon"
        onClick={() => {
          clickHandler(
            "https://www.instagram.com/appanapalli_bala_balaji?igsh=aHFkeGNmemppYzJ4"
          );
        }}
      />
    </div>
  );
};

export default SocialIcons;
