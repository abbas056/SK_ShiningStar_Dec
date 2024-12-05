import React from "react";
import { eventGifts } from "../js/data";
import bean from "../assets/bean.png";
import giftBase from "../assets/Gift-base.png";
import giftBottom from "../assets/Gift-bottom-tag.png";

function EventGifts() {
  return (
    <div className="event-gifts d-flex jc-center al-start p-rel">
      {eventGifts?.map((items, index) => (
        <div key={index}>
          <div className="gift-details d-flex al-center jc-center fd-column">
            <div className="gift-img d-flex al-center jc-center fd-column">
              <img src={items?.img} alt="" />
              <img src={giftBase} alt="" />
            </div>
            <div className="details d-flex fd-column">
              <span className="c-yellow">{items.name}</span>
              <div className="d-flex al-center jc-center">
                <img className="w-3vw" src={bean} alt="" /> <span>{items.cost}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventGifts;
