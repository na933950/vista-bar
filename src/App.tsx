import "./App.css";
import Navbar from "./assets/Navbar";
import { FaHome, FaInfoCircle, FaBlog, FaBriefcase } from "react-icons/fa";
import HeroImage from "./pages/HeroImage";
import Testimonials from "./pages/Testimonials";
import { MdRateReview } from "react-icons/md";
import About from "./pages/About";
import { useRef } from "react";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./assets/Footer";

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
  const serviceRef = useRef<HTMLDivElement>(null);
  const scrollToService = () => {
    if (serviceRef.current) {
      window.scrollTo({
        top: serviceRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const homeRef = useRef<HTMLDivElement>(null);
  const scrollToHome = () => {
    if (homeRef.current) {
      window.scrollTo({
        top: homeRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const blogRef = useRef<HTMLDivElement>(null);
  const scrollToBlog = () => {
    if (blogRef.current) {
      window.scrollTo({
        top: blogRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const testimonialRef = useRef<HTMLDivElement>(null);
  const scrollToTestimonial = () => {
    if (testimonialRef.current) {
      window.scrollTo({
        top: testimonialRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const pages = [
    {
      pageName: "Home",
      pageRouter: scrollToHome,
      pageIcon: <FaHome />,
    },
    {
      pageName: "About",
      pageRouter: scrollToAbout,
      pageIcon: <FaInfoCircle />,
    },
    {
      pageName: "Services",
      pageRouter: scrollToService,
      pageIcon: <FaBriefcase />,
    },
    {
      pageName: "Blog",
      pageRouter: scrollToBlog,
      pageIcon: <FaBlog />,
    },
    {
      pageName: "Testimonials",
      pageRouter: scrollToTestimonial,
      pageIcon: <MdRateReview />
    }
  ];

  return (
    <Router>
      <div>
        <Navbar pages={pages} />
        <div ref={homeRef}></div>
        <HeroImage scrollToAbout={scrollToAbout} scrollToServices={scrollToService}/>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={serviceRef}>
          <Services />
        </div>
        <div ref={blogRef}>
          <Blog />
        </div>
        <div ref={testimonialRef}>
          <Testimonials />
        </div>
        <Footer pages={pages}/>
      </div>
    </Router>
  );
}

export default App;
