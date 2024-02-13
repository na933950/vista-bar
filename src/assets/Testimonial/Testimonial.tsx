import styles from "./Testimonial.module.css";
import { FaCircle } from "react-icons/fa";

interface Props {
  img: string;
  name: string;
  role: string;
  testimonial: string;
}

const Testimonial = ({ img, name, role, testimonial }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={img} />
      </div>
      <div className={styles.textContainer}>
        <h3>{name}</h3>
        <h4>{role}</h4>
        <p>{testimonial}</p>
        <div className={styles.rating}>
          <FaCircle />
          <FaCircle />
          <FaCircle />
          <FaCircle />
          <FaCircle />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
