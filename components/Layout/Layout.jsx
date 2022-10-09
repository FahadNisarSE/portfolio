import SocialMedia from "../SocialMedia/SocialMedia";
import MagicNavigation from "../MagicNavigation/MagicNavigation";

import Styles from "./layout.module.css";

export default function Layout() {
  return (
    <>
      <MagicNavigation />
      <div className={Styles.aside}>
        <div className={Styles.layout}>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
