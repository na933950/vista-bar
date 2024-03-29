import Fade from "../../assets/Fade";
import styles from "./Testimonials.module.css";
import Testimonial from "../../assets/Testimonial";
import testimonialData from "./testimonials.json";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Fade className={styles.textContainer} scroll={true}>
        <h3>Testimonials</h3>
        <h1>
          We Care About Your Experience
        </h1>
      </Fade>
      <div className={styles.testimonialContainer}>
        {testimonialData.map((data) => (
          <Testimonial {...data} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
