import { useEffect, useState, useRef } from "react";
import styles from "./Fade.module.css";

interface Props {
  children?: React.ReactNode;
  from?: "top" | "bottom" | "left" | "right";
  scroll?: boolean;
  delay?: number;
  className?: string;
}

const Fade = ({
  children,
  from = "bottom",
  scroll = false,
  delay = 2000,
  className = "",
}: Props) => {
  const [opacity, setOpacity] = useState(0);
  const [hTranslation, setHTranslation] = useState("0px");
  const [vTranslation, setVTranslation] = useState("0px");

  const fadeElIn = () => {
    setOpacity(1);
    setHTranslation("0px");
    setVTranslation("0px");
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (from == "top") {
      setVTranslation("-20px");
    } else if (from == "bottom") {
      setVTranslation("20px");
    } else if (from == "left") {
      setHTranslation("-20px");
    } else {
      setHTranslation("20px");
    }
  }, [from]);

  useEffect(() => {
    if (!scroll) {
      const timeout = window.setTimeout(() => {
        fadeElIn();
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      const handleScroll = () => {
        if (ref.current) {
          const { scrollTop } = ref.current;
          const { top } = ref.current.getBoundingClientRect();
          // You can adjust the scroll threshold as needed
          if (scrollTop > 200 || top < window.innerHeight) {
            fadeElIn();
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: opacity,
        transform: `translate(${hTranslation}, ${vTranslation})`,
      }}
      className={[styles.container].concat(className).join(' ')}
    >
      {children}
    </div>
  );
};

export default Fade;
