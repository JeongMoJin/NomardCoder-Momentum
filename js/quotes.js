const quotes = [
    {
        quote: "생각이란, 우리가 그것을 따라 그대로 사는 생각만이 가치가 있다.",
        author: "헤르만 헤세",
    },
    {
        quote: "사랑은 어떤 대상을 다만 선택하는 것이 아니라 당신 속에 사랑할 수 있는 능력이 있느냐에 달려있습니다.",
        author: "에리히프롬",
    },
    {
        quote: "디자인이란 현재 상황을 더 나은 방향으로 바꾸는 것이다.",
        author: "하버트 사이먼",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테",
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote: "건강에 대한 지나친 걱정만큼 건강에 치명적인 것은 없다.",
        author: "벤자민 프랭클린",
    },
    {
        quote: "오늘을 붙들어라. 되도록이면 내일을 의지하지 말라. 그날 그날이 일년 중 최선의 날이다.",
        author: "에머슨",
    },
    {
        quote: "시간을 얻는 사람은 만사를 얻는다.",
        author: "디즈레일리",
    },
    {
        quote: "속이는 말로 재물을 모으는 것은 죽음을 구하는 것이다",
        author: "성경",
    },
];

const author = document.querySelector("#quote span:last-child");
const quote = document.querySelector("#quote span:first-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;