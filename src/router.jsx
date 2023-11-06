import { Link, createBrowserRouter } from "react-router-dom";
import ScheduleScreen from "./screens/ScheduleScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SetupScreen from "./screens/SetupScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Link to={"/schedule"}>Schedule</Link>
        <br />
        <Link to={"/settings"}>Settings</Link>
        <br />
        <Link to={"/setup"}>Setup</Link>
      </div>
    ),
  },
  {
    path: "/schedule",
    element: <ScheduleScreen />,
  },
  {
    path: "/settings",
    element: <SettingsScreen />,
  },
  {
    path: "/setup",
    element: <SetupScreen />,
  },
]);
