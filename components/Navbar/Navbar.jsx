import { useState } from "react";

import Image from "next/image";
import { HiX, HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

import Styles from "./navbar.module.css";
import { images } from "../../constants";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="glassBackground" id={Styles.navContainer}>
      <div className={Styles.appNavbar}>
      <div className={Styles.appNavbarLogo}>
        <Image src={images.logo} alt="logo" width={150} height={80} id={Styles.img} />
      </div>
      <ul className={Styles.appNavbarLinks}>
        {["home", "about", "work", "skills", "contact"].map((item, index) => (
          <li key={`link-${item}`} className="flex">
            <div id={Styles.link}>
              <span id={Styles.numbering}>{`0${index}.`}</span>
              <a href={`#${item}`}>{`${item}`}</a>
            </div>
          </li>
        ))}
      </ul>
      <div id={Styles.resumeContainer}><a href=""><button id={Styles.resumeButton}>Linked in</button></a></div>

      <div className={Styles.appNavbarMenu}>
        <HiMenuAlt3 onClick={() => setToggle(true)} className={Styles.appNavbarMenuIcon}/>
        {toggle && (
          <motion.div
            className={Styles.navMenuContainer}
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} className={Styles.appNavbarMenuIcon} id={`${Styles.crossIcon}`}/>
            <ul>
              {["home", "about", "work", "skills", "contact"].map(
                (item, index) => (
                  <li key={`${item}`} className={Styles.appNavMenuLinks}>
                    <div className={Styles.appNavMenuLink}>
                      <span id={Styles.numbering}>{`0${index}.`}</span>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{`${item}`}</a>
                    </div>
                  </li>
                )
              )}
            </ul>
            <a href=""><button id={Styles.resumeButton}>Linked in</button></a>
          </motion.div>
        )}
      </div>
      </div>
    </nav>
  );
}
