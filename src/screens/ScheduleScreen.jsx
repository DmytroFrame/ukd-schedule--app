import { useState, useEffect } from "react";
import { Empty, Typography } from "antd";
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

  useEffect(() => {
    getSchedule()
      .then((data) => setSchedules(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
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
