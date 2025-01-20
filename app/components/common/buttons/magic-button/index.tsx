import React from "react";
import Image from "next/image"; // Import the Image component
import styles from "./styles.module.css";

interface MagicButtonProps {
  buttonText: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  buttonText,
  width,
  height,
  fontSize,
}) => {
  return (
    <div className={styles.container}>
      <a
        href="#"
        className={styles.button}
        style={{
          width: width || "auto", // Default to 'auto' if no width is provided
          height: height || "auto", // Default to 'auto' if no height is provided
          fontSize: fontSize || "16px", // Default font size
        }}
      >
        <div className={styles.buttonContent}>
          <span className={styles.buttonText}>{buttonText}</span>
          <div className={styles.buttonReflection1}></div>
          <div className={styles.buttonReflection2}></div>
        </div>

        {/* Replace img tags with Image component */}
        <Image
          src="/components/Image/star.png"
          alt="Star"
          className={styles.buttonStar1}
          width={24} // Replace with the actual width of the image
          height={24} // Replace with the actual height of the image
        />
        <Image
          src="/components/Image/star.png"
          alt="Star"
          className={styles.buttonStar2}
          width={24}
          height={24}
        />
        <Image
          src="/components/Image/circle.png"
          alt="Circle"
          className={styles.buttonCircle1}
          width={24}
          height={24}
        />
        <Image
          src="/components/Image/circle.png"
          alt="Circle"
          className={styles.buttonCircle2}
          width={24}
          height={24}
        />
        <Image
          src="/components/Image/diamond.png"
          alt="Diamond"
          className={styles.buttonDiamond}
          width={24}
          height={24}
        />
        <Image
          src="/components/Image/triangle.png"
          alt="Triangle"
          className={styles.buttonTriangle}
          width={24}
          height={24}
        />

        <div className={styles.buttonShadow}></div>
      </a>
    </div>
  );
};

export default MagicButton;
