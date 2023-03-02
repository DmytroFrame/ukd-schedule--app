import React from "react";
import { scheduleHandle } from "../../handles/scheduleHandle";
import ScheduleItem from "../ScheduleItem/ScheduleItem";

export default function Schedule({ currentSchedule }) {
  // let schedule = scheduleHandle(currentSchedule);

  // console.log(schedule.lessons[2].date)

  return (
    <>
      {currentSchedule.lessons?.map((el, key) => (
        <ScheduleItem lesson={el} key={key} />
      ))}
    </>
  );
}
