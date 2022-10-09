import { useState } from 'react';
import Image from 'next/image';

import home from '../../public/assets/home.svg';
import about from '../../public/assets/about.svg';
import work from '../../public/assets/project.svg';
import skill from '../../public/assets/skill.svg';
import contact from '../../public/assets/contact.svg';

import Styles from './MagicNavigation.module.css';

const MagicNavigation = () => {

    const [current, setCurrent] = useState([false, true, false, false, false]);

    const [nav, setNav] = useState([
        {
            name: 'home',
            icon: home
        },
        {
            name: 'about',
            icon: about
        },
        {
            name: 'work',
            icon: work
        },
        {
            name: 'skills',
            icon: skill
        },
        {
            name: 'contact',
            icon: contact
        },
    ]);

    function clickHandler(index) {
        setCurrent(prev => {
            const newarray = [];
            for (let i = 0; i < prev.length; i++) {
                if (i === index) {
                    newarray[i] = true;
                } else {
                    newarray[i] = false;
                }
            }
            return newarray
        })
        console.log(current);

    }

    return (
        <div className={Styles.invisibleContainer}>
            <div className={Styles.magicNavbarLinks}>
                {
                    nav.map((item, index) => (
                        <a href={`#${item.name}`} key={item.name}>
                            <div id={Styles.link} onClick={() => clickHandler(index)}>
                                <div className={`${current[index] && Styles.currentImg} ${Styles.linkImage}`} >
                                    <Image src={item.icon} alt={item.name} width={20} height={20} />
                                </div>
                                <span className={`${current[index] && Styles.current} ${Styles.linkName}`} >{item.name}</span>
                            </div>
                        </a>
                    ))}
            </div>
        </div>
    )
}

export default MagicNavigation