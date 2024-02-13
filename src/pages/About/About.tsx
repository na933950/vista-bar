import Globe from "../../assets/Globe";
import styles from "./About.module.css";
import headshot from "/images/susan_headshot.jpg";
import Fade from "../../assets/Fade";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <Fade scroll={true} className={styles.textContainer}>
          <h2>
            Experience with the
            <br />
            <span className={styles.accent}>Law Journey</span>
          </h2>
          <p>
            <i>Note from the founder: </i>I am a graduate of the English Honors Program at SUNY Albany, magna
            cum laude (1992), Cornell Law School JD (1999) and an LLM from the
            Fletcher School of Law and Diplomacy (2009). I am a member of the
            New York (2001), Massachusetts (1999) and Connecticut (2000) Bars. I
            was a paralegal for 2.5 years before going to law school, and after
            law school I practiced corporate, bankruptcy and immigration law for
            a combined 12 years and I taught US legal subjects at the Fletcher
            School of Law and Diplomacy and Boston College Law School for a
            combined additional 12 years. At both educational institutions I was
            the Director of International LLM Programs and I helped prepare
            students in legal analysis, research and writing. I served a diverse
            community of US law graduates, US Veterans, International Lawyers
            and Law Students, and members of International Ministries. I also
            traveled extensively and taught international law students around
            the world, teaching US law subjects and the US legal system directly
            in the language of instruction of Spanish, Portuguese, Italian and
            French. I have observed legal proceedings, attended conferences and
            gave legal training seminars with Judges, Prosecutors and Professors
            in South America, Asia and Europe.
          </p>
        </Fade>
        <Fade className={styles.imgContainer} scroll={true}>
          <img src={headshot} />
        </Fade>
      </div>
      <Fade className={styles.section2} scroll={true}>
        <h2>Mission Statement</h2>
        <div className={styles.divider}></div>
        <p>
          I have personalized techniques and strategies that guide your law
          education journey starting from planning to go to law school, getting
          the most out of your experience and passing the bar exam.
        </p>
      </Fade>
      <div className={styles.section3}>
        <Fade className={styles.threeJS} scroll={true}>
          <Globe />
        </Fade>
        <Fade className={styles.textContainer3} scroll={true}>
          <h3>My Clients</h3>
          <h2>
            Serving Clients
            <br />
            <span className={styles.accent}>Everywhere</span>
          </h2>
          <p>
            My clients have ranged from local law graduates and lawyers to
            international lawyers who are looking to better understand the US
            Legal System. I speak five different languages and offer services to
            all, indiscriminate of location!
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
