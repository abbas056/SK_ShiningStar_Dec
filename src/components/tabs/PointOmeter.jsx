import React, { useState, useContext, useEffect } from "react";
import Rewards from "./../Rewards";
import { ApiContext } from "../../js/api";
import { slicePlease } from "./../../js/helpers";
import LeaderBoard from "../leaderboard/LeaderBoad";
import SubTabs from "../SubTabs";
import rewardsTxt from "../../assets/Rewards-text.png";
import DayTabs from "../DayTabs";

function PointOmeter({ tab2, rankTabs, setrankTabs }) {
  const { userInfo, talentOverall, hourlyCurrent, hourlyPrevious, today, yesterday, CurrentDate, PreviousDate, currentHours, previousHours } =
    useContext(ApiContext);

  let todayKey = `HOURLY_GEMS_${CurrentDate + "_" + currentHours}`;
  let prevKey = `HOURLY_GEMS_${CurrentDate + "_" + previousHours}`;

  const [dayTabs, setdayTabs] = useState({
    hourly: true,
    daily: false,
    overall: false,
  });
  const [subTabs, setSubTabs] = useState({
    current: true,
    previous: false,
  });
  let array;
  let beansPot;
  if (dayTabs.hourly) {
    if (subTabs.current) {
      array = hourlyCurrent;
      beansPot = userInfo?.beansPotInfo?.[todayKey];
    } else if (subTabs.previous) {
      array = hourlyPrevious;
      beansPot = userInfo?.beansPotInfo?.[prevKey];
    }
  } else if (dayTabs.daily) {
    if (subTabs.current) {
      array = today;
    } else {
      array = yesterday;
    }
  } else {
    array = talentOverall;
  }

  const daySwitch = (id) => {
    let newCat = {
      hourly: false,
      daily: false,
      overall: false,
    };
    setdayTabs({ ...newCat, [id]: true });
  };

  const scoreSum = array && array?.list?.slice(0, 5)?.reduce((sum, user) => sum + user.userScore, 0);
  const newArray = array?.list ? array?.list : [];
  const topData = slicePlease(newArray, 0, 1);
  const restData = slicePlease(newArray, 1, newArray.length);

  return (
    <>
      <Rewards tab2={tab2} dayTabs={dayTabs} setdayTabs={setdayTabs} rankTabs={rankTabs} setrankTabs={setrankTabs} />
      <DayTabs daySwitch={daySwitch} dayTabs={dayTabs} />
      {dayTabs.hourly || dayTabs.daily ? <SubTabs subTabs={subTabs} setSubTabs={setSubTabs} dayTabs={dayTabs} /> : null}
      {dayTabs?.hourly ? <img className="rewards-box-text" src={rewardsTxt} alt="" /> : null}
      <LeaderBoard
        tab2={tab2}
        topData={topData}
        restData={restData}
        array={array}
        dayTabs={dayTabs}
        newArray={newArray}
        scoreSum={scoreSum}
        beansPot={beansPot}
        subTabs={subTabs}
      />
    </>
  );
}

export default PointOmeter;
