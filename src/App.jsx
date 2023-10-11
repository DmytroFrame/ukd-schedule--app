import React, { useState } from "react";
import "./App.css";
import { useQuery, useQueryClient } from "react-query";
import { Divider, Typography, ConfigProvider, theme } from "antd";
import ErrorAlert from "./components/Ui/ErrorAlert.jsx";
import LoadingSpinner from "./components/Ui/LoadingSpinner.jsx";
import LessonsTab from "./components/LessonsTabs.jsx";
import { SchedulesService } from "./services/schedules.service";
import { GroupsService } from "./services/groups.service";
import SelectGroup from "./components/SelectGroup";

const { Title, Paragraph } = Typography;

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => setIsDarkMode(event.matches));

  const { isLoading, error, data } = useQuery("schedules", () =>
    SchedulesService.getSchedules().then((data) => {
      setSchedules(data);
      return data;
    })
  );

  function saveGroup(value) {
    setSelectedGroup(value);
    GroupsService.setSelectedGroup(value);
    SchedulesService.getSchedules(value).then((data) => setSchedules(data));
  }

  function onChangeGroup() {
    setSelectedGroup(null);
  }

  React.useEffect(() => {
    setSelectedGroup(GroupsService.getSelectedGroup());
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div className="App">
        <Typography>
          <Title>Pidval project presents:</Title>
          <Paragraph>
            The most useless scheduler in your life. Better go to stroika
          </Paragraph>
        </Typography>
        <Divider />

        {selectedGroup && (
          <div>
            {error && <ErrorAlert />}
            {isLoading && <LoadingSpinner />}
            {data && <LessonsTab lessonsData={schedules} />}

            <div style={{ textAlign: "left", marginLeft: 25 }}>
              <Typography.Link onClick={onChangeGroup} href="#">
                &larr; Change group
              </Typography.Link>
            </div>
          </div>
        )}
        {!selectedGroup && <SelectGroup saveGroup={saveGroup} />}
      </div>
    </ConfigProvider>
  );
}

export default App;
