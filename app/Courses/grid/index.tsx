import React from "react";
import Styles from "./styles.module.css";
import Card from "../card";

const CardGrid = () => {
  const cardData = [
    { image: "/images/courseCover/ai.jpg", title: "AI Essentials & Beyond" },
    { image: "/images/courseCover/ml.png", title: "Machine Learning Mastery" },
    {
      image: "/images/courseCover/web.png",
      title: "Full-Stack Web Development",
    },
    { image: "/images/courseCover/app.png", title: "Next-Gen App Development" },
    { image: "/images/courseCover/DS.png", title: "Data Science Accelerator" },
    { image: "/images/courseCover/c++.png", title: "C++ Fundamentals" },
    { image: "/images/courseCover/java.png", title: "Java Programming" },
    { image: "/images/courseCover/py.png", title: "Python Programming" },
  ];

  const cards = cardData.map((data, index) => (
    <Card
      key={index}
      image={data.image}
      title={data.title}
      isRightColumn={index % 2 !== 0} // Even index = left column, Odd index = right column
    />
  ));

  return <div className={Styles.grid}>{cards}</div>;
};

export default CardGrid;
