import React from "react";
import Lesson from "../components/lesson/Lesson";
import "./ScheduleScreen.scss";
import LessonBreak from "../components/LessonBreak/LessonBreak";
import moment from "moment";
import WeekSlider from "../components/WeekSlider/WeekSlider";

const data = [
  {
    date: "2023-11-01T00:00:00.000Z",
    weekName: "Середа",
    lessons: [
      {
        index: 4,
        date: "13:30-14:50",
        title:
          "Методологія наукових досліджень в галузі ІТ (Пр)  Ващишак Сергій Петрович ауд.330/6  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Методологія наукових досліджень в галузі ІТ (Пр)<br>  Ващишак Сергій Петрович ауд.330/6 <br> </td>',
      },
      {
        index: 5,
        date: "15:10-16:30",
        title:
          "Ділова іноземна мова (за проф.спрям.) (Пр)  Лада Олександр Валерійович ауд.429  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Ділова іноземна мова (за проф.спрям.) (Пр)<br>  Лада Олександр Валерійович ауд.429 <br> </td>',
      },
    ],
  },
  {
    date: "2023-11-02T00:00:00.000Z",
    weekName: "Четвер",
    lessons: [
      {
        index: 2,
        date: "10:00-11:20",
        title:
          "Ефективність особистісного зростання (Сем)  Гуменюк Наталія Ярославівна ауд.429  Відпрацювання за 16.10.2023",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Ефективність особистісного зростання (Сем)<br>  Гуменюк Наталія Ярославівна ауд.429 <br> Відпрацювання за 16.10.2023</td>',
      },
      {
        index: 3,
        date: "12:00-13:20",
        title: "Година куратора (Л)  Ващишак Сергій Петрович  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Година куратора (Л)<br>  Ващишак Сергій Петрович  </td>',
      },
      {
        index: 4,
        date: "13:30-14:50",
        title:
          "Ділова іноземна мова (за проф.спрям.) (Пр)  Лада Олександр Валерійович ауд.310  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Ділова іноземна мова (за проф.спрям.) (Пр)<br>  Лада Олександр Валерійович ауд.310 <br> </td>',
      },
    ],
  },
  {
    date: "2023-11-03T00:00:00.000Z",
    weekName: "П'ятниця",
    lessons: [
      {
        index: 2,
        date: "10:00-11:20",
        title:
          "Інноваційний менеджмент та розвиток стартапів (Пр)  Гаврилко Сергій Михайлович ауд.330/3  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Інноваційний менеджмент та розвиток стартапів (Пр)<br>  Гаврилко Сергій Михайлович ауд.330/3 <br> </td>',
      },
      {
        index: 3,
        date: "12:00-13:20",
        title:
          "Інноваційний менеджмент та розвиток стартапів (Л)  Гаврилко Сергій Михайлович ауд.327/2  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Інноваційний менеджмент та розвиток стартапів (Л)<br>  Гаврилко Сергій Михайлович ауд.327/2 <br> </td>',
      },
    ],
  },
  {
    date: "2023-11-06T00:00:00.000Z",
    weekName: "Понеділок",
    lessons: [
      {
        index: 3,
        date: "12:00-13:20",
        title:
          "Управління проєктами (Л) потік МАс-23-1, МБс-23-1, МДс-23-1, МЮс-23-1, МІПЗс-23-1 Карпаш Максим Олегович ауд.413  Відпрацювання за 26.10.2023",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Управління проєктами (Л)<br> потік МАс-23-1, МБс-23-1, МДс-23-1, МЮс-23-1, МІПЗс-23-1<br> Карпаш Максим Олегович ауд.413 <br> Відпрацювання за 26.10.2023</td>',
      },
      {
        index: 4,
        date: "13:30-14:50",
        title:
          "Управління проєктами (Пр)  Васечко Валентин Богданович ауд.430  Відпрацювання за 31.10.2023",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Управління проєктами (Пр)<br>  Васечко Валентин Богданович ауд.430 <br> Відпрацювання за 31.10.2023</td>',
      },
      {
        index: 5,
        date: "15:10-16:30",
        title:
          "Ефективність особистісного зростання (Л) потік МАс-23-1, МДс-23-1, МІПЗс-23-1 Гуменюк Наталія Ярославівна ауд.411  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Ефективність особистісного зростання (Л)<br> потік МАс-23-1, МДс-23-1, МІПЗс-23-1<br> Гуменюк Наталія Ярославівна ауд.411 <br> </td>',
      },
      {
        index: 6,
        date: "16:40-18:00",
        title:
          "Ефективність особистісного зростання (Сем)  Гуменюк Наталія Ярославівна ауд.421  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Ефективність особистісного зростання (Сем)<br>  Гуменюк Наталія Ярославівна ауд.421 <br> </td>',
      },
    ],
  },
  {
    date: "2023-11-07T00:00:00.000Z",
    weekName: "Вівторок",
    lessons: [
      {
        index: 4,
        date: "13:30-14:50",
        title:
          "Управління проєктами (Пр)  Васечко Валентин Богданович ауд.408  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Управління проєктами (Пр)<br>  Васечко Валентин Богданович ауд.408 <br> </td>',
      },
      {
        index: 5,
        date: "15:10-16:30",
        title:
          "Методологія наукових досліджень в галузі ІТ (Л)  Ващишак Сергій Петрович ауд.412  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Методологія наукових досліджень в галузі ІТ (Л)<br>  Ващишак Сергій Петрович ауд.412 <br> </td>',
      },
    ],
  },
  {
    date: "2023-11-08T00:00:00.000Z",
    weekName: "Середа",
    lessons: [
      {
        index: 4,
        date: "13:30-14:50",
        title:
          "Методологія наукових досліджень в галузі ІТ (Пр)  Ващишак Сергій Петрович ауд.330/6  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Методологія наукових досліджень в галузі ІТ (Пр)<br>  Ващишак Сергій Петрович ауд.330/6 <br> </td>',
      },
      {
        index: 5,
        date: "15:10-16:30",
        title:
          "Ділова іноземна мова (за проф.спрям.) (Пр)  Лада Олександр Валерійович ауд.429  ",
        rawTitle:
          '<td style="max-width: 340px;overflow: hidden;">Ділова іноземна мова (за проф.спрям.) (Пр)<br>  Лада Олександр Валерійович ауд.429 <br> </td>',
      },
    ],
  },
];

