Date.prototype.today = function () {
    return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes(); // + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let colapsableDoc = document.getElementById("collapsableDoc");
let input = document.getElementById("theQuestion");
let magicball = document.getElementById("theball");
let animbutton = document.getElementById("animationToggle");
let theQuestion = document.getElementById("theQuestion");
let shadow = document.querySelector(".shadow");

let testBurger = new JSBurgerMenu(colapsableDoc, "40px");
testBurger.draw();

let history = new GridDoc(colapsableDoc, null, "1px", "1px", "600px", "500px");
history.draw();

let animBTN = new JSCheckBox(animbutton, 1, "Activate </br> Animation", "Deactivate </br> Animation");
animBTN.input.checked = true;
animBTN.draw();


let submitBTN = new JSSubmitBtn(submit, "1.5em", "Submit", "Submit");
submitBTN.draw();

animbutton.addEventListener("click", () => {
    // sessionStorage.clear();
    if (!animBTN.input.checked) {
        magicball.style.animation = "none";
        shadow.style.animation = "none";
    } else {
        magicball.style.animation = "float 6s ease-in-out infinite";
        shadow.style.animation = "pulse 6s ease-in-out infinite";
    }
})

class MagicBall {
    constructor(_element, _index) {
        this.element = _element;
        this.index = _index;
        this.id = "magicball" + this.index;
        this.img = document.createElement("img");
        this.src = `./img/magic8ball_${this.index}.png`
    }
    draw() {
        this.element.appendChild(this.img);
        this.img.setAttribute("id", this.id);
        document.getElementById(this.id).src = this.src;
        this.style();
    }
    reDraw() {
        document.getElementById(this.id).src = this.src;
    }
    style() {
        // this.img.style.position = "absolute";
        this.img.style.height = "100%";
        this.img.style.width = "100%"
        this.img.style.zIndex = "1"
    }
}

let startBall = new MagicBall(magicball, "start");
startBall.draw();

colapsableDoc.addEventListener("change", () => {
    if (testBurger.input.checked) {
        history.styleActive();
    } else {
        history.style();
    }
})

let question = new JSInput(
    theQuestion,
    "Ask a Question Here",
    "var(--textColorPrimary)",
    "300px",
    "",
    "1em"
);
question.draw();

let sourceArray = [];
for (let i = 1; i <= 20; i++) {
    let _src = `./img/magic8ball_${i}.png`
    sourceArray.push(_src);
}
let answerArray = [
    "It is certain",
    "It is decidedly so",
    "Without a doupt",
    "Yes, definately",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Dont count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

function getSessionStorage() {
    let sessionStorageArr = []
    console.log(sessionStorage.length);
    let indexHolder = 0;
    for (let i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.length)
        let key = sessionStorage.key(i);
        let storedArray = JSON.parse(sessionStorage.getItem(key));

        if (key !== "IsThisFirstTime_Log_From_LiveServer") {
            let _key = `theQuestion${indexHolder}`;
            sessionStorageArr.push(JSON.parse(sessionStorage.getItem(_key)));
            indexHolder++;
        }

    }
    console.log(sessionStorageArr);
    return sessionStorageArr;
}

let testtable = new JSTableMaker(history.background, null, getSessionStorage());
testtable.draw();

theQuestion.addEventListener("submit", (event) => {
    event.preventDefault();

    let randomIndex = randomNumber(1, 20) - 1;
    let datetime = `${new Date().today()} ${new Date().timeNow()}`;
    console.log(event.target);
    if (event.target[1].value.match(/(?=.*(?:^|\W)meaning(?:$|\W))+(?=.*(?:^|\W)life(?:$|\W))/i)) {
        console.log("42");
        startBall.src = "./img/magic8ball_mol.png";
        startBall.reDraw();
        let record = [event.target[1].value, "42", datetime]
        sessionStorage.setItem(question.getKey(), JSON.stringify(record));
        theQuestion.reset();
        testtable.reDraw(getSessionStorage());
    } else {
        console
        startBall.src = sourceArray[randomIndex];
        startBall.reDraw();
        let record = [event.target[1].value, answerArray[randomIndex], datetime]
        sessionStorage.setItem(question.getKey(), JSON.stringify(record));
        theQuestion.reset();
        testtable.reDraw(getSessionStorage());
    }
    const sleep = setTimeout(() => {
        startBall.src = './img/magic8ball_start.png';
        startBall.reDraw();

    }, 5000);

});