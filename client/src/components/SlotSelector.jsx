import React, { useState } from "react";
import { Slot } from "./Slot";

export function SlotSelector () {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // 2D boolean array representing whether slot is selected
  const initSlots = [];
  for (let i=0; i<5; i++) {
    const daySlots = []; 
    for (let j=0; j<24; j++) {
      daySlots.push(false);
    }
    initSlots.push(daySlots);
  }

  const [slots, setSlots] = useState(initSlots);
  const toggleSlot = (day, num) => {
    slots[day][num] = !slots[day][num];
    setSlots([...slots]);
  };

  return (
    <div className="slot-selector">
      <div className="slot-selector-days">
        {days.map(day => {
          return (<div>{day}</div>);
        })}
      </div>
      <div className="slot-selector-schedules">
        <div className="slot-selector-times">
          {slots[0].map((slot, i) => {
              return (<div>{i+7}:00</div>);
          })}
        </div>
        {days.map((day, i) => {
          return (
            <div className="slot-selector-schedule">
              {slots[i].map((slot, j) => {
                return <Slot toggleSlot={toggleSlot} isSelected={slot} day={i} num={j} key={j}/>
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}