import React, { useState } from "react";
import "./App.css";
import { useQuery } from "react-query";
import { Divider, Typography, ConfigProvider, theme } from "antd";
import ErrorAlert from "./components/Ui/ErrorAlert.jsx";
import LoadingSpinner from "./components/Ui/LoadingSpinner.jsx";
import LessonsTab from "./components/LessonsTabs.jsx";
import { SchedulesService } from "./services/schedules.service";

const { Title, Paragraph } = Typography;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => setIsDarkMode(event.matches));

  const { isLoading, error, data } = useQuery("schedules", () =>
    SchedulesService.getSchedules().then((response) => response)
  );

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

        {error && <ErrorAlert />}
        {isLoading && <LoadingSpinner />}
        {data && <LessonsTab lessonsData={data} />}
      </div>
    </ConfigProvider>
  );
}

export default App;
