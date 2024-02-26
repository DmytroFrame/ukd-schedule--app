import React, { useState } from "react";
import { Divider } from "antd";
import "./App.css";
import { FindOptionService } from "./services/find-option.service.js";
import AntdConfigProvider from "./components/AntdConfigProvider.jsx";
import SetupScreen from "./screens/SetupScreen.jsx";
import AppTitle from "./components/AppTitle.jsx";
import Footer from "./components/Footer.jsx";
import ScheduleScreen from "./screens/ScheduleScreen.jsx";

export default function App() {
  const [findOptions, setFindOptions] = useState(
    FindOptionService.getFindOption()
  );

  function onChangeFindOptions(options) {
    FindOptionService.setFindOption(options);
    setFindOptions(options);
  }

  return (
    <AntdConfigProvider>
      <div className="App">
        <header>
          <AppTitle />
          <Divider />
        </header>

        <main>
          {findOptions === null && (
            <SetupScreen saveFindOptions={onChangeFindOptions} />
          )}

          {findOptions !== null && (
            <ScheduleScreen
              findOptions={findOptions}
              changeFindOptions={onChangeFindOptions}
            />
          )}
        </main>

        <br />
        <br />
      </div>

      <Footer />
    </AntdConfigProvider>
  );
}
