import React from "react";
import rewwardsTag from "../assets/Rewards-tag.png";
import rank1btn from "../assets/Rank1btn.png";
import rank2btn from "../assets/Rank2btn.png";
import rank3btn from "../assets/Rank3btn.png";
import rank4btn from "../assets/Rank4btn.png";
import rank5btn from "../assets/Rank5btn.png";
import {
  rank1TalentRewards,
  rank1UserRewards,
  rank2TalentRewards,
  rank2UserRewards,
  rank3TalentRewards,
  rank3UserRewards,
  rank4TalentRewards,
  rank4UserRewards,
  rank5TalentRewards,
  rank5UserRewards,
} from "../js/data";
import baseImg from "../assets/Rewards-base.png";

function Rewards({ tab1, tab2, rankTabs, setrankTabs }) {
  const rankSwitch = (id) => {
    let newCat = {
      rank1: false,
      rank2: false,
      rank3: false,
      rank4: false,
      rank5: false,
    };
    setrankTabs({ ...newCat, [id]: true });
  };
  let rewards;
  if (tab2) {
    if (rankTabs.rank1) {
      rewards = rank1TalentRewards;
    }
    if (rankTabs.rank2) {
      rewards = rank2TalentRewards;
    }
    if (rankTabs.rank3) {
      rewards = rank3TalentRewards;
    }
    if (rankTabs.rank4) {
      rewards = rank4TalentRewards;
    }
    if (rankTabs.rank5) {
      rewards = rank5TalentRewards;
    }
  } else {
    if (rankTabs.rank1) {
      rewards = rank1UserRewards;
    }
    if (rankTabs.rank2) {
      rewards = rank2UserRewards;
    }
    if (rankTabs.rank3) {
      rewards = rank3UserRewards;
    }
    if (rankTabs.rank4) {
      rewards = rank4UserRewards;
    }
    if (rankTabs.rank5) {
      rewards = rank5UserRewards;
    }
  }
  return (
    <div className="rewards p-rel f-alberta">
      <img className="rewards-tag m-auto p-abs" src={rewwardsTag} alt="" />
      <div className="rewards-box m-auto" style={tab1 ? { height: "70vw", paddingTop: "14vw" } : { height: "80vw", paddingTop: "10vw" }}>
        <div className="rewards-box-ranks d-flex al-center jc-center">
          <button onClick={() => rankSwitch("rank1")}>{rankTabs.rank1 && <img src={rank1btn} alt="" />}</button>
          <button onClick={() => rankSwitch("rank2")}>{rankTabs.rank2 && <img src={rank2btn} alt="" />}</button>
          <button onClick={() => rankSwitch("rank3")}>{rankTabs.rank3 && <img src={rank3btn} alt="" />}</button>
          <button onClick={() => rankSwitch("rank4")}>{rankTabs.rank4 && <img src={rank4btn} alt="" />}</button>
          <button onClick={() => rankSwitch("rank5")}>{rankTabs.rank5 && <img src={rank5btn} alt="" />}</button>
        </div>
        {/* <SliderItems tab1={tab1} dayTabs={dayTabs} /> */}
        <div className="rewards-box-container gap-2">
          <div className="desc d-fle jc-center al-center">{rewards?.desc}</div>
          <div className="inner-box">
            {rewards?.frames?.map((_items, index) => (
              <div className="img-box d-flex fd-column al-center jc-center" key={index}>
                <img className="rew" src={_items.pic} alt="" />
                <img className="base" src={baseImg} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
