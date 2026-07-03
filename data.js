

//q = question; a = answer; r = result index;

let data1 = [
    {
        "q": "ข้อคิดสำคัญที่สุดของเรื่องนันทิวิสาลชาดกคือข้อใด",
        "a": ["ความขี้เกียจทำให้มีเพื่อนเยอะ", "การพูดจาสุภาพก่อให้เกิดผลดี", "การเป็นแว้นสก้อยทำให้ร่ำรวย", "การเลี้ยงสัตว์ต้องใช้ความอดทน"],
        "r": 2,
        "t": 1
    },
    {
        "q": "เพราะเหตุใดโคนันทิวิสาลจึงไม่ยอมลากเกวียนในครั้งแรก",
        "a": ["เพราะขี้เกียจ", "เพราะเกวียนหนักเกินไป", "เพราะไม่พอใจที่พราหมณ์ใช้คำหยาบ", "เพราะเบื่อหน้าพราหมณ์"],
        "r": 3,
        "t": 1
    },
    {
        "q": "เมื่อพราหมณ์เปลี่ยนมาพูดจาไพเราะ ผลที่เกิดขึ้นคือข้อใด",
        "a": ["โคหนีไป", "โคลากเกวียนสำเร็จ", "โคเต้นร้องเพลงย้าย่ายา", "พราหมณ์แพ้พนันอีกครั้ง"],
        "r": 2,
        "t": 1
    },
    {
        "q": "ข้อใดสะท้อนลักษณะของโคนันทิวิสาลได้ดีที่สุด",
        "a": ["เจ้าเล่ห์", "กตัญญูรู้คุณ", "ดื้อรั้น", "หล่อเท่ห์"],
        "r": 2,
        "t": 1
    },
    {
        "q": "หากนำข้อคิดจากเรื่องไปใช้ในชีวิตประจำวัน ควรปฏิบัติอย่างไร",
        "a": ["พูดตรงโดยไม่สนใจความรู้สึกผู้อื่น", "พูดสุภาพและให้เกียรติผู้อื่น", "ไม่พูดกับใครเลย", "ใช้ความหล่อให้สาวเปย์"],
        "r": 2,
        "t": 1
    }
];

let data2 = [
    {
        "q": "พญาหงส์ทองมาเยี่ยมครอบครัวเพราะเหตุใด",
        "a": ["ต้องการอวดความร่ำรวย", "ระลึกชาติได้ว่าเคยเป็นสามี และต้องการช่วยครอบครัว", "กลับมาคบกับภรรยาเก่า", "ต้องการขโมยอาหาร"],
        "r": 2,
        "t": 2
    },
    {
        "q": "เพราะเหตุใดนางพราหมณีจึงถอนขนพญาหงส์ทองทั้งหมด",
        "a": ["กลัวพญาหงส์บินหนี", "ต้องการนำไปขายครั้งเดียวให้ได้เงินมาก", "ต้องการเอาไปทำยาเสน่ห์", "ต้องเอาไปตั้งโชว์"],
        "r": 2,
        "t": 2
    },
    {
        "q": "ผลของความโลภของนางพราหมณีคือข้อใด",
        "a": ["ทรงเอเลิกชอบ", "พญาหงส์ทองยังให้ขนทองต่อไป", "ขนทองกลายเป็นขนธรรมดา และพญาหงส์ไม่กลับมาอีก", "ลูกสาวได้รับมรดก"],
        "r": 3,
        "t": 2
    },
    {
        "q": "ข้อใดเป็นข้อคิดสำคัญของสุวัณณหังสชาดก",
        "a": ["ความโลภทำให้ลาภหาย", "คนดีมักถูกเอาเปรียบ", "ความกล้าหาญนำมาซึ่งชัยชนะ", "เห็บอดออมเพื่อซื้อสกุชชี่"],
        "r": 1,
        "t": 2
    },
    {
        "q": "หากนางพราหมณีไม่ถอนขนทั้งหมด ผลที่น่าจะเกิดขึ้นมากที่สุดคือข้อใด",
        "a": ["ครอบครัวได้รับความช่วยเหลืออย่างต่อเนื่อง", "นางพราหมณีเลิกเป็นทรงซ้อ", "ลูกสาวทั้งสามจากไป", "ครอบครัวล้มละลาย"],
        "r": 1,
        "t": 2
    }
];

