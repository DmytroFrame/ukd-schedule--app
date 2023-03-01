import React from "react";
import "./WeekBar.scss";

function shortWeekName(weekName) {
  switch (weekName) {
    case "Понеділок":
      return "Пн";
    case "Вівторок":
      return "Вт";
    case "Середа":
      return "Ср";
    case "Четвер":
      return "Чт";
    case "П'ятниця":
      return "Пт";
    default:
      return "Null";
  }
}

export default function WeekBar({ schedules, setCurrentSchedule }) {
  return (
    <div className="week-bar">
      {schedules.map((el) => (
        <div onClick={() => setCurrentSchedule(el)}  className="week-icon">{shortWeekName(el.weekName)}</div>
      ))}
    </div>
  );
}
