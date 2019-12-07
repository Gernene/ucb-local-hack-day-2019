import React from "react";

export function SlotSelector () {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return (
    <div className="slot-selector">
      <div className="slot-selector-days">
        {days.map(day => {
          return (<div>{day}</div>);
        })}
      </div>
      <div className="slot-selector-schedules">
        <div className="slot-selector-times">
          {[...Array(12)].map((e, i) => {
              return (<div>{i+7}:00</div>);
          })}
        </div>
        {days.map(day => {
          return (
            <div className="slot-selector-schedule">
              {[...Array(24)].map((e, i) => {
                return <div className="slot-selector-slot" key={i}/>
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}