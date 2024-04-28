import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as _DatePicker } from "@mui/x-date-pickers/DatePicker";
import { storeDatePicker } from "../state/datepicker.store";
export default function DatePicker() {
  const setDate = storeDatePicker((state) => state.setDate);
  const date = storeDatePicker((state) => state.date);
  const isoDate = storeDatePicker((state) => state.isoDate);

  console.log("isodate", isoDate);
  console.log("date", date.format("L"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <_DatePicker value={date} onChange={(newValue) => setDate(newValue)} />
    </LocalizationProvider>
  );
}
