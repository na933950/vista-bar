import styles from "./ServiceCard.module.css";
import TriangleDivider from "../TriangleDivider";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import Fade from "../Fade";

interface Props {
  icon: React.ReactNode;
  title: string;
  text: string;
  amenities: string[];
  price: string;
}

const ServiceCard = ({ icon, title, text, amenities, price }: Props) => {
  const [moreSeen, setMoreSeen] = useState(false);

  const switchText = () => {
    setMoreSeen(!moreSeen);
  };

  return (
    <Fade className={styles.container} scroll={true}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.upperContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          <h1 className={styles.price}>{price}</h1>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <TriangleDivider />
        <div className={styles.amenitiesContainer}>
          {moreSeen ? (
            <p>{text}</p>
          ) : (
            amenities.map((amenity) => (
              <div className={styles.amenity}>
                <FaCheckCircle className={styles.check} />
                <p>{amenity}</p>
              </div>
            ))
          )}
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.registerBtn}>Register</div>
          <div className={styles.learnBtn} onClick={switchText}>
            {moreSeen ? "See Less" : "See More"}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ServiceCard;
