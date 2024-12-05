import React from "react";
import currentBtn from "../assets/Current-btn.png";
import prevtBtn from "../assets/Previous-btn.png";
import todayBtn from "../assets/Today-btn.png";
import yesterdayBtn from "../assets/Yesterday-btn.png";

function SubTabs({ subTabs, setSubTabs, dayTabs }) {
  const daySwitch = (id) => {
    let newCat = {
      current: false,
      previous: false,
    };
    setSubTabs({ ...newCat, [id]: true });
  };
  let btn1Img;
  let btn2Img;
  if (dayTabs.hourly) {
    btn1Img = currentBtn;
    btn2Img = prevtBtn;
  } else if (dayTabs.daily) {
    btn1Img = todayBtn;
    btn2Img = yesterdayBtn;
  }
  return (
    <div className="subTabs d-flex al-center jc-center">
      <button onClick={() => daySwitch("current")}>
        <img className={subTabs.current ? "gray-0" : "gray-1"} src={btn1Img} alt="" />
      </button>
      <button onClick={() => daySwitch("previous")}>
        <img className={subTabs.previous ? "gray-0" : "gray-1"} src={btn2Img} alt="" />
      </button>
    </div>
  );
}

export default SubTabs;
