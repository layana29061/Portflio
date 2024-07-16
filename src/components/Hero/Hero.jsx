import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Layana</h1>
            <p className={styles.description}>" I am an Innovative software developer
                 with a strong background in creating
                 dynamic and responsive web applications
                 using modern technologies like
                React, Java, SpringBoot and MySQL."
            </p>
            <a className={styles.contact} href='layanae2001@gmail.com'>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} 
            alt="Hero Img"
            className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
