import { useEffect, useState } from "react";
import styles from "./PhraseTicker.module.css";

interface Props {
  phrases: string[];
  size?: string;
}

const PhraseTicker = ({ phrases, size = "var(--xx-large)" }: Props) => {
  const [longestPhraseLength, setLongestPhraseLength] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const [currOpacity, setCurrOpacity] = useState(1);

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
      setCurrOpacity(0);
      setTimeout(() => {
        setCurrIndex(newIndex);
        setCurrOpacity(1);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currIndex]);

  return (
    <h1
      className={styles.letter}
      style={{ fontSize: size, opacity: currOpacity }}
    >
      {addNecessaryCharacters(phrases[currIndex])}
    </h1>
  );
};

export default PhraseTicker;
