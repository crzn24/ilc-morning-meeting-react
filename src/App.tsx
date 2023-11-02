import { useState } from "react";
import Calendar from "./components/Calendar";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date("2022-07-"));

  return (
    <div className="mt-16 flex flex-col items-center">
      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  );
};

export default App;

// "2023-11-01"
