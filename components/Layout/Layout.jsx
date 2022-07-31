import SocialMedia from "../SocialMedia/SocialMedia";

import Styles from "./layout.module.css";

export default function Layout () {
  return (
    <div className={Styles.aside}>
      <div className={Styles.layout}>
        <SocialMedia />
      </div>
    </div>
  );
}
