import { useState } from "react";
import Image from "next/image";

import Styles from "./footer.module.css";
import { images } from "../../constants";
import client from "../../client";

function Footer() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmit, setIsFormSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const {name, email, message} = formData;

    const handleChangeInput = (event) => {
        const {name, value} = event.target;

        setFormData({...formData, [name]: value});
        console.log(name);
    }

    const handleSubmit = () => {
        setLoading(true)
        
        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        }

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmit(true);
            })
    }

  return (
    <section id="contact" >
      {!isFormSubmit ?
      (<>
        <div className={Styles.heading}>
            <span className={Styles.highlight}>04.</span>
            <h2 className={Styles.headText}>Contact me</h2>
        </div>
        <div className={Styles.footerContent}>
        <div className={Styles.footerCards}>
            <div className={Styles.footerCard}>
                <Image src={images.email} className={Styles.cardImage} alt="email" width={30} height={30} />
                <a href="mailto:fnisar142@gmail.com" className="pText">fahad@gmail.com</a>
            </div>
            <div className={Styles.footerCard}>
                <Image src={images.mobile} className={Styles.cardImage} alt="mobile" width={30} height={30} />
                <a href="tel:+30348032483" className="pText">30348032483</a>
            </div>
        </div>

        <div className={Styles.form}>
            <div className=".flex">
                <input className={Styles.input} type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
            </div>
            <div className=".flex">
                <input className={Styles.input} type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
            </div>
            <div>
                <textarea className={Styles.textarea} placeholder="Your Message" name="message" value={message} onChange={handleChangeInput} />
            </div>
            <div className={Styles.buttonContainer}>
                <button type="button" className={Styles.button} name="message" value={message} onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
            </div>
        </div>
        </div>
      </>)
        : (<div>
            <h3 className={Styles.headText}>Thank you for getting in Touch.</h3>
        </div>)
    }

        <div className={Styles.copyRight}>Designed and Developed by Fahad Nisar © 2022</div>
    </section>
  );
}

export default Footer;
