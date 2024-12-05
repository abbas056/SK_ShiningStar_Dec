import React, { useState, useRef, useContext } from "react";
import TopWinners from "./rankings/TopWinners";
import RestWinners from "./rankings/RestWinners";
import SeeButton from "./../SeeButton";
import overallTag from "../../assets/OverallRankingTag.png";
import lbTag from "../../assets/Leaderboard-tag.png";
import Loader from "./../common/Loader";
import { ApiContext } from "../../js/api";

function LeaderBoard({ topData, restData, array, categ, tab1, tab2, dayTabs, newArray, scoreSum, beansPot, subTabs }) {
  const { isLoading } = useContext(ApiContext);
  const restBoard = useRef(null);
  const [active, setActive] = useState(true);

  const handleChangeActive = () => {
    setActive((previous) => {
      return !previous;
    });
    if (!active) {
      restBoard.current.scrollTop = 0;
    }
  };
  return (
    <div className="leaderboard  p-rel" style={{ paddingTop: "10vw", paddingBottom: "20vw" }}>
      <img className="lb-heading p-abs m-auto" src={tab1 ? overallTag : lbTag} alt="" style={{ width: "60%", height: "22vw", top: "-8vw" }} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="rank-section">
          <>
            {dayTabs?.daily ? (
              <>
                {newArray?.length === 0 ? (
                  <p className="no-data f-acme">No Data Found</p>
                ) : (
                  <div className="rank-section-inner">
                    <div className="top-position-holders jc-center al-center">
                      {topData?.map(({ nickname, income, portrait, userId, actorLevel }, index) => {
                        return (
                          <div className="user-container" key={index}>
                            <TopWinners
                              userName={nickname}
                              userScore={income}
                              userAvatar={portrait}
                              userId={userId}
                              index={index}
                              categ={categ}
                              tab1={tab1}
                              tab2={tab2}
                              dayTabs={dayTabs}
                              actorLevel={actorLevel}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div
                      ref={restBoard}
                      className={active ? "rest-position-holders " : "rest-position-holders rest-position-holders-max"}
                      style={{ height: "117vw" }}
                    >
                      {restData &&
                        restData?.map(({ nickname, income, portrait, userId, actorLevel }, index) => (
                          <div key={index}>
                            <RestWinners
                              userName={nickname}
                              userScore={income}
                              userAvatar={portrait}
                              index={index}
                              userId={userId}
                              listNumber={index + 2}
                              categ={categ}
                              tab1={tab1}
                              tab2={tab2}
                              dayTabs={dayTabs}
                              actorLevel={actorLevel}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {array?.count === 0 ? (
                  <p className="no-data f-acme">No Data Found</p>
                ) : (
                  <div className="rank-section-inner">
                    <div className="top-position-holders jc-center al-center">
                      {topData?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId }, index) => {
                        return (
                          <div className="user-container" key={index}>
                            <TopWinners
                              userName={nickname}
                              userScore={userScore}
                              userAvatar={portrait}
                              userId={userId}
                              index={index}
                              userLevel={userLevel}
                              actorLevel={actorLevel}
                              categ={categ}
                              tab1={tab1}
                              tab2={tab2}
                              dayTabs={dayTabs}
                              scoreSum={scoreSum}
                              beansPot={beansPot}
                              subTabs={subTabs}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div
                      ref={restBoard}
                      className={active ? "rest-position-holders " : "rest-position-holders rest-position-holders-max"}
                      style={{ height: "117vw" }}
                    >
                      {restData &&
                        restData?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId }, index) => (
                          <div key={index}>
                            <RestWinners
                              userName={nickname}
                              userScore={userScore}
                              userAvatar={portrait}
                              index={index}
                              userId={userId}
                              listNumber={index + 2}
                              userLevel={userLevel}
                              actorLevel={actorLevel}
                              categ={categ}
                              tab1={tab1}
                              tab2={tab2}
                              dayTabs={dayTabs}
                              scoreSum={scoreSum}
                              beansPot={beansPot}
                              subTabs={subTabs}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </>

          {array?.length > 10 || restData?.length > 10 ? <SeeButton active={active} handleChangeActive={handleChangeActive} /> : null}
        </div>
      )}
    </div>
  );
}

export default LeaderBoard;
