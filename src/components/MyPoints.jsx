import React, { useContext } from "react";
import { ApiContext } from "../js/api";

function MyPoints() {
  const { userInfo } = useContext(ApiContext);
  const category = userInfo && userInfo?.category;
  const isEligible = userInfo && userInfo?.isEligible;

  return (
    <div className="my-points d-flex fd-column al-center jc-center gap-1 f-alberta-bold">
      <div className="my-points-category d-flex al-center jc-center gap-1">
        My Category:{" "}
        <span className="c-yellow fw-bold">
          {" "}
          <span>
            {" "}
            {category == "S" ? (
              <span className="c-yellow fw-bold">S</span>
            ) : category == "A" ? (
              <span className="c-yellow fw-bold">A</span>
            ) : category == "B" ? (
              <span className="c-yellow fw-bold">B</span>
            ) : category == "C" ? (
              <span className="c-yellow fw-bold">C</span>
            ) : category == "D" ? (
              <span className="c-yellow fw-bold">D</span>
            ) : (
              <span className="c-yellow fw-bold">Not Categ..</span>
            )}
          </span>
        </span>
      </div>
      <div className="my-points-collected d-flex al-center jc-center gap-1">
        Bonus Points Eligibility: <span className="c-yellow">{isEligible === true ? "Eligible" : "Not Eligible"}</span>
      </div>

      {/* <>
          <div className="my-points-category d-flex fd-column al-center jc-center">
            Available Tokens <br />
            <div className="d-flex al-center gap-1">
              <span>Balance: {userInfo?.surplusTokens ? userInfo?.surplusTokens : "0"}</span> <img className="w-4vw" src={tokenIcon} alt="" />
            </div>
          </div>
          <div className="my-points-category d-flex fd-column al-center jc-center">
            Total Weekly Tokens <br />
            <div className="d-flex al-center gap-1">
              <span>Collected: {userInfo?.totalTokens ? userInfo?.totalTokens : "0"}</span> <img className="w-4vw" src={tokenIcon} alt="" />
            </div>
          </div>
        </> */}
    </div>
  );
}

export default MyPoints;