let data3 = [
    {
        "q": "วันวิสาขบูชาตรงกับเหตุการณ์ใด",
        "a": ["พระพุทธเจ้าทรงแสดงปฐมเทศนา", "พระพุทธเจ้าประสูติ ตรัสรู้ และปรินิพพาน", "พระสงฆ์ 1,250 รูป มาประชุมพร้อมกัน", "พระพุทธเจ้าเสด็จลงจากสวรรค์ชั้นดาวดึงส์"],
        "r": 2,
        "t": 3
    },
    {
        "q": "วันมาฆบูชามีเหตุการณ์สำคัญอะไรเกิดขึ้น",
        "a": ["พระพุทธเจ้าประสูติ", "พระพุทธเจ้าตรัสรู้", "พระสงฆ์ 1,250 รูป มาประชุมโดยมิได้นัดหมาย", "พระพุทธเจ้าปรินิพพาน"],
        "r": 3,
        "t": 3
    },
    {
        "q": "วันอาสาฬหบูชาเป็นวันที่พระพุทธเจ้าทรงทำสิ่งใด",
        "a": ["แสดงปฐมเทศนา", "ประสูติ", "ตรัสรู้", "ปรินิพพาน"],
        "r": 1,
        "t": 3
    },
    {
        "q": "วันเข้าพรรษามีความสำคัญอย่างไร",
        "a": ["พระสงฆ์เริ่มจำพรรษาเป็นเวลา 3 เดือน", "พระสงฆ์ออกเดินธุดงค์", "พระพุทธเจ้าปรินิพพาน", "พระสงฆ์ประชุมกัน 1,250 รูป"],
        "r": 1,
        "t": 3
    },
    {
        "q": "วันออกพรรษาตรงกับวันใด",
        "a": ["ขึ้น 15 ค่ำ เดือน 3", "ขึ้น 15 ค่ำ เดือน 6", "ขึ้น 15 ค่ำ เดือน 8", "ขึ้น 15 ค่ำ เดือน 11"],
        "r": 4,
        "t": 3
    },
    {
        "q": "กิจกรรมใดนิยมปฏิบัติในวันสำคัญทางพระพุทธศาสนา",
        "a": ["เล่นการพนัน", "เวียนเทียน", "จุดพลุ", "ล่าสัตว์"],
        "r": 2,
        "t": 3
    },
    {
        "q": "วันมาฆบูชาตรงกับวันใด",
        "a": ["ขึ้น 15 ค่ำ เดือน 3", "ขึ้น 15 ค่ำ เดือน 6", "ขึ้น 15 ค่ำ เดือน 8", "ขึ้น 15 ค่ำ เดือน 11"],
        "r": 1,
        "t": 3
    },
    {
        "q": "วันวิสาขบูชาตรงกับวันใด",
        "a": ["ขึ้น 15 ค่ำ เดือน 3", "ขึ้น 15 ค่ำ เดือน 6", "ขึ้น 15 ค่ำ เดือน 8", "ขึ้น 15 ค่ำ เดือน 11"],
        "r": 2,
        "t": 3
    },
    {
        "q": "วันอาสาฬหบูชาตรงกับวันใด",
        "a": ["ขึ้น 15 ค่ำ เดือน 6", "แรม 1 ค่ำ เดือน 8", "ขึ้น 15 ค่ำ เดือน 8", "ขึ้น 15 ค่ำ เดือน 11"],
        "r": 3,
        "t": 3
    },
    {
        "q": "ข้อใดเป็นการปฏิบัติตนที่เหมาะสมในวันสำคัญทางพระพุทธศาสนา",
        "a": ["ทำบุญ ตักบาตร รักษาศีล ฟังธรรม", "ดื่มเครื่องดื่มแอลกอฮอล์", "เล่นการพนันกับเพื่อน", "ทะเลาะวิวาท"],
        "r": 1,
        "t": 3
    }
];
let data4 = [
    {
        "q": "เจ้าชายสิทธัตถะประสูติที่ใด?",
        "a": ["กรุงราชคฤห์", "สวนลุมพินีวัน", "เมืองสาวัตถี", "เมืองพาราณสี"],
        "r": 2,
        "t": 4
    },
    {
        "q": "พระราชบิดาของเจ้าชายสิทธัตถะคือใคร?",
        "a": ["พระเจ้าพิมพิสาร", "พระเจ้าสุทโธทนะ", "พระเจ้าอชาตศัตรู", "พระเจ้าปเสนทิโกศล"],
        "r": 2,
        "t": 4
    },
    {
        "q": "พระราชมารดาของเจ้าชายสิทธัตถะคือใคร?",
        "a": ["พระนางมหาปชาบดีโคตมี", "พระนางสิริมหามายา", "พระนางยโสธรา", "พระนางมัลลิกา"],
        "r": 2,
        "t": 4
    },
    {
        "q": "เจ้าชายสิทธัตถะเสด็จออกผนวชเมื่อพระชนมายุเท่าใด?",
        "a": ["25 พรรษา", "29 พรรษา", "30 พรรษา", "35 พรรษา"],
        "r": 2,
        "t": 4
    },
    {
        "q": "สิ่งที่เจ้าชายสิทธัตถะทอดพระเนตรเห็นก่อนออกผนวช เรียกว่าอะไร?",
        "a": ["ไตรลักษณ์", "อริยสัจ 4", "เทวทูต 4", "พรหมวิหาร 4"],
        "r": 3,
        "t": 4
    },
    {
        "q": "พระพุทธเจ้าตรัสรู้ใต้ต้นอะไร?",
        "a": ["ต้นไทร", "ต้นโพธิ์", "ต้นมะม่วง", "ต้นสาละ"],
        "r": 2,
        "t": 4
    },
    {
        "q": "หลังตรัสรู้ พระพุทธเจ้าแสดงปฐมเทศนาแก่ใครเป็นกลุ่มแรก?",
        "a": ["พระอานนท์", "ชฎิล 3 พี่น้อง", "ปัญจวัคคีย์", "พระเจ้าพิมพิสาร"],
        "r": 3,
        "t": 4
    },
    {
        "q": "ปฐมเทศนาที่พระพุทธเจ้าทรงแสดงมีชื่อว่าอะไร?",
        "a": ["ธัมมจักกัปปวัตตนสูตร", "มหาสติปัฏฐานสูตร", "อนัตตลักขณสูตร", "อาทิตตปริยายสูตร"],
        "r": 1,
        "t": 4
    },
    {
        "q": "พระพุทธเจ้าปรินิพพานที่เมืองใด?",
        "a": ["กรุงราชคฤห์", "เมืองสาวัตถี", "เมืองกุสินารา", "เมืองเวสาลี"],
        "r": 3,
        "t": 4
    },
    {
        "q": "พระพุทธเจ้าปรินิพพานเมื่อพระชนมายุเท่าใด?",
        "a": ["70 พรรษา", "75 พรรษา", "80 พรรษา", "85 พรรษา"],
        "r": 3,
        "t": 4
    }
];

