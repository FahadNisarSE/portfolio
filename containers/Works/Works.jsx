import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import Styles from "./works.module.css";
import { urlFor, client } from "../../client";

function Works({data}) {

  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState(data);
  const [filterWork, setFilterWork] = useState(data);

  // useEffect(() => {
  //   const query = '*[_type == "works"]';

  //   client.fetch(query).then((data) => {
  //     setWorks(data);
  //     setFilterWork(data);
  //   });
  // }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <section id="work" className={Styles.work}>
      <div className={Styles.heading}>
        <span className={Styles.highlight}>02.</span>
        <h2 className={Styles.headText}>My Projects</h2>
      </div>
      <div className={Styles.projects}>
        <div className={Styles.projectFilter}>
          {["React Js", "Next Js", "Node Js", "All"].map((item) => (
              <div
                key={item}
                onClick={() => handleWorkFilter(item)}
                className={`${Styles.projectFilterItem} ${activeFilter === item ? `${Styles.active}` : ""}`}
              >
                {item}
              </div>
            )
          )}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className={Styles.projectCardContainer}
        >
          {filterWork.map((work) => (
            <div className={Styles.pojectCard} key={work.name}>
              <div className={Styles.Img}>
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }} 
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    delayChildren: 0,
                    staggerChildren: 0.5,
                  }}
                  className={Styles.projectHover}
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className={Styles.icon}
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className={Styles.icon}
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className={Styles.projectContent}>
                <h4 className="boldText">{work.title}</h4>
                <p className="pText">{work.description}</p>
                <div className={Styles.projectTags}>
                {work.tags.map((tag,index) => (
                    <p key={tag}>{tag}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Works;