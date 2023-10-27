import Cell from "./Cell";

const Calendar = () => {
  return (
    // <div>Calendar</div>
    <div className="w-[400px] border">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell>{"<<"}</Cell>
        <Cell>{"<"}</Cell>
        <Cell className="col-span-3">{"October 2023"}</Cell>
        <Cell>{">"}</Cell>
        <Cell>{">>"}</Cell>
      </div>
    </div>
  );
};

export default Calendar;
