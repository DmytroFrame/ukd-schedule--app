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

export default function WeekBar({
  schedules,
  setCurrentSchedule,
  currentSchedule,
}) {
  function setStyles(el) {
    return (
      "week-icon " + (el.date === currentSchedule.date ? "active-icon" : "")
    );
  }

  return (
    <div className="week-bar">
      {schedules.map((el, key) => (
        <div onClick={() => setCurrentSchedule(el)} className={setStyles(el)} key={key}>
          <p>{shortWeekName(el.weekName)}</p>
        </div>
      ))}
    </div>
  );
}
