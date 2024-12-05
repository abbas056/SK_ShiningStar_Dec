import React, { useContext } from "react";
import DartGame from "./../DartGame";
import LeaderBoard from "../leaderboard/LeaderBoad";
import { ApiContext } from "../../js/api";
import giftIcon from "../../assets/Gift-icon.png";
import Rewards from "../Rewards";
import { slicePlease } from "../../js/helpers";
function AimTheDarts({ tab1, rankTabs, setrankTabs, openHistory }) {
  const { userOverll } = useContext(ApiContext);

  const array = userOverll?.list ? userOverll?.list : [];
  const topData = slicePlease(array, 0, 1);
  const restData = slicePlease(array, 1, array.length);

  return (
    <>
      <DartGame tab1={tab1} giftIcon={giftIcon} openHistory={openHistory} />
      <Rewards tab1={tab1} rankTabs={rankTabs} setrankTabs={setrankTabs} />
      <LeaderBoard tab1={tab1} array={array} topData={topData} restData={restData} />
    </>
  );
}

export default AimTheDarts;
