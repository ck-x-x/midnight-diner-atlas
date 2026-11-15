# 深夜食堂料理圖鑑

日劇《深夜食堂》的粉絲向料理筆記：每道料理一頁，標示它出現在第幾部第幾集，並附上在家就能做的做法。每新播出一集便可以按照同一套格式新增料理頁。

**網站：<https://ck-x-x.github.io/midnight-diner-atlas/>**

這是非官方的個人筆記，不使用任何劇照、海報、角色圖像或台詞。

## 網站內容

- 首頁以卡片列出所有料理，可依「播出的部」或「料理類型」篩選。
- 每道料理頁的格式完全相同：劇中登場、材料（1 人份）、做法、小訣竅。
- 進入首頁時會先播放一段入口開場影片，同一個分頁只出現一次。

## 目前收錄

第 1 部（2009）全 10 集：

| 集數 | 料理 | 日文標題 | 類型 |
|---|---|---|---|
| 第 1 集 | [章魚紅香腸與玉子燒](https://ck-x-x.github.io/midnight-diner-atlas/dishes/s1e01-red-wiener-tamagoyaki.html) | 赤いウインナーと卵焼き | 小菜 |
| 第 2 集 | [貓飯](https://ck-x-x.github.io/midnight-diner-atlas/dishes/s1e02-neko-manma.html) | 猫まんま | 飯類 |
| 第 3 集 | [茶泡飯](https://ck-x-x.github.io/midnight-diner-atlas/dishes/s1e03-ochazuke.html) | お茶漬け | 飯類 |
| 第 4 集 | [馬鈴薯沙拉](https://ck-x-x.github.io/midnight-diner-atlas/dishes/s1e04-potato-salad.html) | ポテトサラダ | 小菜 |
| 第 5 集 | [奶油飯](https://ck-x-x.github.io/midnight-diner-atlas/dishes/s1e05-butter-rice.html) | バターライス | 飯類 |
| 第 6 集 | [豬排丼](https://ck-x-x.github.io/midnight-diner-atlas/dishes/s1e06-katsudon.html) | カツ丼 | 飯類 |
| 第 7 集 | [雞蛋三明治](https://ck-x-x.github.io/midnight-diner-atlas/dishes/s1e07-egg-sandwich.html) | タマゴサンド | 輕食 |
| 第 8 集 | [醬汁炒麵](https://ck-x-x.github.io/midnight-diner-atlas/dishes/s1e08-sauce-yakisoba.html) | ソース焼きそば | 麵類 |
| 第 9 集 | [烤竹莢魚一夜干](https://ck-x-x.github.io/midnight-diner-atlas/dishes/s1e09-aji-no-hiraki.html) | アジの開き | 小菜 |
| 第 10 集 | [拉麵](https://ck-x-x.github.io/midnight-diner-atlas/dishes/s1e10-ramen.html) | ラーメン | 麵類 |

## 技術

- 純 HTML / CSS / 原生 JavaScript，沒有框架、建置工具或外部資源。
- 不需要安裝：下載後雙擊 `index.html` 就能看，也可以直接部署到 GitHub Pages。
- 所有料理資料集中在 `data/dishes.js`，首頁卡片、篩選按鈕與集數標示都由它自動產生。

```
/
├── index.html          首頁：料理卡片與篩選
├── assets/
│   ├── style.css       全站樣式
│   ├── site.js         全站腳本
│   └── entrance.mp4    入口開場影片
├── data/
│   └── dishes.js       料理清單
└── dishes/
    ├── _template.html  料理頁範本
    └── s<部>e<集>-<英文名>.html
```

## 新增一道料理

1. 查證料理出現的部、集與該集日文標題。
2. 在 `data/dishes.js` 的 `DISHES` 加一筆資料。
3. 複製 `dishes/_template.html` 為 `dishes/<id>.html`，填寫四個段落。

完整的格式與寫作規則寫在 [`CLAUDE.md`](CLAUDE.md)，AI 助手讀完後即可依同一套格式新增料理頁。
