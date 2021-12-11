let magicball = document.querySelector(".ball");
let shadow = document.querySelector(".shadow");
let animbutton = document.getElementById("animationToggle");

let animBTN = new JSCheckBox(animbutton, 1, "Animation </br> Active", "Animation </br> Inactive");
animBTN.initialize();

animbutton.addEventListener("click", () => {
    if (animBTN.input.checked) {
        magicball.style.animation = "none";
        shadow.style.animation = "none";
    } else {
        magicball.style.animation = "float 6s ease-in-out infinite";
        shadow.style.animation = "pulse 6s ease-in-out infinite";
    }
})