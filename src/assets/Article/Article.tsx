import styles from "./Article.module.css";
import hero from "/images/heroimage.jpg";
import { GiBarbedSun } from "react-icons/gi";

interface Props {
  img: string;
  title: string;
  date: string;
  link: string;
}

const getTimeAgo = (dateString: string): string => {
  const pastDate = new Date(dateString);
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - pastDate.getTime();
  const secondsAgo = timeDifference / 1000;
  const minutesAgo = secondsAgo / 60;
  const hoursAgo = minutesAgo / 60;
  const daysAgo = hoursAgo / 24;
  const weeksAgo = daysAgo / 7;
  const monthsAgo = daysAgo / 30;
  const yearsAgo = daysAgo / 365;

  if (yearsAgo >= 1) {
    return (
      Math.floor(yearsAgo) +
      (Math.floor(yearsAgo) === 1 ? " year ago" : " years ago")
    );
  } else if (monthsAgo >= 1) {
    return (
      Math.floor(monthsAgo) +
      (Math.floor(monthsAgo) === 1 ? " month ago" : " months ago")
    );
  } else if (weeksAgo >= 1) {
    return (
      Math.floor(weeksAgo) +
      (Math.floor(weeksAgo) === 1 ? " week ago" : " weeks ago")
    );
  } else if (daysAgo >= 1) {
    return (
      Math.floor(daysAgo) +
      (Math.floor(daysAgo) === 1 ? " day ago" : " days ago")
    );
  } else if (hoursAgo >= 1) {
    return (
      Math.floor(hoursAgo) +
      (Math.floor(hoursAgo) === 1 ? " hour ago" : " hours ago")
    );
  } else if (minutesAgo >= 1) {
    return (
      Math.floor(minutesAgo) +
      (Math.floor(minutesAgo) === 1 ? " minute ago" : " minutes ago")
    );
  } else {
    return (
      Math.floor(secondsAgo) +
      (Math.floor(secondsAgo) === 1 ? " second ago" : " seconds ago")
    );
  }
};

// Example usage:
const dateString = "2024-02-05 19:13:30";
console.log(getTimeAgo(dateString)); // Output: e.g., "5 days ago"

const Article = ({ img, title, date, link }: Props) => {

  return (
    <a className={styles.container} href={link} target="_blank">
      <div className={styles.imgContainer}>
        <img src={img ? img : hero}></img>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.featured}>F E A T U R E D</p>
        <h1>{title}</h1>
        <GiBarbedSun />
        <p>{getTimeAgo(date)}</p>
      </div>
    </a>
  );
};

export default Article;
