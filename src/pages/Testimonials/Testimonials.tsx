import Fade from "../../assets/Fade";
import styles from "./Testimonials.module.css";
import Testimonial from "../../assets/Testimonial";
import testimonialData from "./testimonials.json";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Fade className={styles.textContainer} scroll={true}>
        <h3>Testimonials</h3>
        <h1>We Care About Your Experience</h1>
      </Fade>
      <div className={styles.testimonialContainer}>
        {testimonialData.map((data) => (
          <Testimonial {...data} />
        ))}
      </div>
      <Fade className={styles.longTestimonialContainer} scroll={true}>
        <h1>Featured Testimonial</h1>
        <p>
          "During the pandemic, I connected with Susan to learn more about
          immigration law for my undergraduate thesis. Her knowledge of the
          space and leaders within it not only helped my studies, but enabled me
          to co-found the Student Clinic for Immigrant Justice (SCIJ) at Brown
          University. SCIJ is the only organization in the country that trains
          college students to provide free legal representation to asylum
          seekers and organize for immigrant justice. My experience at SCIJ
          combining law, policy, and organizing inspired me to attend law school
          and pursue a career in public interest work. Susan’s mentorship has
          tangibly improved my life and I recommend her expertise to others
          navigating complex academic and professional choices."
        </p>
      </Fade>
    </div>
  );
};

export default Testimonials;
