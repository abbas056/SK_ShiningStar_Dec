import React from "react";
import RewardSlider, { CarouselItem } from "./RewardSlider";
import baseImg from "../../assets/Rewards-base.png";
import { rank1Rewards } from "./../../js/data";

function SliderItems() {
  let rewards = rank1Rewards;
  return (
    <div className="rewards-slider f-poppin">
      <div className="sliderItem d-flex fd-column f-acme p-rel">
        <RewardSlider>
          {rewards &&
            rewards?.map((item, i) => {
              return (
                <CarouselItem key={i}>
                  <div className="rank p-abs d-flex fd-column al-center jc-center">
                    <span>Top {item.rank}</span>
                  </div>
                  <div className="rewardImg p-abs d-flex al-center jc-center">
                    {item?.frame?.map((_items, index) => (
                      <div className="img-box d-flex fd-column al-center jc-center p-rel" key={index}>
                        <img src={_items.pic} alt="" />
                        <img src={baseImg} alt="" />
                      </div>
                    ))}
                  </div>
                  <div className="desc d-flex fd-column jc-center al-center">{item.desc}</div>
                </CarouselItem>
              );
            })}
        </RewardSlider>
      </div>
    </div>
  );
}

export default SliderItems;
