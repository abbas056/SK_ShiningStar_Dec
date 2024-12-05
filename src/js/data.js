import { baserUrl } from "./baserUrl";

export const rank1TalentRewards = {
  desc: (
    <>
      New Gala Profile Frame
      <span className="c-yellow"> (x2 months) </span>
      Dazzling Diva entrance
      <span className="c-yellow"> (x2 months) </span>
      Follower Card
      <span className="c-yellow"> (x15 days) </span>
      $200 Gems
    </>
  ),
  frames: [
    { id: 1, pic: `${baserUrl}streamkar/rewards/galaComingSoon.png` },
    { id: 2, pic: `${baserUrl}streamkar/rewards/divaEntrance.png` },
    { id: 3, pic: `${baserUrl}streamkar/rewards/followerCard.png` },
    { id: 4, pic: `${baserUrl}streamkar/rewards/gems.png` },
  ],
};
export const rank2TalentRewards = {
  desc: (
    <>
      New Gala Profile Frame
      <span className="c-yellow"> (x1 month) </span>
      Dazzling Diva entrance
      <span className="c-yellow"> (x1 month) </span>
      $100 Gems
    </>
  ),
  frames: [
    { id: 1, pic: `${baserUrl}streamkar/rewards/galaComingSoon.png` },
    { id: 2, pic: `${baserUrl}streamkar/rewards/divaEntrance.png` },
    { id: 4, pic: `${baserUrl}streamkar/rewards/gems.png` },
  ],
};
export const rank3TalentRewards = {
  desc: (
    <>
      New Gala Profile Frame
      <span className="c-yellow"> (x1 month) </span>
      Dazzling Diva entrance
      <span className="c-yellow"> (x1 month) </span>
      $100 Gems
    </>
  ),
  frames: [
    { id: 1, pic: `${baserUrl}streamkar/rewards/galaComingSoon.png` },
    { id: 2, pic: `${baserUrl}streamkar/rewards/divaEntrance.png` },
    { id: 4, pic: `${baserUrl}streamkar/rewards/gems.png` },
  ],
};
export const rank4TalentRewards = {
  desc: (
    <>
      New Gala Profile Frame
      <span className="c-yellow"> (x15 days) </span>
      Dazzling Diva entrance
      <span className="c-yellow"> (x15 days) </span>
      $50 Gems
    </>
  ),
  frames: [
    { id: 1, pic: `${baserUrl}streamkar/rewards/galaComingSoon.png` },
    { id: 2, pic: `${baserUrl}streamkar/rewards/divaEntrance.png` },
    { id: 4, pic: `${baserUrl}streamkar/rewards/gems.png` },
  ],
};
export const rank5TalentRewards = {
  desc: (
    <>
      New Gala Profile Frame
      <span className="c-yellow"> (x15 days) </span>
      Dazzling Diva entrance
      <span className="c-yellow"> (x15 days) </span>
      $50 Gems
    </>
  ),
  frames: [
    { id: 1, pic: `${baserUrl}streamkar/rewards/galaComingSoon.png` },
    { id: 2, pic: `${baserUrl}streamkar/rewards/divaEntrance.png` },
    { id: 4, pic: `${baserUrl}streamkar/rewards/gems.png` },
  ],
};

