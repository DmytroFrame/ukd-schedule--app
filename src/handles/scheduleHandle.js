export function scheduleHandle(schedule) {
  const lessons = [];
  let currentTitle = "";
  let currentLessonIndex = 0;

  for (let index in schedule.lessons) {
    if (schedule.lessons[index].title !== currentTitle) {
      currentLessonIndex = index;
      currentTitle = schedule.lessons[index].title;
      
      lessons.push(schedule.lessons[index]);

    } else {
      schedule.lessons[currentLessonIndex].date += schedule.lessons[index].date;

        // "".replace
    }
  }
  schedule.lessons = lessons
  return schedule;
}
