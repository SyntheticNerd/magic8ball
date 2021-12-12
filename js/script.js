let magicball = document.getElementById("theball");
let shadow = document.querySelector(".shadow");
let animbutton = document.getElementById("animationToggle");
let theQuestion = document.getElementById("theQuestion");

let testest = document.querySelector(".testball");

let animBTN = new JSCheckBox(animbutton, 1, "Animation </br> Active", "Animation </br> Inactive");
animBTN.initialize();

class MagicBall {
    constructor(_element, _index) {
        this.element = _element;
        this.index = _index;
        this.id = "magicball" + this.index;
        this.img = document.createElement("img");
        this.src = `./img/magic8ball_${this.index}.png`
    }
    initialize() {
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

console.log(magicball)

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let startBall = new MagicBall(magicball, "start");
startBall.initialize();

let arr = [];

for (let i = 1; i <= 20; i++) {
    let _src = `./img/magic8ball_${i}.png`
    arr.push(_src);
}

console.log(arr);

animbutton.addEventListener("click", () => {
    if (animBTN.input.checked) {
        magicball.style.animation = "none";
        shadow.style.animation = "none";
    } else {
        magicball.style.animation = "float 6s ease-in-out infinite";
        shadow.style.animation = "pulse 6s ease-in-out infinite";
    }
})

let question = new JSInput(
    theQuestion,
    "Ask your Question and the Ord will Decide",
    "var(--textColorPrimary)",
    "300px",
    "",
    "1em"
);

question.initialize();

theQuestion.addEventListener("submit", (event) => {
    console.log("event TRIGGER");
    event.preventDefault();
    startBall.src = arr[randomNumber(1, 20)];
    startBall.reDraw();
    question.saveToSession();
    theQuestion.reset();
});