import { useState } from "react";
import Calendar from "./components/Calendar";
import { format } from "date-fns";
// import { Button } from "@/components/ui/button";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSetToday = () => setCurrentDate(new Date());

  return (
    <div className="mt-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <p>Selected Date: {format(currentDate, "dd LLLL yyyy")}</p>

        <button
          className="text-sm px-4 py-1 rounded text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          onClick={handleSetToday}
        >
          Today
        </button>
      </div>

      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  );
};

export default App;

// "2023-11-01"
