import React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"; 
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"; 

const Calendar = () => {
  const date = new Date();
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            "DatePicker",
            "MobileDatePicker",
            "DesktopDatePicker",
            "StaticDatePicker",
          ]}
        >
          <DemoItem>
            <DemoItem >
              <MobileDateTimePicker defaultValue={dayjs(date)} />
            </DemoItem>

            {/* <DemoItem >
              <DateTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
            </DemoItem> */}
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
