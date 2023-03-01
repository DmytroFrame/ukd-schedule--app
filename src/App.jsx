import { useState, useEffect } from "react";
import "./App.css";
import { getSchedules } from "./api/getSchedules";
import Schedule from "./components/Schedule/Schedule";
import WeekBar from "./components/WeekBar/WeekBar";

function App() {
  const [schedules, setSchedules] = useState([]);
  const [currentSchedule, setCurrentSchedule] = useState({})


  useEffect(() => {
    getSchedules().then((res) => {setSchedules(res); setCurrentSchedule(res[0])});
  }, []);

  return (
    <div className="App">
      <WeekBar schedules={schedules} setCurrentSchedule= {setCurrentSchedule}/>
      <Schedule currentSchedule={currentSchedule}/>
    </div>
  );
}

export default App;
