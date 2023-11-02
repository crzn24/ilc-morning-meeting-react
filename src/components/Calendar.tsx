import { differenceInDays, endOfMonth, startOfMonth, sub } from "date-fns";
import Cell from "./Cell";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Props {
  value?: Date;
  onChange?: (value: Date) => void;
}
const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const prevMonth = () => onChange && onChange(sub(value, { months: 1 }));

  // console.log(prefixDays);

  // console.log(startDate);
  // console.log(endDate);
  // console.log(numDays);

  return (
    // <div>Calendar</div>
    <div className="w-[400px] border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell>{"<<"}</Cell>
        <Cell onClick={prevMonth}>{"<"}</Cell>
        <Cell className="col-span-3">2023</Cell>
        <Cell>{">"}</Cell>
        <Cell>{">>"}</Cell>

        {daysOfWeek.map((day) => (
          <Cell key={day} className="text-xs font-bold uppercase">
            {day}
          </Cell>
        ))}

        {/* COMES BEFORE ALL THE DATES  */}
        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}

        {/* DATES  */}
        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;

          return <Cell key={date}>{index + 1}</Cell>;
        })}

        {/* COMES AFTER DATES  */}
        {Array.from({ length: suffixDays }).map((_, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
