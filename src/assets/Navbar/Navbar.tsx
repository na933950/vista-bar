import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

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

  const resizeScreen = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeScreen);
  });

  const openMobileNav = () => {
    setMobileOptionsPosition("0%");
  };

  const closeMobileNav = () => {
    setMobileOptionsPosition("-100%");
  };

  const breakpoint = 750;

  const mobileNav = (
    <div className={styles.mobileContainer} onClick={openMobileNav}>
      <div className={styles.computerLogoContainer}>
        <img src="./logo" alt="logo" />
      </div>
      <div className={styles.mobileBarContainer}>
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
        <img className={styles.optionLogo} src="./logo" alt="logo"></img>
        <h2 className={styles.optionHeader}>Vista Bar</h2>
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
      <div className={styles.optionFooter}>@ Vista Bar Coaching 2024</div>
    </div>
  );

  // The navbar when width > breakpoint
  const computerNav = (
    <div className={styles.computerContainer}>
      <div className={styles.computerLogoContainer}>
        <img src="./logo" alt="logo" />
      </div>
      <div className={styles.computerLinksContainer}>
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
