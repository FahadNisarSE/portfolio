import { motion } from "framer-motion";
import { images } from "../../constants";

import Image from "next/image";
import Styles from "./header.module.css";
import Codetyping from '../../public/assets/Codetyping.gif';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

export default function Header() {
  return (
    <section id="home">
      <div className={`${Styles.headerContainer} flex`}>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className={Styles.headerInfo}
        >
          <div className={Styles.badgeCmp}>
            <span className={Styles.emoji}>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p>Hello, I am</p>
              <h1 className={`${Styles.headText} green`}>Fahad Nisar</h1>
            </div>
          </div>

          <div className={`${Styles.skillsCmp} flex`}>
            <p className={Styles.pText}>🚀 Web Developer</p>
            <p className={Styles.pText}>🚀 Freelancer</p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className={Styles.banner}
        >
          <Image
            src={Codetyping}
            alt="profile_background"
            width={400}
            height={450}
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className={Styles.headerCircle}
        >
          {[images.node, images.nextjs, images.react].map((circle, index) => (
            <div className={`${Styles.cirlceCmp} flex`} key={`circle-${index}`}>
              <Image src={circle} alt="circle" />
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}