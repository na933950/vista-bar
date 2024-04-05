import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logo from "/images/vista_logo.png";

interface PageInfo {
  pageName: string;
  pageRouter: () => void;
  pageIcon: React.ReactNode;
}

interface NavbarProps {
  pages: PageInfo[];
}

const Navbar = ({ pages }: NavbarProps) => {
  //keep track of screen width for resize of navbar
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobileOptionsPosition, setMobileOptionsPosition] = useState("-100%");
  const [scrollY, setScrollY] = useState(window.scrollY);

  const resizeScreen = () => {
    setScreenWidth(window.outerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeScreen);

    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMobileNav = () => {
    setMobileOptionsPosition("0%");
  };

  const closeMobileNav = () => {
    setMobileOptionsPosition("-100%");
  };

  const breakpoint = 900;

  const mobileNav = (
    <div className={scrollY < 200 ? styles.mobileContainer : styles.mobileContainerDown} onClick={openMobileNav}>
      <div className={styles.computerLogoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={scrollY < 200 ? styles.mobileBarContainer : styles.mobileBarContainerDown}>
        <FaBarsStaggered className={styles.mobileBar} />
      </div>
    </div>
  );

  const mobileOptions = (
    <div
      className={styles.mobileOptionsContainer}
      style={{ left: mobileOptionsPosition }}
    >
      <div className={styles.mobileOptionsLogoContainer}>
        <IoClose className={styles.closeBtn} onClick={closeMobileNav} />
        <img className={styles.optionLogo} src={logo} alt="Vista Law Coaching Logo"></img>
        <h2 className={styles.optionHeader}>Vista Law Coaching</h2>
      </div>
      <div className={styles.mobileOptionFlex}>
        {pages.map(({ pageName, pageRouter, pageIcon }) => (
          <div className={styles.mobileOption}>
            {pageIcon}
            <a
              onClick={() => {
                closeMobileNav();
                pageRouter();
              }}
            >
              {pageName}
            </a>
          </div>
        ))}
      </div>
      <div className={styles.optionFooter}>
        <p>@ Vista Law Coaching 2024</p>
      </div>
    </div>
  );

  // The navbar when width > breakpoint
  const computerNav = (
    <div className={scrollY < 200 ? styles.computerContainer : styles.computerContainerDown}>
      <div className={styles.computerLogoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={scrollY < 200 ? styles.computerLinksContainer : styles.computerLinksContainerDown}>
        {pages.map(({ pageName, pageRouter }) => (
          <a onClick={pageRouter}>{pageName}</a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {mobileOptions}
      {screenWidth > breakpoint ? computerNav : mobileNav}
    </>
  );
};

export default Navbar;
