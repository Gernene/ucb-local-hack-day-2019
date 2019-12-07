import React from "react";

export function Slot ({toggleSlot, isSelected, day, num}) {
  const handleClick = () => {
    toggleSlot(day, num);
  };

  return (
    <div onClick={handleClick} className={`slot-selector-slot ${isSelected ? "selected" : ""}`}/>
  );
}