import React from "react";
import styles from "./WeekSlider.module.scss";

export default function WeekSlider() {
  return (
    <div className={styles.weekContainer}>
      <div className={styles.dayButton}>
        <div className={styles.dayWeekName}>Понеділок</div>
        <div className={styles.dayNumber}>19</div>
      </div>
      <div className={styles.dayButton}>
        <div className={styles.dayWeekName}>Вівторок</div>
        <div className={styles.dayNumber}>20</div>
      </div>
      <div className={styles.dayButton}>
        <div className={styles.dayWeekName}>Середа</div>
        <div className={styles.dayNumber}>21</div>
      </div>
      <div className={styles.dayButton}>
        <div className={styles.dayWeekName}>Четверг</div>
        <div className={styles.dayNumber}>22</div>
      </div>
      <div className={styles.dayButton}>
        <div className={styles.dayWeekName}>Пятниця</div>
        <div className={styles.dayNumber}>23</div>
      </div>
    </div>
  );
}
