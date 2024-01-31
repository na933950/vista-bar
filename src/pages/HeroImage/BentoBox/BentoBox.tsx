import Fade from "../../../assets/Fade";
import styles from "./BentoBox.module.css";
import { TbGavel } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

const BentoBox = () => {
  return (
    <div className={[styles.container, styles.box].join(" ")}>
      <div className={[styles.l, styles.box].join(" ")}>
        <Fade
          className={[styles.l1, styles.box].join(" ")}
          from="top"
          delay={2900}
        >
          <h1 className={styles.light}>
            <b>30</b> Countries
          </h1>
        </Fade>
        <Fade
          className={[styles.l2, styles.box].join(" ")}
          from="left"
          delay={2400}
        >
          <h1>ABOUT</h1>
        </Fade>
        <div className={[styles.l3, styles.box].join(" ")}>
          <Fade
            className={[styles.l3l, styles.box].join(" ")}
            from="left"
            delay={3100}
          >
            <BiWorld className={styles.iconLight} />
          </Fade>
          <Fade
            className={[styles.l3r, styles.box].join(" ")}
            from="bottom"
            delay={3300}
          >
          </Fade>
        </div>
      </div>
      <div className={[styles.r, styles.box].join(" ")}>
        <div className={[styles.r1, styles.box].join(" ")}>
          <div className={[styles.r1l, styles.box].join(" ")}>
            <Fade
              className={[styles.r1lt, styles.box].join(" ")}
              from="top"
              delay={3100}
            >
              {" "}
              <TbGavel className={styles.iconLight} />
            </Fade>
            <Fade
              className={[styles.r1lb, styles.box].join(" ")}
              from="right"
              delay={2500}
            ></Fade>
          </div>
          <div className={[styles.r1r, styles.box].join(" ")}>
            <Fade
              className={[styles.r1rt, styles.box].join(" ")}
              from="right"
              delay={2800}
            >
              <h1>
                <b>3 </b>
                Services
              </h1>
            </Fade>
            <Fade
              className={[styles.r1rb, styles.box].join(" ")}
              from="right"
              delay={3000}
            ></Fade>
          </div>
        </div>
        <Fade
          className={[styles.r2, styles.box].join(" ")}
          from="bottom"
          delay={2700}
        >
          <h1>
            <b>5</b> Languages
          </h1>
        </Fade>
      </div>
    </div>
  );
};

export default BentoBox;
