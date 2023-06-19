import InstagramIcon from "../../assets/images/instagramIcon.png";
import YoutubeIcon from "../../assets/images/youtubeIcon.png";
import PinterestIcon from "../../assets/images/pinterestIcon.png";
import Logo from "../../assets/images/logo.png";
import style from "./style.module.css";

export function Footer() {
  return (
    <>
      <div className={style.Footer}>
        <img src={Logo} alt="Logo-Patricia" className={style.logo} />
      </div>
      <div className={style.socialMedia}>
        <img
          src={InstagramIcon}
          alt="Instragram-Icon"
          className={style.socialMediaIcons}
        />
        <img
          src={YoutubeIcon}
          alt="Youtube-Icon"
          className={style.socialMediaIcons}
        />
        <img
          src={PinterestIcon}
          alt="Pinterest-Icon"
          className={style.socialMediaIcons}
        />
      </div>
    </>
  );
}
