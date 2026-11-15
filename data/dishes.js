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
  },
  {
    id: "s2e01-red-wiener-again",
    name: "章魚紅香腸",
    jp: "再び赤いウインナー",
    season: 2,
    episode: 1,
    category: "side",
    minutes: 5,
    summary: "紅色小香腸切出八隻腳，下鍋煎到腳翹起來，就是那盤章魚香腸。"
  },
  {
    id: "s2e02-karaage-highball",
    name: "唐揚炸雞與高球",
    jp: "唐揚げとハイボール",
    season: 2,
    episode: 2,
    category: "fried",
    minutes: 30,
    summary: "醬油和薑蒜醃過的雞腿肉炸到酥脆，配一杯威士忌加蘇打水。"
  },
  {
    id: "s2e03-asari-sakamushi",
    name: "酒蒸蛤蜊",
    jp: "あさりの酒蒸し",
    season: 2,
    episode: 3,
    category: "side",
    minutes: 10,
    summary: "吐過沙的蛤蜊加酒燜到開口，撒上蔥花，連湯一起喝。"
  },
  {
    id: "s2e04-nikogori",
    name: "魚凍",
    jp: "煮こごり",
    season: 2,
    episode: 4,
    category: "side",
    minutes: 30,
    summary: "煮魚的湯汁放涼後自然結成凍，切塊放在熱飯上慢慢化開。"
  },
  {
    id: "s2e05-canned-pineapple-subuta",
    name: "鳳梨罐頭糖醋豬肉",
    jp: "缶詰",
    season: 2,
    episode: 5,
    category: "fried",
    minutes: 25,
    summary: "炸過的豬肉和蔬菜裹上糖醋醬，最後拌入罐頭鳳梨。"
  },
  {
    id: "s2e06-cream-stew",
    name: "奶油燉菜",
    jp: "クリームシチュー",
    season: 2,
    episode: 6,
    category: "soup",
    minutes: 35,
    summary: "雞肉、馬鈴薯和紅蘿蔔用牛奶白醬慢慢燉，冬天晚上的一盤。"
  },
  {
    id: "s2e07-hakusai-zuke",
    name: "醃白菜",
    jp: "白菜漬け",
    season: 2,
    episode: 7,
    category: "side",
    minutes: 20,
    summary: "大白菜用鹽、昆布和辣椒壓上兩三天，爽脆的家常醃菜。"
  },
  {
    id: "s2e08-hiyashi-chuka",
    name: "中華涼麵",
    jp: "冷やし中華",
    season: 2,
    episode: 8,
    category: "noodle",
    minutes: 15,
    summary: "冰過的麵鋪上蛋絲、小黃瓜和火腿，淋上酸甜醬油汁。"
  },
  {
    id: "s2e09-nikujaga",
    name: "馬鈴薯燉肉",
    jp: "肉じゃが",
    season: 2,
    episode: 9,
    category: "side",
    minutes: 30,
    summary: "肉片、馬鈴薯和洋蔥用醬油、砂糖煮到入味，放涼再熱味道更足。"
  },
  {
    id: "s2e10-gyoza",
    name: "煎餃",
    jp: "ギョーザ",
    season: 2,
    episode: 10,
    category: "fried",
    minutes: 40,
    summary: "豬絞肉拌高麗菜和韭菜包成餃子，加水燜過再煎出脆底。"
  },
  {
    id: "s3e01-menchi-katsu",
    name: "炸肉餅",
    jp: "メンチカツ",
    season: 3,
    episode: 1,
    category: "fried",
    minutes: 30,
    summary: "牛豬絞肉拌洋蔥捏成餅，裹上麵包粉炸到金黃，切開有肉汁。"
  },
  {
    id: "s3e02-pork-tomato-rolls",
    name: "豬五花番茄捲",
    jp: "豚バラトマト巻き",
    season: 3,
    episode: 2,
    category: "fried",
    minutes: 15,
    summary: "薄切豬五花捲住小番茄，煎到表面焦香、裡面的番茄發燙。"
  },
  {
    id: "s3e03-satoimo-squid-nimono",
    name: "小芋頭燉透抽",
    jp: "里いもとイカの煮もの",
    season: 3,
    episode: 3,
    category: "side",
    minutes: 35,
    summary: "小芋頭和透抽用醬油高湯一起煮，芋頭吸了海味，煮得鬆軟。"
  },
  {
    id: "s3e04-benishoga-tempura",
    name: "紅薑天婦羅",
    jp: "紅しょうがの天ぷら",
    season: 3,
    episode: 4,
    category: "fried",
    minutes: 15,
    summary: "醃紅薑裹上薄麵衣下鍋炸，酸、鹹、辣都有，是大阪的家常味。"
  },
  {
    id: "s3e05-harusame-salad",
    name: "冬粉沙拉",
    jp: "春雨サラダ",
    season: 3,
    episode: 5,
    category: "side",
    minutes: 15,
    summary: "冬粉拌小黃瓜、火腿和蛋絲，淋上醬油、醋與麻油調的醬汁。"
  },
  {
    id: "s3e06-roll-cabbage",
    name: "高麗菜捲",
    jp: "ロールキャベツ",
    season: 3,
    episode: 6,
    category: "soup",
    minutes: 45,
    summary: "燙軟的高麗菜葉包住絞肉餡，放進高湯裡小火慢慢煮。"
  },
  {
    id: "s3e07-shijimi-soup",
    name: "蜆湯",
    jp: "しじみ汁",
    season: 3,
    episode: 7,
    category: "soup",
    minutes: 10,
    summary: "蜆煮到開口，化入味噌，喝過酒的隔天早上來一碗。"
  },
  {
    id: "s3e08-kinpira-gobo",
    name: "金平牛蒡",
    jp: "きんぴらごぼう",
    season: 3,
    episode: 8,
    category: "side",
    minutes: 15,
    summary: "牛蒡和紅蘿蔔切絲，用麻油炒過，再以醬油和砂糖收乾。"
  },
  {
    id: "s3e09-liver-and-chives",
    name: "韭菜炒豬肝",
    jp: "レバにらとにらレバ",
    season: 3,
    episode: 9,
    category: "side",
    minutes: 20,
    summary: "豬肝先醃過、快煎起鍋，再和韭菜、豆芽大火炒在一起。"
  },
  {
    id: "s3e10-toshikoshi-soba",
    name: "跨年蕎麥麵",
    jp: "年越しそば",
    season: 3,
    episode: 10,
    category: "noodle",
    minutes: 15,
    summary: "熱高湯裡的蕎麥麵，放上蔥花和魚板，除夕夜吃一碗過年。"
  }
];
