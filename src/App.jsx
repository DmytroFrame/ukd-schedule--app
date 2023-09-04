import React, { useState } from "react";
import "./App.css";
import { useQuery } from "react-query";
import { Divider, Typography, ConfigProvider, theme } from "antd";
import axios from "axios";
import ErrorAlert from "./components/Ui/ErrorAlert.jsx";
import LoadingSpinner from "./components/Ui/LoadingSpinner.jsx";
import LessonsTab from "./components/LessonsTabs.jsx";
const { Title, Paragraph } = Typography;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => setIsDarkMode(event.matches));

  const { isLoading, error, data } = useQuery("schedules", () =>
    axios
      .get("https://api.dmytroframe.site/ukd/schedules?group=МІПЗс-23")
      .then((response) => response.data)
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
