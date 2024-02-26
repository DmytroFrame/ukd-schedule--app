import moment from "moment";

export function getLessonAtribut({ title, date, day }) {
  if (title.indexOf("Заняття відмінено!") !== -1) {
    return [{ textDecoration: "line-through" }, "red", false];
  }

  const now = moment();

  if (!now.isSame(moment(day), "day")) {
    return [{}, "gray", false];
  }

  const startTime = moment(date.split("-")[0], "HH:mm");
  const endTime = moment(date.split("-")[1], "HH:mm");

  if (now.isBetween(startTime, endTime)) {
    return [{ fontWeight: "500" }, "blue", true];
  } else if (now.isAfter(endTime)) {
    return [{}, "gray", false];
  } else {
    return [{}, "blue", false];
  }
}
