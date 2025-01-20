// card/index.tsx
import React from "react";
import { AiFillStar } from "react-icons/ai";
import styles from "./styles.module.css";

// Define the prop types
interface CardProps {
  image: string;
  feedback: string;
  name: string;
  role: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({ image, feedback, name, role, rating }) => {
  return (
    <main className={styles.card}>
      <div className={styles.content}>
        <div className={styles.top}>
          <img className={styles.profile} src={image} alt={name} />
          <p className={styles.feed}>{feedback}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.rating}>
            {[...Array(rating)].map((_, i) => (
              <AiFillStar key={i} className={styles.star} />
            ))}
          </div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </main>
  );
};

export default Card;