export const rank1UserRewards = {
  desc: (
    <>
      New Gala Profile Frame
      <span className="c-yellow"> (x2 months) </span>
      HERO entrance
      <span className="c-yellow"> (x2 months) </span>
    </>
  ),
  frames: [{ id: 1, pic: `${baserUrl}streamkar/rewards/galaComingSoon.png` }, { id: 2, pic: `${baserUrl}streamkar/rewards/heroEntrance.png` }, ,],
};
export const rank2UserRewards = {
  desc: (
    <>
      New Gala Profile Frame
      <span className="c-yellow"> (x1 month) </span>
      HERO entrance
      <span className="c-yellow"> (x1 month) </span>
    </>
  ),
  frames: [
    { id: 1, pic: `${baserUrl}streamkar/rewards/galaComingSoon.png` },
    { id: 2, pic: `${baserUrl}streamkar/rewards/heroEntrance.png` },
  ],
};
export const rank3UserRewards = {
  desc: (
    <>
      New Gala Profile Frame
      <span className="c-yellow"> (x1 month) </span>
      HERO entrance
      <span className="c-yellow"> (x1 month) </span>
    </>
  ),
  frames: [
    { id: 1, pic: `${baserUrl}streamkar/rewards/galaComingSoon.png` },
    { id: 2, pic: `${baserUrl}streamkar/rewards/heroEntrance.png` },
  ],
};
export const rank4UserRewards = {
  desc: (
    <>
      New Gala Profile Frame
      <span className="c-yellow"> (x15 days) </span>
      HERO entrance
      <span className="c-yellow"> (x15 days) </span>
    </>
  ),
  frames: [
    { id: 1, pic: `${baserUrl}streamkar/rewards/galaComingSoon.png` },
    { id: 2, pic: `${baserUrl}streamkar/rewards/heroEntrance.png` },
  ],
};
export const rank5UserRewards = {
  desc: (
    <>
      New Gala Profile Frame
      <span className="c-yellow"> (x15 days) </span>
      HERO entrance
      <span className="c-yellow"> (x15 days) </span>
    </>
  ),
  frames: [
    { id: 1, pic: `${baserUrl}streamkar/rewards/galaComingSoon.png` },
    { id: 2, pic: `${baserUrl}streamkar/rewards/heroEntrance.png` },
  ],
};

