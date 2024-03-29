import styles from "./Services.module.css";
import ServiceCard from "../../assets/ServiceCard";
import { FaBriefcase } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";
import Fade from "../../assets/Fade";
import { useRef } from "react";

interface Service {
  icon: React.ReactNode;
  title: string;
  text: string;
  amenities: string[];
  price: string;
}

const Services = () => {
  const services: Service[] = [
    {
      icon: <FaBuildingColumns />,
      title: "Choosing a Career in Law or Advocacy",
      text: "With hundreds of law schools, only a few will be the right fit for you. I can help you identify the right ones for you, and help you present your best application. I will work with you to create a personalized plan to help you identify your priorities.",
      amenities: [
        "Law School or Another Path?",
        "School selection strategy",
        "Application timeline and plan development",
        "Communicating and meeting with admissions professionals",
        "Best communication practices with faculty",
      ],
      price: "$150/hour",
    },
    {
      icon: <IoSchoolSharp />,
      title: "Law School Support",
      text: "The US Law School experience is unique, help get prepared for choosing classes, studying for them and passing your exams. Together, we will develop a strategy that plays to your strengths.",
      amenities: [
        "Class selection advising",
        "Balancing bar exam courses with career practice interests",
        "Thesis topic selection",
        "Best practices for study and class preparation",
        "One on One coaching for 1L exam preparation",
      ],
      price: "$150/hour",
    },
    {
      icon: <FaBriefcase />,
      title: "Bar Exam Coaching",
      text: "There are many excellent bar preparation courses, and everyone should take them- but no one will know how to help you like a one-on-one coach. I will coach you through the challenges you face and help you make decisions by guiding your practice efforts, providing feedback and helping you to visualize your goals. Let’s work together to get you across the finish line.",
      amenities: [
        "Custom designed strategy: which jurisdiction and when",
        "Custom designed study plan that fits your life",
        "One on one coaching and skills development",
        "Personalized feedback on your study performance",
        "Practice simulations that reinforce knowledge and short term memory",
      ],
      price: "$150/hour",
    },
  ];

  const serviceContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <Fade className={styles.textContainer} scroll={true}>
        <h3>Services</h3>
        <h1>What We Offer</h1>
        <p>
          We offer a variety of law-related services, including application
          advising, law school planning, and bar exam preparation!
        </p>
      </Fade>
      <div className={styles.serviceContainer} ref={serviceContainerRef}>
        {services.map((service) => (
          <ServiceCard {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
