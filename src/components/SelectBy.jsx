import { useState } from "react";
import { Typography, Button } from "antd";
import styeles from "./SelectBy.module.scss";
import { getRandomElementOfArray } from "../utils/functions";

const teachersEmoji = ["👩‍🏫", "🧑‍🏫", "👨‍🏫"];
const studentsEmoji = ["🧑‍🎓", "👨‍🎓", "👩‍🎓"];

export default function SelectBy({ setSelectBy }) {
  const [emojis] = useState({
    teacher: getRandomElementOfArray(teachersEmoji),
    student: getRandomElementOfArray(studentsEmoji),
  });

  return (
    <>
      <Typography.Title style={{ marginBottom: 0, marginTop: 0 }} level={2}>
        Are you ?
      </Typography.Title>

      <br />

      <div className={styeles.selectByContainer}>
        <Button
          className={styeles.selectByButton}
          onClick={() => setSelectBy("teacher")}
        >
          <div className={styeles.emojiButton}>{emojis.teacher}</div>
          Teacher
        </Button>

        <Button
          className={styeles.selectByButton}
          onClick={() => setSelectBy("student")}
        >
          <div className={styeles.emojiButton}>{emojis.student}</div>
          Student
        </Button>
      </div>
    </>
  );
}
