import React from "react";
import closeButton from "../../assets/close-Button.png";
import guideHead from "../../assets/Guide-tag.png";
import EventGifts from "../EventGifts";
import { guideContent } from "../../js/data";

function GuideContent({ guide, close, language }) {
  //LanguageBar
  let current;
  language === "Urdu/Hindi" ? (current = guideContent.Urdu) : (current = guideContent.English);
  return (
    <div className="overlay" style={{ visibility: guide ? "visible" : "hidden" }}>
      {guide ? (
        <div className="guide-content p-rel">
          <img className="head p-abs" src={guideHead} alt="" />
          <div className="inner-content ">
            <div className="content-box">
              {/* <EventGifts /> */}
              <div className="list">
                {current.topText1}
                {current.heading1}
                {current.desc1}
                {current.heading2}
                {current.desc2}
              </div>
              <table className="b-collapse w-90 m-auto">
                <thead>
                  <th className="border-1-w c-yellow">{current.thLeft}</th>
                  <th className="border-1-w c-yellow">{current.thRight}</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-1-w">{current.tdLeft_1}</td>
                    <td className="border-1-w">{current.tdRight_1}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.tdLeft_2}</td>
                    <td className="border-1-w">{current.tdRight_2}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.tdLeft_3}</td>
                    <td className="border-1-w">{current.tdRight_3}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.tdLeft_4}</td>
                    <td className="border-1-w">{current.tdRight_4}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.tdLeft_5}</td>
                    <td className="border-1-w">{current.tdRight_5}</td>
                  </tr>
                </tbody>
              </table>
              <div className="list">
                {current.tableBottom}
                {current.noteText}
                {current.heading3}
                {current.desc3}
                {current.heading4}
                {current.desc4}
              </div>
              <table className="b-collapse w-90 m-auto">
                <thead>
                  <th className="border-1-w c-yellow">{current.th2Left}</th>
                  <th className="border-1-w c-yellow">{current.th2Right}</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-1-w">{current.td2Left_1}</td>
                    <td className="border-1-w">{current.td2Right_1}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td2Left_2}</td>
                    <td className="border-1-w">{current.td2Right_2}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td2Left_3}</td>
                    <td className="border-1-w">{current.td2Right_3}</td>
                  </tr>
                </tbody>
              </table>
              {/*  */}
              <div className="list">
                {current.noteText2}
                {current.heading5}
                {current.desc5}
                {current.noteText3}
                {current.heading6}
                {current.desc6}
                {current.topText2}
                {current.desc7}
                {current.heading8}
                {current.desc8}
                {current.heading9}
                {current.desc9}
                {current.heading10}
                {current.desc10}
                {current.heading11}
                {current.desc11}
              </div>
            </div>
          </div>
          <div className="modal-close p-abs" onClick={close}>
            <img src={closeButton} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default GuideContent;
