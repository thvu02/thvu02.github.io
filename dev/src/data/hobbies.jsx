const HOBBIES = [
  {
    id: "bowling",
    title: "Bowling",
    description:
      "I LOVE bowling. It's simple but can get complex if you dig into it: oil patterns, ball dynamics, lane conditions. I enjoy the social aspect of bowling and the personal challenge of improving my game.",
    media: [
      { type: "youtube", videoId: "1oCDQC1D5ew" },
      { type: "image", src: "images/bowling_highscore.JPG", alt: "bowling high score" },
    ],
  },
  {
    id: "vlogging",
    title: "Vlogging",
    description:
      "I used to have a vlog series called vuLOGS. I want to record memorable moments and share them with friends and family. I also enjoy the process of filming and editing. The specific type of content I want to create is still evolving. Maybe I'll do travel vlogs, tech videos, or something else entirely.",
    media: [
      { type: "youtube", videoId: "L0DnFY5hYEE" },
      { type: "youtube", videoId: "EDtbkcbVLw4" },
      { type: "youtube", videoId: "0SSmMiNXvnA" },
    ],
  },
  {
    id: "food",
    title: "Food",
    description:
      <>I love trying (and ranking) new foods and drinks, so much so I created an app to support my boba obsession (<a href="https://play.google.com/store/apps/details?id=com.bobatier.app" target="_blank" rel="noopener noreferrer" style={{ color: "#BFA181" }}>BobaTier</a>). I'm constantly exploring new boba shops, tasting food from different cultures, buying sweet wines, and trying not to burn my kitchen down.</>,
    media: [
      { type: "image", src: "images/ramen.JPG", alt: "homemade ramen muginae" },
      { type: "youtube", videoId: "iKTGZFAiluM" },
      { type: "youtube", videoId: "-hiNH7yORxU" },
    ],
  },
  {
    id: "video-games",
    title: "Video Games",
    description:
      "I enjoy FPS and Souls games. Some recent ones include Valorant and Elden Ring. Gaming is how I unwind and connect with faraway friends. I also enjoy the mini-dopamine hits when I make a good play.",
    media: [
      { type: "image", src: "images/elden_ring.png", alt: "elden ring" },
      { type: "image", src: "images/valorant.png", alt: "valorant rank" },
    ],
  },
];

export default HOBBIES;
