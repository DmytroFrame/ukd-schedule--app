import { Tabs, Timeline } from "antd";
import React from "react";

export default function LessonsTab({ lessonsData }) {
  return (
    <>
      <Tabs
        style={{ marginBottom: 25}}
        tabPosition={"left"}
        items={lessonsData?.map((_data) => ({
          label: _data.weekName,
          key: Math.random(),
          children: (
            <Timeline
              style={{ textAlign: "left" }}
              items={_data.lessons.map((lesson) => ({
                children: `${lesson.date} - ${lesson.title}`,
              }))}
            />
          ),
        }))}
      />
    </>
  );
}
