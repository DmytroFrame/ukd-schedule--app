import React from "react";
import styles from "./Lesson.module.scss";

export default function Lesson(props) {
  return (
    <div className={styles.lessonContainer}>
      <div className={styles.lessonTitle}>
        {props.title.split("|").map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
        {props.teacher}
      </div>
      <div className={styles.lessonInfo}>
        <div>{props.time}</div>
        {props.classroom && (
          <div className={styles.lessonInfoClassroom}>{props.classroom}</div>
        )}
      </div>
    </div>
  );
}
