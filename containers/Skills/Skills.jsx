import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Styles from "./skills.module.css";
import { urlFor, client } from "../../client";
import { images } from "../../constants";

function Skills({expdata, skilldata}) {
  
  const [experience, setExperience] = useState(expdata);
  const [skills, setSkills] = useState(skilldata);

  return (
    <section id="skills">
      <div className={Styles.heading}>
        <span className={Styles.highlight}>03.</span>
        <h2 className={Styles.headText}>Skills and Experience</h2>
      </div>
      <div className={Styles.skillContainer}>
        <motion.div className={Styles.skillList}>
          {skills?.map((skill, index) => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={Styles.skillItem}
            >
              <div className={Styles.skillImg}>
                <img src={urlFor(skill.icon)} alt={skill.name} width={90} height={90} />
              </div>
              <p className="pText">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

            {!(experience) && <div className={Styles.noExperience}><Image src={images.noexperience} alt="noExperience" width={300} height={300} /></div>}

        <motion.div className={Styles.skillExperience}>
          {experience?.map((exp) => (
            <motion.div className={Styles.experienceItem} key={exp.year}>
              <div className={Styles.skillExpYear}>
                <p className="boldText">{exp.year}</p>
              </div>
              <motion.div className={Styles.skillExpWorks}>
                {exp?.works?.map((work, index) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className={Styles.skillExpWork}
                    >
                      <h4 className="boldText">{work.name}</h4>
                      <p className="pText">
                        {work.company}
                      </p>
                    </motion.div>
                    <div className={Styles.desc}>
                      {work.desc}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;