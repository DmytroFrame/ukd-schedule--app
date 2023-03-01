import React from "react";
import "./ScheduleItem.scss";

export default function ScheduleItem({ lesson }) {


    
  return (
    <div className="ScheduleItemBlock">
      <div className="info-block">
        <p>{lesson.date.replace('-', ' ')}</p>
        {/* <p><strong>{lesson.index}</strong></p> */}
      </div>

      <div className="text-block">
      {lesson.title}
      </div>
    </div>
  );
}
