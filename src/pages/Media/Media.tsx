import Fade from "../../assets/Fade";
import Blog from "../Blog";
import styles from "./Media.module.css";

interface Lecture {
  name: string;
  location: string;
  date: string;
  link?: string;
  tags: string[];
}

const lecturesAndPublications: Lecture[] = [
  {
    name: "Predictions for Bar Exam Essay Questions, July 2024 Uniform Bar Exam",
    location: "Zoom Webinar",
    date: "June 27, 2024",
    link: "https://on.zoom.us/ev/AmEyLoZvXE9-ZITs06mQqjdjQcny9M8-skeQrpVciNbfxx79Ydkd~AggLXsr32QYFjq8BlYLZ5I06Dg",
    tags: ["Lecture", "Upcoming"],
  },
  {
    name: "One of the Most Challenging and Rewarding Experiences of Your Life: Preparing for the LL.M. Experience and the U.S. Bar Exam",
    location: "Hosted by Ayca Akkanyan Yildirim",
    date: "May 7, 2024",
    link: "https://www.aycaakkayanyildirim.com/en/one-of-the-most-challenging-and-rewarding-experiences-of-your-life-preparing-for-the-ll-m-experience-and-the-us-bar-exam/",
    tags: ["Publication"],
  },
  {
    name: "The US Bar Exam Experience and What You Can Do to Become an Attorney in the US",
    location:
      "Grupo de Estudos em Direito Internacional: New International Law",
    date: "March 15, 2024",
    link: "",
    tags: ["Lecture"],
  },
  {
    name: "U.S. Constitutional Law Fundamentals",
    location: "Faculdade Metropolitana Do Cariri Famec",
    date: "February 16, 2024",
    link: "",
    tags: ["Lecture"],
  },
];

const Media = () => {
  return (
    <div className={styles.container}>
      <Fade className={styles.textContainer} scroll={true}>
        <h3>Media & Events</h3>
        <Blog />
      </Fade>
      <Fade className={styles.secondContainer} scroll={true}>
        <div className={styles.publicationsContainer}>
          <h1 className={styles.sectionHeader}>Lectures & Publications</h1>
          <p className={styles.subtitle}>
            I've had the privilege to lecture worldwide, publish literature
            detailing the process of becoming a lawyer in the United States, and
            sharing experiences that can help you succeed! Below are some of the
            past lectures and publications I've done, as well as upcoming ones!
          </p>
          <div className={styles.pubLst}>
            {lecturesAndPublications.map(
              ({ name, location, date, link, tags }) => (
                <div className={styles.lAndP}>
                  <h2>
                    {link === "" ? (
                      name
                    ) : (
                      <a target="_blank" href={link}>
                        {name}
                      </a>
                    )}
                  </h2>
                  <p className={styles.location}>
                    {location} | <span className={styles.date}>{date}</span>
                  </p>
                  <div className={styles.tags}>
                    {tags.map((tag) =>
                      tag === "Upcoming" ? (
                        <div className={styles.tag2}>
                          <p>{tag}</p>
                        </div>
                      ) : (
                        <div className={styles.tag}>
                          <p>{tag}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className={styles.youtubeContainer}>
          <h1 className={styles.sectionHeader}>YouTube</h1>
          <p>
            I've recently started a YouTube channel where I will be posting
            informational content regarding the US law student application process, the US Uniform Bar Exam
            and preparation, law school experience, and study methods that have
            worked well for my clients! Please check out the channel and feel
            free to comment, like, share, and subscribe.
          </p>
          <div className={styles.btnContainer}>
            <a
              href="https://www.youtube.com/channel/UC-4r7KCPV1af5RO5iZTRTSQ"
              target="_blank"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Media;
