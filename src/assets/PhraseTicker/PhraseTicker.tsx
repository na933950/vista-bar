import { useEffect, useState } from "react";
import LetterTicker from "./LetterTicker";
import styles from "./PhraseTicker.module.css";

interface Props {
  phrases: string[];
  size?: string;
}

const PhraseTicker = ({ phrases, size = "var(--xx-large)" }: Props) => {
  const [longestPhraseLength, setLongestPhraseLength] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    for (let i = 0; i < phrases.length; i++) {
      if (phrases[i].length > longestPhraseLength) {
        setLongestPhraseLength(phrases[i].length);
      }
    }
  }, []);

  const addNecessaryCharacters = (phrase: string) => {
    const currLength = phrase.length;
    const diffInLen = longestPhraseLength - currLength;
    for (let i = 0; i < diffInLen; i++) {
      phrase += " ";
    }
    return phrase;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currIndex + 1) % phrases.length;
      setCurrIndex(newIndex);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currIndex]);

  return (
    <div
      className={styles.container}
      style={{ height: size, gap: `calc((2/3) * ${size})` }}
    >
      {addNecessaryCharacters(phrases[currIndex])
        .split("")
        .map((letter) => (
          <LetterTicker
            targetLetter={letter}
            caps={true}
            size={size}
          ></LetterTicker>
        ))}
    </div>
  );
};

export default PhraseTicker;
