"use client";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGrid from "@fullcalendar/timegrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { useRef } from "react";
const Calendar = () => {
  const handleDateClick = (arg) => {
    console.log(arg);
  };

  const handleDateSelect = (arg) => {
    console.log(arg);
  };

  const calendar = useRef();
  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Calendar" />
      <FullCalendar
        ref={calendar}
        locale={"pl"}
        plugins={[timeGrid, dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        headerToolbar={{ right: "dayGridMonth,timeGridWeek,timeGridDay" }}
        select={handleDateSelect}
        businessHours={{
          // days of week. an array of zero-based day of week integers (0=Sunday)
          daysOfWeek: [1, 2, 3, 4], // Monday - Thursday

          startTime: "10:00", // a start time (10am in this example)
          endTime: "18:00", // an end time (6pm in this example)
        }}
        selectable
        events={[
          { title: "event 1", date: "2024-10-18" },
          { title: "event 2", date: "2024-10-17" },
          { title: "event 3", start: "2024-10-19", end: "2024-10-21" },
          {
            title: "event 4",
            start: "2024-10-16T12:00",
            end: "2024-10-16T14:00",
          },
        ]}
      />
    </div>
  );
};

export default Calendar;
