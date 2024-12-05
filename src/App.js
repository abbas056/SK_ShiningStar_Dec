import React, { useState, useEffect, useContext } from "react";
import header from "./assets/Header.png";
import upBtn from "./assets/up-btn.png";
import Footer from "./components/common/Footer";
import TabButtons from "./components/tab-buttons/TabButtons";
import Guide from "./components/popups/Guide";
import LanguageBar from "./components/LanguageBar";
import { ApiContext } from "./js/api";
import RewardsHistory from "./components/popups/RewardsHistory";
import { overFlowAuto, overFlowHidden } from "./js/helpers";
import axios from "axios";
import { baserUrl } from "./js/baserUrl";
import "./App.scss";

function App() {
  let [language, setLanguage] = useState("English");
  const [mainTabs, setMainTabs] = useState({
    tab1: true,
    tab2: false,
  });
  const [showBtnUp, setShowBtnUp] = useState(false);
  const [history, setHistory] = useState(false);
  const [gameRecords, setgameRecords] = useState([]);
  const [loadMore, setLoadMore] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { userId, userInfo } = useContext(ApiContext);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setShowBtnUp(true);
      } else {
        setShowBtnUp(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openHistory = () => {
    setHistory(true);
    overFlowHidden();
  };
  const loadMoreHistory = () => {
    setLoadMore(loadMore + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getRecordInfo?eventDesc=20241213_shining&rankIndex=21&pageNum=${loadMore}&pageSize=20&type=1&userId=${userId}`
      )
      .then((response) => {
        if (loadMore >= 2) {
          setgameRecords((prev) => [...prev, response?.data?.data?.list]);
        } else {
          setgameRecords([response?.data?.data?.list]);
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [mainTabs, userInfo, loadMore, userId]);

  const close = () => {
    setHistory(false);
    overFlowAuto();
    setLoadMore(1);
  };

  return (
    <div className="App">
      <span id="extraContent"></span>
      <img className="header" src={header} alt="" />
      <TabButtons mainTabs={mainTabs} setMainTabs={setMainTabs} openHistory={openHistory} />
      <Footer />
      <LanguageBar setLanguage={setLanguage} language={language} />
      <Guide language={language} />
      <RewardsHistory
        history={history}
        setHistory={setHistory}
        close={close}
        gameRecords={gameRecords}
        loadMoreHistory={loadMoreHistory}
        isLoading={isLoading}
      />

      {showBtnUp && (
        <button className="btn-up" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={upBtn} alt="" />
        </button>
      )}
    </div>
  );
}

export default App;
