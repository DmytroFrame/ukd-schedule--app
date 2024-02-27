import { Tabs, Timeline } from "antd";
import React from "react";
import ClockIcon from "./Ui/ClockIcon";
import { getLessonAtribut } from "../utils/functions/getLessonAtribut";

export default function LessonsTab({ lessonsData }) {
  return (
    <Tabs
      tabPosition={"left"}
      items={lessonsData?.map((_data) => ({
        label: _data.weekName,
        key: Math.random(),
        children: (
          <Timeline
            style={{ textAlign: "left" }}
            items={_data.lessons.map((lesson) => {
              const [style, color, isHaveClock] = getLessonAtribut({
                day: _data.date,
                ...lesson,
              });
              return {
                color,
                dot: isHaveClock ? <ClockIcon /> : "",
                children: (
                  <>
                    {lesson.date} - <span style={style}>{lesson.title}</span>
                  </>
                ),
              };
            })}
          />
        ),
      }))}
    />
  );
}
