import { useState, useEffect } from "react";

import Styles from "./about.module.css";
import { urlFor, client } from "../../client";

function About({data}) {
  const [abouts, setAbouts] = useState(data);

  return (
    <section id="about">
      <div>
        <div className={Styles.heading}>
          <span className={Styles.highlight}>01.</span>
          <h2 className={Styles.headText}>About Me</h2>
        </div>
        <div className={Styles.profileItem}>
          <div className={Styles.information}>
            <p id={Styles.intro}>
              Hello! My name is{" "}
              <span className={Styles.highlight}>Fahad Nisar</span> and I am a{" "}
              <span className={Styles.highlight}>Full Stack Web Developer</span>.
              <span>{abouts.at(0).detail}</span>
            </p>
          </div>
          <div className={Styles.myImage}>
            <img src={urlFor(abouts.at(0).imgUrl)} alt="Fahad Nisar" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
