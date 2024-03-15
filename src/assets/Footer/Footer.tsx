import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

interface Page {
  pageName: string;
  pageRouter: () => void;
  pageIcon: React.ReactNode;
}

interface Props {
  pages: Page[];
}

const Footer = ({ pages }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.left}>
          <h2>Vista Law Coaching</h2>
          <p className={styles.email}>vistalaw@gmail.com</p>
          <div className={styles.mediaContainer}>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaMedium />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.pageContainer}>
            <p className={styles.title}>Learn About Me</p>
            {pages.map((page) => (
              <a className={styles.page} onClick={page.pageRouter}>
                {page.pageName}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>@ Vista Law Coaching 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
