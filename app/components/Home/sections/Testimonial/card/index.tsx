import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

type CardProps = {
  image: string;
  feedback: string;
  name: string;
  role: string;
  rating: number;
};

const Card: React.FC<CardProps> = ({ image, feedback, name, role, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={`${name}'s feedback`}
          width={150} // Replace with actual width
          height={150} // Replace with actual height
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.feedback}>{feedback}</p>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.role}>{role}</p>
        <p className={styles.rating}>Rating: {rating}/5</p>
      </div>
    </div>
  );
};

export default Card;
