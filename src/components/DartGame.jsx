import React, { useState, useContext } from "react";
import shootBtn from "../assets/Shoot-btn.png";
import wheelStand from "../assets/Wheel-Stand.png";
import { animation, callDartApi, overFlowAuto, overFlowHidden, successAlert, unsuccessAlert } from "../js/helpers";
import { ApiContext } from "../js/api";
import { baserUrl } from "../js/baserUrl";
import whoops from "../assets/popups/Whoops-text.png";
import holdUp from "../assets/popups/HoldUp-text.png";
import hooray from "../assets/popups/Hooray-text.png";
import oops from "../assets/popups/oops.png";
import closeButton from "../assets/close-Button.png";
import errIcon from "../assets/error.png";
import { rewardImages } from "../js/data";

function DartGame({ giftIcon, openHistory }) {
  const [alert, setAlert] = useState(false);
  const [alertpopup, setAlertpopup] = useState([]);
  const [input, setInput] = useState(1);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [error, setError] = useState("");
  const [arrowValue, setarrowValue] = useState("");
  const [count, setCount] = useState();
  const [success, setsuccess] = useState(false);
  const { userId, userToken, userInfo, refreshApi } = useContext(ApiContext);

  let chancesLeft = userInfo?.gamePoints;
  let myChances = Math.floor(chancesLeft / 10000);
  let description = arrowValue && arrowValue[0];
  let countValue = count && count;

  const handleInput = (event) => {
    let value = event.target.value;
    let max = myChances < 999 ? myChances : 999;
    let val = value.replace(/[^0-9]/g, "");
    let number = parseInt(val) > max ? max : parseInt(val) <= 0 ? 1 : parseInt(val);
    setInput(number);
    if (event.target.value === "") {
      setError("Enter some value");
      setButtonDisabled(true);
    } else if (number === max && value.includes(".")) {
      setInput(1);
    } else if (
      input === `${value}.0` ||
      input === `${value}.00` ||
      input === `${value}.000` ||
      input === `${value}.0000` ||
      input === `${value}.00000` ||
      input === `${value}.000000` ||
      input === `${value}.0000000` ||
      input === `${value}.00000000` ||
      input === `${value}.000000000` ||
      input === `${value}.0000000000`
    ) {
      setInput(number);
      setError("Wrong input value");
      setButtonDisabled(true);
    } else {
      setError("Max value = 999");
      setButtonDisabled(false);
    }
  };

  const close = () => {
    overFlowAuto();
    setButtonDisabled(false);
    setAlert(false);
    setsuccess(false);
    setarrowValue("");
    setInput(1);
  };

  const shootDart = () => {
    setButtonDisabled(true);
    if (myChances < 1) {
      setAlert(true);
      setAlertpopup(
        unsuccessAlert(
          holdUp,
          <div className="w-100 d-flex al-center jc-center">
            To join the dart game, you need to spend 10,000 beans on event gifts. Start aiming, and we can't wait to see you in action! Come play
            soon!
          </div>
        )
      );
      overFlowHidden();
    } else {
      callDartApi(`${baserUrl}api/activity/shiningStar2024/playGame?playCount=${input}&type=1`, userId, userToken)
        .then(function (response) {
          if (response.msg === "success") {
            setarrowValue(response?.data?.rewardList?.map((item) => item?.desc));
            setCount(response?.data?.rewardList?.map((item) => item?.count));
            setTimeout(() => {
              setAlert(true);
              setAlertpopup(
                successAlert(
                  hooray,
                  <div>
                    Your precision paid off! <br /> You've won
                    <div
                      className={
                        response?.data?.rewardList?.length > 4
                          ? "rews-box-max d-flex al-start jc-center gap-2"
                          : "rews-box d-flex al-start jc-center gap-2"
                      }
                    >
                      {response?.data?.rewardList?.map((item, index) => {
                        return (
                          <div className="d-flex al-center jc-center fd-column" key={index} style={{ width: "25vw" }}>
                            <img src={rewardImages(item?.desc)} alt="" />
                            <div className="name c-yellow f-bold">
                              {item?.desc == "Beans" ? (
                                <> {item?.count} Beans</>
                              ) : (
                                <>
                                  {item.desc} x{item.count} {item.count === 1 ? "day" : "days"}
                                </>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              );
              setsuccess(true);
              overFlowHidden();
              refreshApi();
              setarrowValue("");
            }, 1700);
          } else if (response.errorCode === 10000004) {
            setAlert(true);
            setAlertpopup(
              unsuccessAlert(
                whoops,
                <div>
                  It looks like you tried to play with more darts than you currently own. Please spend additional beans to continue enjoying the game.
                </div>
              )
            );
            overFlowHidden();
          } else {
            setAlert(true);
            setAlertpopup(unsuccessAlert(oops, response.msg));
            overFlowHidden();
          }
        })
        .catch(function (error) {
          setAlert(true);
          setAlertpopup(unsuccessAlert(oops, error.message));
          overFlowHidden();
        });
    }
  };
  return (
    <>
      <div className="dart-game m-auto d-flex fd-column al-center jc-center p-rel f-alberta-bold">
        <img className="gift-icon p-abs" src={giftIcon} alt="" onClick={openHistory} />
        <div className="my-points p-rel">
          <div className="my-points-category d-flex al-center jc-center gap-1">
            <div className="my-chances p-abs">My Darts: {myChances ? myChances : 0}</div>
          </div>
          <div className="my-points-category d-flex fd-column al-center jc-center">
            <div className="chances d-flex jc-center al-center">
              Enter Chance:
              <input
                className="input-field"
                placeholder="Type here"
                name="NumInput"
                type="number"
                value={input}
                min={0}
                max={999}
                onChange={handleInput}
              />
            </div>
            <div className="d-flex jc-center">
              <p className="error p-abs">{error}</p>
            </div>
          </div>
        </div>
        <div className="dart-wheel p-rel d-flex al-center jc-center">
          <img className="stand p-abs w-60vw" src={wheelStand} alt="" />
          <img className="dart-animation p-abs" src={animation(description, countValue)} alt="" />
          <div className="button-section w-100 d-flex jc-center al-center p-abs">
            <div className="play-btn">
              <button disabled={buttonDisabled} onClick={shootDart}>
                <img className={buttonDisabled ? "w-20vw gray-1" : "w-20vw gray-0"} src={shootBtn} alt="" style={{ zIndex: "1" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Popup Box */}
      <div className="overlay" style={{ visibility: alert ? "visible" : "hidden" }}>
        {alert ? (
          <div className="game-popup d-flex al-center jc-center">
            {alertpopup?.map((item, i) => {
              return (
                <div key={i} className={success ? "success p-rel d-flex al-center jc-center " : "unsuccess p-rel d-flex al-center jc-center "}>
                  <div className={success ? "success-head p-abs" : "oops-head p-abs"}>
                    <img src={item?.headtext} alt="" />
                  </div>
                  <div className="content m-auto p-abs d-flex al-center jc-center" style={success ? { top: "12vw", left: "20vw" } : { top: "15vw" }}>
                    <div className="body-text d-flex al-center jc-center fd-column">{item.data}</div>
                  </div>
                  <div className="modal-close p-abs" onClick={close}>
                    <img src={closeButton} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default DartGame;
