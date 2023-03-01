import React from "react";
import ScheduleItem from "../ScheduleItem/ScheduleItem";

export default function Schedule({ currentSchedule }) {
  return (
    <>
      {/* <div>Schedule</div> */}

    {currentSchedule.lessons?.map((el, key) => <ScheduleItem lesson={el} key={key} />)}
      
      {/* <ScheduleItem lesson={} />  */}
      {/* {JSON.stringify(currentSchedule)} */}



    </>
  );
}
