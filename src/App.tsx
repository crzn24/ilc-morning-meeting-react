import { useState } from "react";
import Calendar from "./components/Calendar";
import { format } from "date-fns";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="mt-16 flex flex-col items-center">
      <div>
        <p>Selected Date: {format(currentDate,'dd LLLL yyyy')}</p>
      </div>
      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  );
};

export default App;

// "2023-11-01"
