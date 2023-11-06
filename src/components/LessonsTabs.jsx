import { Tabs, Timeline } from "antd";
import React from "react";
import Clock from "./Clock";
import { getLessonAtribut } from "./getLessonAtribut";

export default function LessonsTab({ lessonsData }) {
  return (
    <>
      <Tabs
        style={{ marginBottom: 25 }}
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
                  dot: isHaveClock ? <Clock /> : "",
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
    </>
  );
}
