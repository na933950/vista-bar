import styles from "./LetterTicker.module.css";

interface Props {
  targetLetter: string;
  caps?: boolean;
  size: string;
}

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
];

const getTranslation = (letter: string, size: string) => {
  if (letters.indexOf(letter.toLowerCase()) >= 0) {
    const index = letters.indexOf(letter.toLowerCase());
    return `translate(0, calc(${size} * -${index}))`;
  } else {
    return "translate(0, 0)";
  }
};

const LetterTicker = ({ targetLetter, caps = false, size }: Props) => {
  return (
    <div className={styles.container} style={{ height: size }}>
      <div
        className={styles.letterContainer}
        style={{ transform: getTranslation(targetLetter, size) }}
      >
        {letters.map((letter) =>
          caps ? (
            <p className={styles.letter} style={{ fontSize: size }}>
              {letter.toUpperCase()}
            </p>
          ) : (
            <p className={styles.letter} style={{ fontSize: size }}>
              {letter}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default LetterTicker;
