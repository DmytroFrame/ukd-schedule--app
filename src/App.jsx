import { useState, useEffect } from "react";
import "./App.css";
import { getSchedules } from "./api/getSchedules";

import Schedule from "./components/Schedule/Schedule";
import WeekBar from "./components/WeekBar/WeekBar";
import { mockSchedules } from "./api/mockSchedules";

function App() {
  const [schedules, setSchedules] = useState(mockSchedules);
  const [currentSchedule, setCurrentSchedule] = useState(mockSchedules[0])


  useEffect(() => {
    getSchedules().then((res) => {setSchedules(res); setCurrentSchedule(res[0])});
  }, []);

  return (
    <div className="App">
      <WeekBar schedules={schedules} currentSchedule={currentSchedule} setCurrentSchedule= {setCurrentSchedule}/>
      <Schedule currentSchedule={currentSchedule}/>
    </div>
  );
}

export default App;
