import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")}
                 alt="aboutImg"
                 className={styles.aboutImage}/>

            <ul className={styles.aboutItems}>
                <li className={styles.items}>
                    <img src={getImageUrl("about/cursorIcon.png")}
                     alt="cursorIcon" />
                    <div>
                        <h3>FrontEnd Developer</h3>
                        <p>I am a Frontend developer 
                            with experience in buildind
                            responsive and optimised sites.
                        </p>
                    </div>
                </li>

                <li className={styles.items}>
                    <img src={getImageUrl("about/serverIcon.png")}
                     alt="serverIcon" />
                    <div>
                        <h3>Backend Developer</h3>
                        <p>I am a Backend developer 
                            with experience in building
                            fast and optimised systems
                            and APIs.
                        </p>
                    </div>
                </li>

                <li className={styles.items}>
                    <img src={getImageUrl("about/Icon.png")}
                     alt="cursorIcon" />
                    <div>
                        <h3>Btech Graduate</h3>
                        <p>I am 2023 Btech Graduate in Computer
                            Science and Engineering .
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
  )
}
