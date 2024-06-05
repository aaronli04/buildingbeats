import React from "react";
import styles from "./CourseCard.module.css";
import { Course } from "@/utils/types/Course";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { capitalizeFirstLetter } from "@/utils/words";

interface CourseCardProps {
  course: Course;
}

const robotoBold = Roboto({
  weight: "500",
  subsets: ["latin"],
});

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return styles.beginner;
    case "Intermediate":
      return styles.intermediate;
    case "Advanced":
      return styles.advanced;
  }
};

const getDifficultySubtext = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "friendly";
    case "Intermediate":
      return "difficulty";
    case "Advanced":
      return "guide";
  }
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const difficulty = capitalizeFirstLetter(course.difficulty);
  const difficultyClass = getDifficultyColor(difficulty);
  const difficultySubtext = getDifficultySubtext(difficulty);

  return (
    <Link target="_blank" className={styles.liner} href={course.link}>
      <div className={difficultyClass}>
        <div className={styles.difficultyTab}>
          <span className={robotoBold.className}>{difficulty}</span>
          <span>{difficultySubtext}</span>
        </div>
      </div>
      <div className={robotoBold.className}>
        <div className={styles.title}>{course.title}</div>
      </div>
      <div className={styles.description}>{course.description}</div>
    </Link>
  );
};

export default CourseCard;
