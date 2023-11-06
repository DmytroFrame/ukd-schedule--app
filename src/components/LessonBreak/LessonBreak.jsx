import React from "react";
import moment from "moment";
import styles from "./LessonBreak.module.scss";

export default function LessonBreak({ duration }) {
  if (!duration) return;

  const multiplier = duration < 61 ? 1.5 : 0.7;
  const height = 30 + duration * multiplier;

  const time = moment.duration(duration, "minutes");
  const hours = time.hours();
  const minutes = time.minutes();
  let payload = "";

  if (hours > 0) {
    payload += `${hours} Годин`;
    payload += hours === 1 ? "а" : hours <= 4 ? "и" : "";
  }
  if (minutes > 0) {
    payload += ` ${minutes} Хвилин`;
    payload += minutes === 1 ? "а" : minutes <= 4 ? "и" : "";
  }

  return (
    <div style={{ height }} className={styles.lessonBreakContainer}>
      <p>{payload}</p>
    </div>
  );
}