function lessonFilter(rawTitle) {
  let title = "";
  let teacher = "";
  let classroom = "";

  rawTitle
    .replaceAll("<br>", "$#")
    .replace(/<[^>]*>/g, "")
    .replaceAll("  ", "$#")
    .split("$#")
    .filter((value) => value.trim() !== "")
    .map((value) => value.trim())
    .forEach((text) => {
      if (text.search("ауд.") !== -1) {
        const array = text.split(" ");
        classroom = array.pop();
        teacher = array.join(" ");
      } else {
        if (title !== "") title += "|";
        title += text;
      }
    });

  return { title, teacher, classroom };
}

function getDuration(lessons, index) {
  if (!lessons[index + 1]) return 0;

  const startTime = moment(lessons[index].date.split("-")[1], "HH:mm");
  const endTime = moment(lessons[index + 1].date.split("-")[0], "HH:mm");

  return endTime.diff(startTime, "minutes");
}

export default function ScheduleScreen() {
  const { lessons } = data[1];

  return (
    <div className="schedule_screen_container">
      <div className="schedule_container">
        {lessons.map((lesson, index) => {
          const { title, teacher, classroom } = lessonFilter(lesson.rawTitle);
          const duration = getDuration(lessons, index);
          return (
            <>
              <Lesson
                title={title}
                teacher={teacher}
                classroom={classroom}
                time={lesson.date}
              />
              <LessonBreak duration={duration} />
            </>
          );
        })}
      </div>
      <WeekSlider />
    </div>
  );
}
