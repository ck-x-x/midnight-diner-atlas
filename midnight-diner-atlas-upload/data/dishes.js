// 全站唯一的資料來源。格式說明見 CLAUDE.md 第 4 節。

const SEASONS = {
  1: "第 1 部（2009）",
  2: "第 2 部（2011）",
  3: "第 3 部（2014）",
  4: "第 4 部 Tokyo Stories（2016）",
  5: "第 5 部 Tokyo Stories 2（2019）"
};

const CATEGORIES = {
  rice: "飯類",
  side: "小菜",
  noodle: "麵類",
  fried: "煎炸",
  soup: "湯鍋",
  light: "輕食"
};

const DISHES = [
  {
    id: "s1e01-red-wiener-tamagoyaki",
    name: "章魚紅香腸與玉子燒",
    jp: "赤いウインナーと卵焼き",
    season: 1,
    episode: 1,
    category: "side",
    minutes: 10,
    summary: "切成章魚形狀的紅色小香腸，配上偏甜的日式煎蛋捲。"
  },
  {
    id: "s1e02-neko-manma",
    name: "貓飯",
    jp: "猫まんま",
    season: 1,
    episode: 2,
    category: "rice",
    minutes: 2,
    summary: "熱白飯鋪上柴魚片，淋一點醬油，最簡單的一碗飯。"
  },
  {
    id: "s1e03-ochazuke",
    name: "茶泡飯",
    jp: "お茶漬け",
    season: 1,
    episode: 3,
    category: "rice",
    minutes: 5,
    summary: "白飯放上梅子、鮭魚或鱈魚子，沖入熱茶的收尾料理。"
  },
  {
    id: "s1e04-potato-salad",
    name: "馬鈴薯沙拉",
    jp: "ポテトサラダ",
    season: 1,
    episode: 4,
    category: "side",
    minutes: 30,
    summary: "保留一點顆粒的馬鈴薯泥，拌入小黃瓜、紅蘿蔔與美乃滋。"
  },
  {
    id: "s1e05-butter-rice",
    name: "奶油飯",
    jp: "バターライス",
    season: 1,
    episode: 5,
    category: "rice",
    minutes: 3,
    summary: "剛煮好的白飯埋進一塊奶油，融化後滴上幾滴醬油。"
  },
  {
    id: "s1e06-katsudon",
    name: "豬排丼",
    jp: "カツ丼",
    season: 1,
    episode: 6,
    category: "rice",
    minutes: 25,
    summary: "炸得酥脆的豬排，放進洋蔥高湯裡淋上蛋液半熟起鍋，鋪在熱飯上。"
  },
  {
    id: "s1e07-egg-sandwich",
    name: "雞蛋三明治",
    jp: "タマゴサンド",
    season: 1,
    episode: 7,
    category: "light",
    minutes: 15,
    summary: "水煮蛋拌入美乃滋與少許芥末，夾進塗了奶油的柔軟白吐司裡。"
  },
  {
    id: "s1e08-sauce-yakisoba",
    name: "醬汁炒麵",
    jp: "ソース焼きそば",
    season: 1,
    episode: 8,
    category: "noodle",
    minutes: 15,
    summary: "豬五花、高麗菜與油麵大火快炒，淋上濃郁炒麵醬，再蓋一顆荷包蛋。"
  },
  {
    id: "s1e09-aji-no-hiraki",
    name: "烤竹莢魚一夜干",
    jp: "アジの開き",
    season: 1,
    episode: 9,
    category: "side",
    minutes: 15,
    summary: "剖開醃漬風乾的竹莢魚，烤到魚皮微焦、魚肉多汁，配白飯吃最剛好。"
  },
  {
    id: "s1e10-ramen",
    name: "拉麵",
    jp: "ラーメン",
    season: 1,
    episode: 10,
    category: "noodle",
    minutes: 10,
    summary: "煮好熱騰騰的醬油拉麵，擺上叉燒、筍乾與海苔，就是深夜裡的一碗麵。"
  }
];