export var guideContent = {
  English: {
    topText1: <h1 className="h1 t-align-center">Ranking for Talents</h1>,

    heading1: <h1 className="h1">1. Daily Leaderboard Rankings (August 12th - December 31st)</h1>,
    desc1: (
      <ul>
        <li>Each day, the top 5 talents on the Daily Leaderboard will earn bonus points.</li>
        <li>Rankings for this leaderboard are determined by the performance on SK’s Shining Star leaderboard in the app.</li>
      </ul>
    ),
    heading2: <h1 className="h1">2. Daily Bonus Points </h1>,
    desc2: (
      <ul>
        <li>Points awarded to the top 5 talents based on daily ranks are as follows:</li>
      </ul>
    ),
    thLeft: <p>Rank</p>,
    thRight: <p>Points</p>,
    tdLeft_1: <p>1st</p>,
    tdLeft_2: <p>2nd</p>,
    tdLeft_3: <p>3rd</p>,
    tdLeft_4: <p>4th</p>,
    tdLeft_5: <p>5th</p>,

    tdRight_1: <p>100</p>,
    tdRight_2: <p>75</p>,
    tdRight_3: <p>65</p>,
    tdRight_4: <p>50</p>,
    tdRight_5: <p>30</p>,

    tableBottom: (
      <ul>
        <li>These points will be counted towards the overall rankings of the SK Gala’s Shining Star.</li>
      </ul>
    ),
    noteText: (
      <p>
        <b> Note:</b> Talents must secure a place in the top 5 daily leaderboard to accumulate daily bonus points toward the overall SK Gala’s Shining
        Star rankings.
      </p>
    ),
    heading3: <h1 className="h1">3. Hourly Leaderboard Bonus Points (December 13th - December 31st)</h1>,
    desc3: (
      <ul>
        <li>During this period, an hourly leaderboard will track the talents’ performance based on the Gems received from event-specific gifts.</li>
        <li>
          Only talents who have been featured in the top 5 of the daily leaderboard between August 12th and December 31st are eligible for the hourly
          bonus points.
        </li>
      </ul>
    ),

    heading4: <h1 className="h1">4. Hourly Bonus Points</h1>,
    desc4: (
      <ul>
        <li>The top 5 talents on the hourly leaderboard can earn points as follows:</li>
      </ul>
    ),

    th2Left: <p>Rank</p>,
    th2Right: <p>Points</p>,
    td2Left_1: <p>1st</p>,
    td2Left_2: <p>2nd</p>,
    td2Left_3: <p>3rd - 5th</p>,

    td2Right_1: <p>10</p>,
    td2Right_2: <p>7</p>,
    td2Right_3: <p>5</p>,

    noteText2: (
      <p>
        <b>Note:</b> Talents must appear in the top 5 of the daily leaderboard before being eligible for hourly leaderboard points. If a talent
        appears on the hourly leaderboard prior to ranking in the daily top 5, those hourly points will not count. <br /> Example: Talent "Apple"
        ranks 1st on the December 15 hourly leaderboard but has not previously placed in the daily top 5. Even if "Apple" ranks in the daily top 5
        later on December 15, her hourly points will still not be counted.
      </p>
    ),

    heading5: <h1 className="h1">5. Beans pot Earnings for Top 5 Talents</h1>,
    desc5: (
      <ul>
        <li>Alongside bonus points, the top 5 talents on the hourly leaderboard will receive Beans from the Beans Pot. </li>
        <li>Distribution of these Beans is based on the ratio of gems earned during that hour.</li>
      </ul>
    ),

    noteText3: (
      <p>
        <b>Note:</b> Talents earn Beans proportionally based on their hourly gem earnings, providing an extra incentive to perform well consistently.
      </p>
    ),

    heading6: <h1 className="h1">6. Overall Leaderboard Calculation:</h1>,
    desc6: (
      <ul>
        <li>Every point earned from daily and hourly rankings counts toward the overall SK Gala’s Shining Star leaderboard. </li>
        <li>The event’s structure ensures cumulative point accumulation and active engagement across both daily and hourly ranks.</li>
      </ul>
    ),
    topText2: <h1 className="h1 t-align-center">DERBY OF DARTS</h1>,
    desc7: (
      <ul>
        <li>
          To start playing, you need to spend <b>10,000</b> beans.
        </li>
        <li>
          For every <b>10,000</b> beans spent, you will get one chance to aim and throw the dart.
        </li>
      </ul>
    ),
    heading8: <h1 className="h1">Where can you see how many darts you have?</h1>,
    desc8: (
      <ul>
        <li>There will be a section at the top where you can see how many darts you have got according to beans spent. </li>
      </ul>
    ),
    heading9: <h1 className="h1">How do I start playing?</h1>,
    desc9: (
      <ul>
        <li>To start playing, you have to type the number of darts you want to play with. </li>
        <li>
          And as soon as you click on the <b>“SHOOT”</b> button, an animation of our mascot aiming and throwing the dart/darts will be shown.
        </li>
        <li>
          The darts will get <b>stuck</b> on any of the <b>rewards</b>, and you will be given that reward.
        </li>
      </ul>
    ),
    heading10: <h1 className="h1">Daily Scratch Card:</h1>,
    desc10: (
      <ul>
        <li>Users and talents above LVL3 will have a chance to win something daily from the scratch card.</li>
        <li>
          You need to send at least one Spaceship gift to be eligible for the rewards. Similarly, talents need to receive at least one event gift to
          be eligible for reward.
        </li>
        <li>To redeem any missed day’s scratch card, users have to pay 25,000 beans per missed day. </li>
        <li>5 lucky users and 5 lucky talents will be selected as the lucky winners randomly at the end of the event!</li>
      </ul>
    ),
    heading11: <h1 className="h1">For Talents:</h1>,
    desc11: (
      <ul>
        <li>The top 2 talents every hour will be shown in the room icon for the upcoming hour.</li>
        <li>The top 3 talents will win overall rewards.</li>
      </ul>
    ),
  },

  Urdu: {
    topText1: <h1 className="h1 t-align-center">Ranking for Talents</h1>,
    heading1: <h1 className="h1">1. Daily Leaderboard Rankings (August 12th - December 31st)</h1>,
    desc1: (
      <ul>
        <li>Har din, Daily Leaderboard ke top 5 talents ko bonus points milenge.</li>
        <li>Is leaderboard ki rankings, app par chal rahe Shining Star leaderboard ke performance ke basis par decide hogi. </li>
      </ul>
    ),
    heading2: <h1 className="h1">2. Daily Bonus Points </h1>,
    desc2: (
      <ul>
        <li>Daily ranks ke basis par top 5 talents ko ye points diye jayenge:</li>
      </ul>
    ),
    thLeft: <p>Rank</p>,
    thRight: <p>Points</p>,
    tdLeft_1: <p>1st</p>,
    tdLeft_2: <p>2nd</p>,
    tdLeft_3: <p>3rd</p>,
    tdLeft_4: <p>4th</p>,
    tdLeft_5: <p>5th</p>,

    tdRight_1: <p>100</p>,
    tdRight_2: <p>75</p>,
    tdRight_3: <p>65</p>,
    tdRight_4: <p>50</p>,
    tdRight_5: <p>30</p>,

    tableBottom: (
      <ul>
        <li>Ye points SK Gala ke Shining Star ke overall rankings mein count honge.</li>
      </ul>
    ),
    noteText: (
      <p>
        <b>Note:</b> Talents ko daily leaderboard ke top 5 mein place secure karna hoga taki wo daily bonus points ko overall SK Gala ke Shining Star
        rankings mein add kar sakein.
      </p>
    ),
    heading3: <h1 className="h1">3. Hourly Leaderboard Bonus Points (December 13th - December 31st)</h1>,
    desc3: (
      <ul>
        <li>Is period ke dauraan, ek hourly leaderboard track karega talents ka performance event-specific gifts se mile Gems ke basis par.</li>
        <li>
          Sirf wahi talents jo August 12 aur December 31 ke beech daily leaderboard ke top 5 mein feature ho chuke hain, hourly bonus points ke liye
          eligible hain.
        </li>
      </ul>
    ),
    heading4: <h1 className="h1">4. Hourly Bonus Points</h1>,
    desc4: (
      <ul>
        <li>Hourly leaderboard ke top 5 talents ko ye points milenge:</li>
      </ul>
    ),

    th2Left: <p>Rank</p>,
    th2Right: <p>Points</p>,
    td2Left_1: <p>1st</p>,
    td2Left_2: <p>2nd</p>,
    td2Left_3: <p>3rd - 5th</p>,

    td2Right_1: <p>10</p>,
    td2Right_2: <p>7</p>,
    td2Right_3: <p>5</p>,

    noteText2: (
      <p>
        <b>Note:</b> Talents ko daily leaderboard ke top 5 mein appear hona zaroori hai pehle, tabhi wo hourly leaderboard points ke liye eligible
        honge. Agar koi talent hourly leaderboard pe appear ho aur daily top 5 mein rank na ho, toh uske hourly points count nahi honge. <br />
        Example: Talent "Apple" agar December 15 ke hourly leaderboard mein 1st rank par ho, lekin usne pehle daily top 5 mein place nahi kiya, toh
        uske hourly points count nahi honge, chahe wo baad mein daily top 5 mein aa bhi jaye.
      </p>
    ),
    heading5: <h1 className="h1">5. Beans pot Earnings for Top 5 Talents</h1>,
    desc5: (
      <ul>
        <li>Bonus points ke sath, hourly leaderboard ke top 5 talents Beans bhi earn karenge Beans Pot se.</li>
        <li>Beans ka distribution, us ghante mein earned Gems ke ratio ke basis par hoga.</li>
      </ul>
    ),
    noteText3: (
      <p>
        <b>Note:</b>Talents apne hourly gem earnings ke hisaab se proportionally Beans earn karenge, jo unhe consistently perform karne ka extra
        incentive deta hai.
      </p>
    ),
    heading6: <h1 className="h1">6. Overall Leaderboard Calculation:</h1>,
    desc6: (
      <ul>
        <li>Daily aur hourly rankings se earned har point SK Gala ke Shining Star leaderboard mein count hoga.</li>
        <li>Event ka structure cumulative point accumulation aur active engagement ensure karta hai daily aur hourly ranks ke through.</li>
      </ul>
    ),
    topText2: <h1 className="h1 t-align-center">DERBY OF DARTS</h1>,
    desc7: (
      <ul>
        <li>Khelna shuru karne ke liye 10,000 beans spend karne hoge. </li>
        <li>
          Harr <b>10,000</b> beans spend karne pe aapko ek chance milega aim karke dart ko throw karne ka.
        </li>
      </ul>
    ),
    heading8: <h1 className="h1">Apke darts throw karne ke chances kaha check kare?</h1>,
    desc8: (
      <ul>
        <li>TOP pe ek section hoga jidhar aap dekh sakte ho aapko kitne darts mile hai beans spent karne ke hisaab se.</li>
      </ul>
    ),
    heading9: <h1 className="h1">Khel kaise start karna hai?</h1>,
    desc9: (
      <ul>
        <li>Khel start karne ke liye aapko kitne darts chahiye uska number type karna hoga.</li>
        <li>
          Aur jaise hi aap, <b>“SHOOT”</b> button pe click karoge, ek animation dikhega jisme humara mascot aim karke dart/darts throw karte hue
          dikhega.
        </li>
        <li>Woh dart/darts jaake kisi bhi reward pe stick hojayege aur aapko woh reward diya jayega.</li>
      </ul>
    ),
    heading10: <h1 className="h1">Daily Scratch Card:</h1>,
    desc10: (
      <ul>
        <li>Users aur talents ko mauka milega daily kuch na kuch jeetne ka SCRATCH CARD scratch karke.</li>
        <li>
          Aapko at least ek Spaceship gift bhejna hoga rewards ke liye eligible hone ke liye. Aur waise hi talent ko kam se kam ek event gift receive
          karna hoga rewards ke liye eligible hone.
        </li>
        <li>Koi bhi missed day’s ka chance redeem karne ke liye, users ko 25,000 beans pay karne hoge per missed day ke.</li>
        <li>5 lucky users aur 5 lucky talents ko randomly select kiya jayega lucky winners ke jaise event ke end mein!</li>
      </ul>
    ),
    heading11: <h1 className="h1">Talents ke liye:</h1>,
    desc11: (
      <ul>
        <li>Top 2 talents ko every hour ke liye room icon pe dikhaya jayega upcoming hour ke liye. </li>
        <li>Top 3 talents ko overall rewards mil sakte hai.</li>
      </ul>
    ),
  },
};
export function rewardImages(rewDesc) {
  var rewImg;
  if (rewDesc == "phantom Entrance" || rewDesc == "Phantom entrance" || rewDesc == "Phantom Entrance") {
    rewImg = baserUrl + "streamkar/rewards/phantom.png";
  } else if (rewDesc == "Victory Slide entrance" || rewDesc == "Victory slide Entrance") {
    rewImg = baserUrl + "streamkar/rewards/victorySlide.png";
  } else if (rewDesc == "Thunder Audio broadcast theme") {
    rewImg = baserUrl + "streamkar/rewards/thunderRoomskin.png";
  } else if (rewDesc == "VIP") {
    rewImg = baserUrl + "streamkar/rewards/vip.png";
  } else if (rewDesc == "SVIP") {
    rewImg = baserUrl + "streamkar/rewards/svip.png";
  } else if (rewDesc == "Beans" || rewDesc == "beans") {
    rewImg = baserUrl + "streamkar/rewards/beanbag.png";
  } else if (rewDesc == "Premier Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/premierFrame.png";
  } else if (rewDesc == "Kingpin Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/kingpinFrame.png";
  } else if (rewDesc == "Rusty Ranger entrance") {
    rewImg = baserUrl + "streamkar/rewards/rustyRanger.png";
  } else if (rewDesc == "Monarch Audio Theme") {
    rewImg = baserUrl + "streamkar/rewards/monarchRoom.png";
  } else if (rewDesc == "Spaceship entrance") {
    rewImg = baserUrl + "streamkar/rewards/spaceship.png";
  } else if (rewDesc == "Sea Wolf Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/seawolfFrame.png";
  } else if (rewDesc == "Fury Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/furyFrame.png";
  } else if (rewDesc == "Discoverer Audio Theme") {
    rewImg = baserUrl + "streamkar/rewards/discovererAudioTheme.png";
  } else if (rewDesc == "Safari Champion Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/safariDesertframe.png";
  } else if (rewDesc == "Voyager Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/voyagerProfileFrame.png";
  } else if (rewDesc == "Bunny profile frame") {
    rewImg = baserUrl + "streamkar/rewards/bunnyFrame.gif";
  } else if (rewDesc == "Fish World audio theme") {
    rewImg = baserUrl + "streamkar/rewards/fishWorldRoomskin.png";
  } else {
    rewImg = baserUrl + "streamkar/rewards/noRew.png";
  }
  return rewImg;
}
export const eventGifts = [
  {
    id: 1,
    img: `${baserUrl}streamkar/gifts/40001488.png`,
    name: "Red Rose bouquet",
    cost: 1000,
  },
  {
    id: 2,
    img: `${baserUrl}streamkar/gifts/40001663.png`,
    name: "Combat",
    cost: 30000,
  },
];
