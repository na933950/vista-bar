import styles from "./Services.module.css";
import ServiceCard from "../../assets/ServiceCard";
import { FaBriefcase } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";
import Fade from "../../assets/Fade";
import { useEffect, useRef, useState } from "react";

interface Service {
  icon: React.ReactNode;
  title: string;
  text: string;
  amenities: string[];
  price: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([
    {
      icon: <FaBuildingColumns />,
      title: "Law School Application Coaching",
      text: "With thousands of law schools, only a few will be the right fit for you. I can help you identify the right ones for you, and help you present your best application. I will work with you to create a personalized plan to help you identify your priorities.",
      amenities: [
        "School selection advising",
        "Essay and application review",
        "Application timeline and plan development",
        "Priority identification",
        "One on one's with an experienced coach",
      ],
      price: "$400",
    },
    {
      icon: <IoSchoolSharp />,
      title: "Law School Advising",
      text: "The US Law School experience is unique, help get prepared for choosing classes, studying for them and passing your exams. Together, we will develop a strategy that plays to your strengths.",
      amenities: [
        "Class selection advising",
        "One on one's with an experienced coach",
        "Study plan development",
        "Best practices for class",
        "Content review",
      ],
      price: "$500",
    },
    {
      icon: <FaBriefcase />,
      title: "Bar Exam Coaching",
      text: "There are many excellent bar preparation courses, and everyone should take them- but no one will know how to help you like a one-on-one coach. I will coach you through the challenges you face and help you make decisions by guiding your practice efforts, providing feedback and helping you to visualize your goals. Let’s work together to get you across the finish line.",
      amenities: [
        "Custom designed plan for studying",
        "One on one's with an experienced coach",
        "Personalized feedback",
        "Practice exams",
        "Question walkthroughs",
      ],
      price: "$300",
    },
  ]);

  // Setting all titles to the same length so it sizes things the same in cards...
  useEffect(() => {
    let maxLen = 0;
    services.forEach((service) => {
      if (service.title.length > maxLen) {
        maxLen = service.title.length;
      }
    });
    const newServices: Service[] = [];
    services.forEach((service) => {
      let diffLen = maxLen - service.title.length;
      let extraSpaces = "";
      for (let i = 0; i < diffLen; i++) {
        extraSpaces += " ";
      }
      let newService = { ...service };
      newService.title += extraSpaces;
      newServices.push(newService);
    });
    setServices(newServices);
  }, []);

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
