export async function getSchedules() {
  try {
    const req = await fetch(
      "https://tophot2022.online:7000/api/schedules?group=ІПЗс-19"
    );
  } catch (error) {
    return [
      {
        date: "2023-03-01T22:00:00.000Z",
        weekName: "Четвер",
        lessons: [
          {
            index: 1,
            date: "08:30-09:50",
            title:
              "Технології компонентного програмування для веб (Л)  Колодій (пог.) Іван Ігорович ауд.209/1  Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 2,
            date: "10:00-11:20",
            title:
              "Технології компонентного програмування для веб (Пр)  Колодій (пог.) Іван Ігорович ауд.209/1  Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 3,
            date: "12:00-13:20",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 4,
            date: "13:30-14:50",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 5,
            date: "15:10-16:30",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 6,
            date: "16:40-18:00",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 7,
            date: "18:10-19:30",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 8,
            date: "19:40-21:00",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
        ],
      },
      {
        date: "2023-03-02T22:00:00.000Z",
        weekName: "П'ятниця",
        lessons: [
          {
            index: 1,
            date: "08:30-09:50",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 2,
            date: "10:00-11:20",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 3,
            date: "12:00-13:20",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 4,
            date: "13:30-14:50",
            title:
              "Проєктування компонентів ІоТ (Пр)  Ващишак Сергій Петрович ауд.330/1  Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 5,
            date: "15:10-16:30",
            title:
              "Моделювання та аналіз програм (Пр)  Стисло Тарас Романович ауд.209/1  Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 6,
            date: "16:40-18:00",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 7,
            date: "18:10-19:30",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
          {
            index: 8,
            date: "19:40-21:00",
            title:
              "Ліквідація академічної заборгованості (практики, практикуму, тренінг-курсу) здача академічної різниці",
          },
        ],
      },
      {
        date: "2023-03-05T22:00:00.000Z",
        weekName: "Понеділок",
        lessons: [
          {
            index: 4,
            date: "13:30-14:50",
            title:
              "Моделювання та аналіз програм (Л)  Стисло Тарас Романович ауд.210к  ",
          },
          {
            index: 5,
            date: "15:10-16:30",
            title:
              "Програмування мовою JavaScript (Пр)  Демчина Микола Миколайович ауд.330/5  ",
          },
        ],
      },
      {
        date: "2023-03-06T22:00:00.000Z",
        weekName: "Вівторок",
        lessons: [
          {
            index: 4,
            date: "13:30-14:50",
            title:
              "Проєктування компонентів ІоТ (Л)  Ващишак Сергій Петрович ауд.330/1  ",
          },
          {
            index: 5,
            date: "15:10-16:30",
            title:
              "Програмування мовою JavaScript (Л)  Демчина Микола Миколайович ауд.330/1  ",
          },
        ],
      },
      {
        date: "2023-03-07T22:00:00.000Z",
        weekName: "Середа",
        lessons: [
          {
            index: 4,
            date: "13:30-14:50",
            title:
              "Програмування мовою JavaScript (Пр)  Демчина Микола Миколайович ауд.209/1  ",
          },
          {
            index: 5,
            date: "15:10-16:30",
            title:
              "Проєктування компонентів ІоТ (Пр)  Ващишак Сергій Петрович ауд.330/1  ",
          },
        ],
      },
      {
        date: "2023-03-08T22:00:00.000Z",
        weekName: "Четвер",
        lessons: [
          {
            index: 1,
            date: "08:30-09:50",
            title:
              "Технології компонентного програмування для веб (Л)  Колодій (пог.) Іван Ігорович ауд.209/1  ",
          },
          {
            index: 2,
            date: "10:00-11:20",
            title:
              "Технології компонентного програмування для веб (Пр)  Колодій (пог.) Іван Ігорович ауд.209/1  ",
          },
          {
            index: 3,
            date: "12:00-13:20",
            title:
              "Старостат (Л)  Акс-20, Ас-19, Бс-19, ГРСс-19, Дс-19-1, Дс-19-2... Гребенюк. Іван Васильович, Зварич Р.В. ауд.506   тільки для старост груп ",
          },
        ],
      },
    ];
  }
  // console.log(await req.json())
  //
  return await req.json();
}
