"use client";

import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../common/Animations/slideUpWord"; // Animation for title
import FadeTransition from "../../../common/Animations/textFade"; // Animation for description
import { motion } from "framer-motion"; // Framer Motion for animations
import Card from "./card"; // Card component
import testimonials from "./data"; // Import testimonials data
import styles from "./styles.module.css"; // Styles for the section

export default function ExplorePopularCourses() {
  // Use Intersection Observer to detect when the section is in view
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // Adjust the threshold for triggering
  });

  const title = ["Hear What Our Students Say!"];
  const description =
    "Discover inspiring feedback from our students, showcasing how LearnLogicify has transformed their learning experiences and accelerated their tech careers.";

  // Variants for the grid to stagger animations
  const gridVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay animations between child elements
      },
    },
  };

  // Variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Final state
  };

  return (
    <div ref={descriptionRef} className={styles.exploreCourses}>
      <div className={styles.body}>
        {/* Title with animation */}
        <SlideUpWord
          title={title}
          isInView={isInView}
          className={styles.title}
        />

        {/* Description with animation */}
        <FadeTransition
          description={description}
          isInView={isInView}
          className={styles.descriptionText}
        />

        {/* Testimonials Grid */}
        <motion.div
          className={styles.grid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: false, amount: 0.2 }} // Controls animation triggering
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={styles.cardWrapper}
            >
              <Card
                image={testimonial.image}
                feedback={testimonial.feedback}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
