import React from "react";
import { SlotSelector } from "../components/SlotSelector";

export function ScheduleView () {
  return (
    <>
      <h1>Manage Availibility Schedule</h1>
      <p>
        Select time slots to indicate when you are available for meetings and mock interviews.
      </p>
      <SlotSelector/>
    </>
  );
}