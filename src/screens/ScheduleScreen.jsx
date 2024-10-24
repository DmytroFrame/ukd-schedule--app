import { useState, useEffect } from "react";
import { Empty } from "antd";
import LessonsTabs from "../components/LessonsTabs";
import { SchedulesService } from "../services/schedules.service";
import BackButton from "../components/BackButton";
import LoadingSpinner from "../components/Ui/LoadingSpinner";
import ErrorAlert from "../components/Ui/ErrorAlert";

export default function ScheduleScreen({ findOptions, changeFindOptions }) {
  const [isLoading, setIsLoading] = useState(true);
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState(null);

  function getSchedule() {
    document.title = `UKD Schedule | ${findOptions.value}`;

    if (findOptions.type === "group") {
      return SchedulesService.getSchedules({ group: findOptions.value });
    }

    if (findOptions.type === "teacher") {
      return SchedulesService.getSchedules({ teacher: findOptions.value });
    }
  }

  function onChangeSchedule() {
    changeFindOptions(null);
  }

  function playSecretAudio(audio) {
    if (
      localStorage.getItem("findOptions").includes("Черкас Ілля Анатолійович")
    ) {
      audio.volume = 0.07;

      audio.play().catch((error) => {
        console.error("Не вдалося відтворити аудіо:", error);
      });
    }
  }

  useEffect(() => {
    getSchedule()
      .then((data) => setSchedules(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));

    const audio = new Audio("/assets/audios/Gats.aac");
    playSecretAudio(audio);

    return () => {
      if (audio) audio.pause();
    };
  }, []);

  return (
    <div>
      {error && <ErrorAlert error={error} />}
      {isLoading && <LoadingSpinner />}
      {schedules.length !== 0 && <LessonsTabs lessonsData={schedules} />}

      {schedules.length === 0 && !isLoading && !error && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No schedule for this week. You can freely go to stroika"
        />
      )}

      <BackButton name="Change schedule" onClick={onChangeSchedule} />
    </div>
  );
}
