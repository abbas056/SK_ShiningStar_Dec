import React, { useState } from "react";
import PointOmeter from "./../tabs/PointOmeter";
import tab1BtnSelect from "../../assets/User-btn.png";
import tab1BtnUnSelect from "../../assets/UserUnselectBtn.png";
import tab2BtnSelect from "../../assets/TalentBtn.png";
import tab2BtnUnSelect from "../../assets/TalentsUnselectBtn.png";
import AimTheDarts from "./../tabs/AimTheDarts";
import MyPoints from "../MyPoints";

function TabButtons({ mainTabs, setMainTabs, openHistory }) {
  const tabSwitch = (id) => {
    let newCat = {
      tab1: false,
      tab2: false,
      tab3: false,
    };
    setMainTabs({ ...newCat, [id]: true });
  };
  const [rankTabs, setrankTabs] = useState({
    rank1: true,
    rank2: false,
    rank3: false,
    rank4: false,
    rank5: false,
  });

  const renderingTabs = () => {
    switch (true) {
      case mainTabs.tab1:
        return <AimTheDarts tab1={mainTabs.tab1} rankTabs={rankTabs} setrankTabs={setrankTabs} openHistory={openHistory} />;
      case mainTabs.tab2:
        return <PointOmeter tab2={mainTabs.tab2} rankTabs={rankTabs} setrankTabs={setrankTabs} />;
    }
  };

  return (
    <>
      {/* <Marque /> */}
      <MyPoints />
      <div className="tab-buttons p-rel z-index-1 d-flex jc-sEven">
        <button onClick={() => tabSwitch("tab1")}>
          <img src={mainTabs.tab1 ? tab1BtnSelect : tab1BtnUnSelect} alt="" />
        </button>
        <button onClick={() => tabSwitch("tab2")}>
          <img src={mainTabs.tab2 ? tab2BtnSelect : tab2BtnUnSelect} alt="" />
        </button>
      </div>
      <div>{renderingTabs()}</div>
    </>
  );
}

export default TabButtons;
