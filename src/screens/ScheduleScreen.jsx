import { useState, useEffect } from "react";
import { Empty, Typography } from "antd";
import LessonsTabs from "../components/LessonsTabs";
import { SchedulesService } from "../services/schedules.service";
import BackButton from "../components/BackButton";
import LoadingSpinner from "../components/Ui/LoadingSpinner";

export default function ScheduleScreen({ findOptions, changeFindOptions }) {
  const [isLoading, setIsLoading] = useState(true);
  const [schedules, setSchedules] = useState([]);

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
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {/* {error && <ErrorAlert />} */}
      {isLoading && <LoadingSpinner />}
      {schedules.length !== 0 && <LessonsTabs lessonsData={schedules} />}
      {schedules.length === 0 && !isLoading && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No schedule for this week. You can freely go to stroika"
        />
      )}

      <BackButton name="Change schedule" onClick={onChangeSchedule} />
    </div>
  );
}
