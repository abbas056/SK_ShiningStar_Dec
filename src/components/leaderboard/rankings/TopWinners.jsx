import React, { useContext } from "react";
import unknown from "../../../assets/unknown.png";
import frame1 from "../../../assets/frame1.png";
import { actorURL, captureImageError, goTo, userURL } from "../../../js/helpers";
import beanIcon from "../../../assets/bean.png";
import gemIcon from "../../../assets/gems.png";
import starIcon from "../../../assets/Points-icon.png";
import { ApiContext } from "../../../js/api";

function TopWinners({ userName, userScore, userAvatar, userId, index, userLevel, actorLevel, tab1, tab2, dayTabs, scoreSum, beansPot, subTabs }) {
  const { isLive } = useContext(ApiContext);
  let rank = index + 1;

  let levelUrl;
  let level;
  let icon;

  if (tab1) {
    levelUrl = userURL;
    level = userLevel;
    icon = beanIcon;
  } else if (tab2) {
    if (dayTabs.overall) {
      icon = starIcon;
      levelUrl = actorURL;
      level = actorLevel;
    } else {
      icon = gemIcon;
      levelUrl = actorURL;
      level = actorLevel;
    }
  }

  let estScore = Math.floor((userScore / scoreSum) * beansPot);
  return (
    <div className="innerData f-Heinemann">
      <div className={rank == 1 ? "first-user p-rel" : "runner-user p-rel"}>
        <img onError={captureImageError} className="rank-user-image" src={userAvatar ? userAvatar : unknown} alt="" />
        <div
          onClick={() => {
            goTo(isLive, userId, userId);
          }}
        >
          <img className="rank-border-image p-rel" src={frame1} alt="" />
        </div>
      </div>
      <div className="bottom-data d-flex al-center jc-s-around">
        <div className="bottom-info d-flex fd-column">
          <div className="username">{userName}</div>
          <img style={tab1 ? { width: "11vw" } : { width: "7vw" }} src={levelUrl + level + ".png"} alt="" />
        </div>
        {dayTabs?.hourly ? (
          <div className="est-rewards">
            <span className="d-flex al-center jc-center">
              {subTabs?.current ? <img style={{ width: "4vw", height: "4vw" }} src={beanIcon} /> : "Rewards Won"} {estScore ? estScore : 0}
            </span>
          </div>
        ) : null}
        <div className="score-box d-flex jc-center al-center">
          <img
            style={dayTabs?.overall ? { width: "6vw", height: "6vw", marginTop: "-1vw", marginLeft: "-9vw" } : { width: "3vw", height: "3vw" }}
            src={icon}
            alt=""
          />
          <span>{userScore}</span>
        </div>
      </div>
    </div>
  );
}

export default TopWinners;
