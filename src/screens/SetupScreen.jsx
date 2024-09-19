import React, { useEffect, useState } from "react";
import SelectBy from "../components/SelectBy";
import SelectByTeacher from "../components/SelectByTeacher";
import SelectByStudent from "../components/SelectByStudent";
import styles from "./SetupScreen.module.scss";

export default function SetupScreen({ saveFindOptions }) {
  const [selectScreen, setSelectScreen] = useState("none");
  const [useAnimationClass, setUseAnimationClass] = useState(false);

  function callAnimation() {
    setUseAnimationClass(true);
    setTimeout(() => setUseAnimationClass(false), 300);
  }

  function onChangeSelectScreen(value) {
    callAnimation();
    setSelectScreen(value);
  }

  function onBack() {
    document.title = `UKD Schedule`;
    onChangeSelectScreen("none");
  }

  function onSave(type, value) {
    saveFindOptions({ type, value });
  }

  useEffect(() => {
    document.title = `UKD Schedule`;
  }, []);

  return (
    <div className={useAnimationClass ? styles.changeAnimation : ""}>
      {selectScreen === "none" && (
        <SelectBy setSelectBy={onChangeSelectScreen} />
      )}
      {selectScreen === "teacher" && (
        <SelectByTeacher
          back={onBack}
          saveByTeacher={(value) => onSave("teacher", value)}
        />
      )}
      {selectScreen === "student" && (
        <SelectByStudent
          back={onBack}
          saveByGroup={(value) => onSave("group", value)}
        />
      )}
    </div>
  );
}
