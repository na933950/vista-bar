import { useEffect, useState } from "react";
import PhraseTicker from "../../assets/PhraseTicker";
import styles from "./HeroImage.module.css";
import Fade from "../../assets/Fade";
import BentoBox from "./BentoBox";

const HeroImage = () => {
  const phrases = [
    ["BAR EXAM ", "LAW SCHOOL ", "LAW SCHOOL "],
    ["EXPERIENCE ", "ENTRY ", "EXPERIENCE "],
  ];

  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

  const resizeScreen = () => {
    setScreenWidth(window.outerWidth);
  };

  const delay = 800;

  useEffect(() => {
    window.addEventListener("resize", resizeScreen);

    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  }, []);

  let headerSize;

  if (screenWidth < 600) {
    headerSize = "var(--large)";
  } else if (screenWidth >= 600 && screenWidth < 900) {
    headerSize = "var(--x-large)";
  } else if (screenWidth >= 900 && screenWidth < 1100) {
    headerSize = "var(--xxx-large)";
  } else if (screenWidth >= 1100 && screenWidth < 1300) {
    headerSize = "var(--xx-huge)";
  } else if (screenWidth >= 1300) {
    headerSize = "var(--massive)";
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.auxContainer}>
          <Fade delay={delay}>
            <h1 className={styles.heading}>Vista Law Coaching</h1>
          </Fade>
          <Fade delay={delay * 2}>
            <div className={styles.phraseContainer}>
              <PhraseTicker phrases={phrases[0]} size={headerSize} />
              <PhraseTicker phrases={phrases[1]} size={headerSize} />
            </div>
          </Fade>
          <Fade delay={delay * 3}>
            <p style={{ fontWeight: 700 }}>
              Coaching for every step of the legal journey.
            </p>
          </Fade>
        </div>
      </div>
      <div className={styles.graphicContainer}>
        <BentoBox />
      </div>
    </div>
  );
};

export default HeroImage;
