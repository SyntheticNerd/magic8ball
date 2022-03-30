class JSBurgerMenu extends JSCheckBox {
    constructor(_element, _heightString, _widthString) {
        super(_element);
        this.lineContainer = document.createElement("div");
        this.height = _heightString;
        this.width = _widthString ? _widthString : _heightString;
        this.lines = [
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div")
        ]
    }
    styleDefault() {
        this.label.style.backgroundColor = "var(--elev1dp)"
        this.label.style.position = "absolute";
        this.label.style.cursor = "pointer";
        this.label.style.borderRadius = "8px";
        this.label.style.display = "flex";
        this.label.style.alignItems = "center";
        this.label.style.justifyContent = "center";
        // this.label.style.transform = "translate(-50%,-50%)"
        this.label.style.zIndex = "3";
        this.label.style.boxShadow = "4px 4px 4px var(--nmShadow1)";
        this.text.style.position = "absolute";
        this.input.style.position = "absolute";
        this.input.style.visibility = "hidden";

        this.drawLines();
    }
    styleActive() {
        this.label.style.boxShadow = "inset -4px -4px 4px var(--nmShadow2), inset 4px 4px 4px var(--nmShadow1)";
        this.lineStyleActive();
    }
    drawLines() {
        this.label.appendChild(this.lineContainer);
        this.lines.forEach(line => {
            this.lineContainer.appendChild(line);
        })
        this.lineStyle();
    }
    lineStyle() {
        this.lineContainer.style.width = this.width;
        this.lineContainer.style.height = this.height;
        this.lineContainer.style.display = "flex";
        this.lineContainer.style.flexDirection = "column";
        this.lineContainer.style.justifyContent = "space-around";
        this.lineContainer.style.alignItems = "none";
        this.lineContainer.style.paddingTop = "10%";
        this.lineContainer.style.paddingBottom = "10%";
        this.lineContainer.style.paddingRight = "10%";
        this.lineContainer.style.paddingLeft = "10%"

        this.lines.forEach(line => {
            line.style.backgroundColor = "grey";
            line.style.height = "18%";
            line.style.pointerEvents = "none";
            line.style.borderRadius = ".5em";
            line.style.opacity = "1";
            line.style.transform = "rotate(0deg) translate(0px, 0px)";
            line.style.transition = "all 0.3s ease";
        })
    }
    lineStyleActive() {
        // let x = Math.trunc(parseInt(this.lineContainer.clientWidth) * 0.2) - 1;
        let x = Math.trunc(parseInt(this.lineContainer.clientWidth) / 9);
        // let y = Math.trunc(parseInt(this.lineContainer.clientHeight) * 0.2) - 1;
        let y = Math.trunc(parseInt(this.lineContainer.clientHeight) / 9);
        this.lineContainer.style.justifyContent = "center";
        // this.lineContainer.style.alignItems = "center";

        this.lines[0].style.transform = `rotate(45deg) translate(${x}px, ${y}px)`;
        this.lines[1].style.opacity = "0";
        this.lines[2].style.transform = `rotate(-45deg) translate(${x}px, -${y}px)`;
        // this.lines[0].style.transition = "all 0.3s ease";
        // this.lines[1].style.transition = "all 0.3s ease";
        // this.lines[2].style.transition = "all 0.3s ease";
    }
}