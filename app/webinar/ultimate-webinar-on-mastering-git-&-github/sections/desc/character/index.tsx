import { useScroll, useSpring, motion, useTransform } from "framer-motion";

import React, { useRef } from "react";
import styles from "./styles.module.scss";

interface ParagraphProps {
  paragraph: string;
}

export default function Character({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"], // Keep the range but optimize
  });

  // Smooth the scroll animation
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300, // Adjust stiffness for a smooth effect
    damping: 30, // Damping to avoid jittery animations
  });

  const words = paragraph.split(" ");

  return (
    <p ref={container} className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={smoothScrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = React.memo(
  ({ children, progress, range }) => {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className={styles.word}>
        {children.split("").map((char, i) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;
          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]}>
              {char}
            </Char>
          );
        })}
      </span>
    );
  }
);

interface CharProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Char: React.FC<CharProps> = React.memo(
  ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.2, 1]); // Smooth opacity transition
    const color = useTransform(progress, range, [
      "rgba(75, 0, 130, 0.4)", // Purple
      "white", // White
    ]);

    return (
      <span>
        <motion.span
          style={{ opacity, color }}
          className="bg-white bg-[radial-gradient(100%_140%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text"
        >
          {children}
        </motion.span>
      </span>
    );
  }
);
