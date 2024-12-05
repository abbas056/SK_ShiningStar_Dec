import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { baserUrl } from "./baserUrl";

const ApiContext = createContext();
function EventProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [userOverll, setUserOverll] = useState([]);
  const [talentOverall, settalentOverall] = useState([]);
  const [hourlyCurrent, sethourlyCurrent] = useState([]);
  const [hourlyPrevious, sethourlyPrevious] = useState([]);
  const [today, setToday] = useState([]);
  const [yesterday, setYesterday] = useState([]);
  const [user, setUser] = useState({
    id: 0,
    uid: 0,
    token: undefined,
  });

  const isLive = false;
  const refreshApi = () => {
    setRefresh(!refresh);
  };

  const cd = new Date();
  // Get the previous day
  const pd = new Date(cd);
  pd.setDate(cd.getDate() - 1);
  // Function to format a date in "YYYY-MM-DD" format
  const formatDate = (date) => {
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const CurrentDate = formatDate(cd);
  const PreviousDate = formatDate(pd);

  const now = new Date();
  const hrs = now.getUTCHours();
  const currentHours = hrs === 0 ? 0 : hrs;
  const previousHours = hrs === 0 ? 23 : hrs - 1;

  useEffect(() => {
    try {
      // window.phone.getUserInfo(function (userInfo) {
      //   setUser({
      //     uid: userInfo.userId > 0 ? userInfo.userId : 0,
      //     token: userInfo.token !== "" ? userInfo.token : null,
      //   });
      // });
      setUser({
        uid: 596492375,
        token: "A1417DF32CD5234DCCADA230762EB713CF",
      });
    } catch (_error) {
      setUser({
        uid: 0,
        token: "",
      });
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (user.uid > 0) {
      axios
        .get(`${baserUrl}api/activity/shiningStar2024/getUserEventInfo?userId=${user.uid}`)
        .then((response) => {
          setUserInfo(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false); // Ensure loading state is handled even on error
        });
    }
  }, [user, refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20241213_shining&rankIndex=11&pageNum=1&pageSize=20`)
      .then((response) => {
        setUserOverll(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Ensure loading state is handled even on error
      });
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20241213_shining&rankIndex=13&pageNum=1&pageSize=20`)
      .then((response) => {
        settalentOverall(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Ensure loading state is handled even on error
      });
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20241213_shining&rankIndex=12&pageNum=1&pageSize=20&dayIndex=${
          CurrentDate + `_` + currentHours
        }`
      )
      .then((response) => {
        sethourlyCurrent(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Ensure loading state is handled even on error
      });
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20241213_shining&rankIndex=12&pageNum=1&pageSize=20&dayIndex=${
          CurrentDate + `_` + previousHours
        }`
      )
      .then((response) => {
        sethourlyPrevious(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Ensure loading state is handled even on error
      });
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api-gateway-dev-sk.mikktv.xyz/api/actor/shining/star/leaderboard/getShiningStarRankingList?date=${CurrentDate}`, {
        headers: {
          userId: `${user.uid}`,
        },
      })
      .then((response) => {
        setToday(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Ensure loading state is handled even on error
      });
  }, [user, refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api-gateway-dev-sk.mikktv.xyz/api/actor/shining/star/leaderboard/getShiningStarRankingList?date=${PreviousDate}`, {
        headers: {
          userId: `${user.uid}`,
        },
      })
      .then((response) => {
        setYesterday(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Ensure loading state is handled even on error
      });
  }, [user, refresh]);

  return (
    <div>
      <ApiContext.Provider
        value={{
          isLoading,
          setIsLoading,
          refreshApi,
          userId: user?.uid,
          userToken: user?.token,
          userInfo: userInfo?.data,
          isLive,
          userOverll: userOverll?.data,
          talentOverall: talentOverall?.data,
          hourlyCurrent: hourlyCurrent?.data,
          hourlyPrevious: hourlyPrevious?.data,
          today: today?.data,
          yesterday: yesterday?.data,
          CurrentDate,
          PreviousDate,
          currentHours,
          previousHours,
        }}
      >
        {children}
      </ApiContext.Provider>
    </div>
  );
}

export { ApiContext, EventProvider };