let data = [data1, data2, data3, data4];
let topic = ["นันทิวิสาลชาดก", "สุวัณณหังสชาดก", "วันสำคัญ", "พุทธประวัติ"];

//code space
let game = `<div id="game">
            <div id="question"><p id="number"></p><p id='kamtam'></p></div>
            <div id="answers">
            </div>
        </div>`



function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let answered = false;
let answerCorrect = false;
let selectedAnswer = 0;

function answer(choice, correct) {

    if (answered) return;
    selectedAnswer = choice;
    answered = true;

    document.querySelectorAll("#answers button").forEach(btn => {
        btn.disabled = true;
    });

    if (choice == correct) {

        answerCorrect = true;
        document.getElementById("a" + choice).style.backgroundColor = "#4CBB17";

    } else {

        answerCorrect = false;

        document.getElementById("a" + choice).style.backgroundColor = "#FF272A";

        document.getElementById("a" + correct).style.backgroundColor = "#4CBB17";

    }

}

async function start(e) {

    let score = 0;

    let container = document.getElementById("container");

    let indexOfe = topic.indexOf(e.textContent);

    let group = data[indexOfe];

    let z = [];

    while (z.length < group.length) {

        let y = getRandomIntInclusive(0, group.length - 1);

        if (!z.includes(y)) z.push(y);

    }

    let some = 0;

    let x = 1;

    while (some < z.length) {

        answered = false;
        answerCorrect = false;

        container.innerHTML = game;

        document.getElementById("number").innerHTML = x + ".";

        document.getElementById("kamtam").innerHTML =
            group[z[some]].q;

        let ans = "";

        for (let i = 0; i < group[z[some]].a.length; i++) {

            ans += `
<button
id="a${i + 1}"
onclick="answer(${i + 1},${group[z[some]].r})">
${group[z[some]].a[i]}
</button>`;

        }

        document.getElementById("answers").innerHTML = ans;

        while (!answered) {
            await wait(50);
        }

        if (answerCorrect)
            score++;

        await wait(500);

        let result = document.createElement("div");
        result.id = "result";

        document.body.prepend(result);

        if (answerCorrect) {

            result.innerHTML = `
        <h2>${group[z[some]].q}</h2>
        <h1 style="color:#4CBB17">
            ✔ ${group[z[some]].a[group[z[some]].r - 1]}
        </h1>
    `;

        } else {
            result.innerHTML = `
<h2>${group[z[some]].q}</h2>
<h1 style="color:#FF272A">
✖ ${group[z[some]].a[selectedAnswer - 1]}
</h1>
`;

            await wait(1000);

            result.innerHTML = `
<h2>${group[z[some]].q}</h2>
<h1 style="color:#4CBB17">
✔ ${group[z[some]].a[group[z[some]].r - 1]}
</h1>
`;
        }

        document.querySelectorAll("body>*:not(#result)").forEach(el => {

            el.style.filter = "blur(5px)";

        });

        await wait(2000);

        document.querySelectorAll("body>*:not(#result)").forEach(el => {

            el.style.filter = "";

        });

        document.getElementById("result")?.remove();

        some++;

        x++;

    }

    container.innerHTML = `
<div id="final">

<h2>🎉 ทำแบบทดสอบเสร็จแล้ว</h1>

<h2>คะแนนของคุณ</h2>

<h1>${score} / ${group.length}</h1>

<h2 id='percent' style='background-color:${score / group.length > 0.7 ? "#4CBB17" : "#FF272A"};'>${Math.round(score / group.length * 100)}%</h2>

<button onclick="back()">
กลับเมนู
</button>

</div>
`;

}

function credit() {
    let container = document.getElementById('container');
    container.innerHTML = `<center><div id="credit">
            <h1>Credits</h1>
            <div id='name'>
            <h2>จัดทำโดย</h2>
            <p>ด.ญ.รัชฎากรณ์ นิลรอด no.27 <br>
ด.ญ.อิงวี่ บวรชัย no.29<br>
ด.ญ.ปณชนก เงินแจ้ง no.22<br>
ด.ญ.ณัชชา กิจพงษ์ no.17<br>
ด.ญ.ปวริศา ตุกเตียน no.23</p>
            </div>
            <br>
            <button id="back" onclick="back()">Back to Menu</button>
        </div></center>`;
}

function back() {
    let container = document.getElementById('container');
    container.innerHTML = `<div id="menu">
            <h1>Quiz พระพุทธศาสนา</h1>
            <button id="topic1" onclick="start(this)">นันทิวิสาลชาดก</button>
            <button id="topic2" onclick="start(this)">สุวัณณหังสชาดก</button>
            <button id="topic3" onclick="start(this)">วันสำคัญ</button>
            <button id="topic4" onclick="start(this)">พุทธประวัติ</button>
            <button id="credit" onclick="credit()">credits</button>
        </div>`;
}   
