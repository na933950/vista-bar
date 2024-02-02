import "./App.css";
import Navbar from "./assets/Navbar";
import { FaHome, FaInfoCircle, FaBlog, FaBriefcase } from "react-icons/fa";
import HeroImage from "./pages/HeroImage";
import About from "./pages/About";
import { useRef } from "react";
import Globe from "./assets/Globe";

function App() {

  const aboutRef = useRef<HTMLDivElement>(null);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const pages = [
    {
      pageName: "Home",
      pageRouter: () => {},
      pageIcon: <FaHome />,
    },
    {
      pageName: "About",
      pageRouter: scrollToAbout,
      pageIcon: <FaInfoCircle />,
    },
    {
      pageName: "Blog",
      pageRouter: () => {},
      pageIcon: <FaBlog />,
    },
    {
      pageName: "Services",
      pageRouter: () => {},
      pageIcon: <FaBriefcase />,
    },
  ];

  return (
    <div>
      <Navbar pages={pages} />
      <HeroImage scrollToAbout={scrollToAbout}/>
      <div ref={aboutRef}>
        <About></About>
      </div>
    </div>
  );
}

export default App;
