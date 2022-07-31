import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";

import Styles from './socialmedia.module.css';

export default function SocialMedia() {
  return (
    <div className={Styles.social}>
      <div className={Styles.icon}>
        <AiFillGithub />
      </div>
      <div className={Styles.icon}>
        <AiOutlineMail />
      </div>
      <div className={Styles.icon}>
        <SiUpwork />
      </div>
    </div>
  );
}
