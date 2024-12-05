import React, { useContext } from "react";
import unknown from "../../../assets/unknown.png";
import { actorURL, captureImageError, goTo, userURL } from "../../../js/helpers";
import { ApiContext } from "../../../js/api";
import beanIcon from "../../../assets/bean.png";
import gemIcon from "../../../assets/gems.png";
import starIcon from "../../../assets/Points-icon.png";

function RestWinners({
  userName,
  userScore,
  userAvatar,
  index,
  userId,
  listNumber,
  userLevel,
  actorLevel,
  tab1,
  tab2,
  scoreSum,
  beansPot,
  dayTabs,
  subTabs,
}) {
  const { isLive } = useContext(ApiContext);
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
    <div className="users-details-onward" key={index}>
      <div className="d-flex gap-2 al-center p-rel jc-center">
        <div className="rank-id d-flex al-center jc-center">{listNumber}.</div>
        <div className="d-flex al-center gap-2" style={dayTabs?.hourly ? { width: "30vw" } : null}>
          <div className="frame d-flex al-center jc-center">
            <div
              className="d-flex jc-center al-center"
              onClick={() => {
                goTo(isLive, userId, userId);
              }}
            >
              <img onError={captureImageError} className="user-image" src={userAvatar ? userAvatar : unknown} alt="" />
            </div>
          </div>
          <div className="user-info d-flex fd-column">
            <span className="username">{userName && userName.slice(0, 8)}</span>
            <img style={tab1 ? { width: "11vw" } : { width: "7vw" }} src={levelUrl + level + ".png"} alt="" />
          </div>
        </div>
      </div>
      {dayTabs?.hourly & (listNumber <= 5) ? (
        <div className="est-rewards">
          <span className="d-flex al-center jc-center">
            {subTabs?.current ? <img style={{ width: "4vw", height: "4vw" }} src={beanIcon} /> : "Rewards Won"} {estScore ? estScore : 0}
          </span>
        </div>
      ) : null}
      <div className="points d-flex al-center jc-center p-rel gap-1">
        <img
          style={dayTabs?.overall ? { width: "6vw", height: "6vw", marginTop: "-1vw", marginLeft: "-9vw" } : { width: "3vw", height: "3vw" }}
          src={icon}
          alt=""
        />
        <span>{userScore}</span>
      </div>
    </div>
  );
}

export default RestWinners;
