import { useEffect, useState } from "react";
import PhraseTicker from "../../assets/PhraseTicker";
import styles from "./HeroImage.module.css";
import Fade from "../../assets/Fade";
import BentoBox from "./BentoBox";
import heroimage from "/images/heroimage.jpg";
import WaveDivider from "../../assets/WaveDivider/WaveDivider";

interface Props {
  scrollToAbout: () => void;
}

const HeroImage = ({ scrollToAbout }: Props) => {
  const phrases = [
    ["BAR EXAM ", "LAW SCHOOL ", "LAW SCHOOL "],
    ["EXPERIENCE ", "ENTRY ", "EXPERIENCE "],
  ];
  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

  const resizeScreen = () => {
    setScreenWidth(window.outerWidth);
  };

  const delay = 600;

  useEffect(() => {
    window.addEventListener("resize", resizeScreen);

    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  }, []);

  let headerSize;

  if (screenWidth < 600) {
    headerSize = "var(--xx-large)";
  } else if (screenWidth >= 600 && screenWidth < 900) {
    headerSize = "var(--xx-large)";
  } else if (screenWidth >= 900 && screenWidth < 1100) {
    headerSize = "var(--xxx-large)";
  } else if (screenWidth >= 1100 && screenWidth < 1300) {
    headerSize = "var(--xx-huge)";
  } else if (screenWidth >= 1300) {
    headerSize = "var(--massive)";
  }

  return (
    <>
      <div className={styles.container} style={{backgroundImage: `url(${heroimage})`}}>
        <div className={styles.textContainer}>
          <div className={styles.auxContainer}>
            <Fade delay={delay}>
              <h1 className={styles.heading}>Vista Law Coaching</h1>
            </Fade>
            <Fade delay={delay * 2} from="bottom">
              <div className={styles.phraseContainer}>
                <PhraseTicker phrases={phrases[0]} size={headerSize} />
                <PhraseTicker phrases={phrases[1]} size={headerSize} />
              </div>
            </Fade>
            <Fade delay={delay * 3} from="left">
              <p style={{ fontWeight: 700 }}>
                Coaching for every step of the legal journey.
              </p>
            </Fade>
            <Fade className={styles.btnContainer} delay={4 * delay} from="right">
              <div className={styles.btn1} onClick={scrollToAbout}>Learn More</div>
              <div className={styles.btn2}>Services</div>
            </Fade>
          </div>
        </div>
        <div className={styles.graphicContainer}>
          <BentoBox scrollToAbout={scrollToAbout}/>
        </div>
      </div>
      <WaveDivider />
    </>
  );
};

export default HeroImage;
