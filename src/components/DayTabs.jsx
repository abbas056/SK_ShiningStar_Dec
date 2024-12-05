import React from "react";
import hourlyBtn from "../assets/hourlyBtn.png";
import dailyBtn from "../assets/dailyBtn.png";
import overallBtn from "../assets/overallBtn.png";

function DayTabs({ daySwitch, dayTabs }) {
  return (
    <div className="rewards-box-tabs d-flex al-center jc-center">
      <img onClick={() => daySwitch("hourly")} src={hourlyBtn} className={dayTabs.hourly ? "gray-0" : "gray-1"} alt="" />
      <img onClick={() => daySwitch("daily")} src={dailyBtn} className={dayTabs.daily ? "gray-0" : "gray-1"} alt="" />
      <img onClick={() => daySwitch("overall")} src={overallBtn} className={dayTabs.overall ? "gray-0" : "gray-1"} alt="" />
    </div>
  );
}

export default DayTabs;
