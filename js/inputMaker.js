class JSInput {
    constructor(
        _element,
        _labelText,
        _colorString,
        _width,
        _height,
        _fontSize
    ) {
        this.element = _element;
        this.labelText = _labelText;
        this.color = _colorString;
        this.width = _width;
        this.height = _height;
        this.fontSize = _fontSize;
        this.inputID = this.setID();
        this.value = "";
        this.keyCounter = 0;
        this.input = document.createElement("input");
        this.label = document.createElement("label");
        this.labelContent = document.createElement("span");
    }
    draw() {
        this.element.appendChild(this.label);
        this.element.appendChild(this.input);
        this.label.appendChild(this.labelContent);
        this.input.setAttribute("id", `${this.inputID}`);
        this.label.setAttribute("for", `${this.inputID}`);
        this.labelContent.innerHTML = this.labelText;
        this.value = this.input.value;
        this.eventHandler();
        this.styleDefault();
    }
    styleDefault() {
        this.input.style.color = this.color;
        this.input.style.border = "none";
        this.input.style.outline = "none";
        this.input.style.borderBottom = "1px solid " + this.color;
        this.input.style.background = "transparent";
        this.input.style.width = this.width;
        this.input.style.height = this.height;
        this.input.style.fontSize = this.fontSize;
        this.input.style.textAlign = "center";

        this.label.style.color = this.color;
        this.label.style.position = "absolute";
        this.label.style.transition = "transform .3s ease-out";
        this.label.style.pointerEvents = "none";
        this.label.style.transform = "translateY(0em)";
    }
    styleHover() {
        this.label.style.transform = "translateY(-1.5em)";
    }
    clearValue() {
        this.input.value = "";
    }

    eventHandler() {
        this.input.addEventListener("focus", () => {
            this.styleHover();
        });
        this.input.addEventListener("mouseover", () => {
            this.styleHover();
        });
        this.input.addEventListener("mouseout", () => {
            if (this.input !== document.activeElement && !this.input.value) {
                this.styleDefault();
            }
        });
        this.input.addEventListener("blur", () => {
            if (!this.input.value) {
                this.styleDefault();
            }
        });
    }

    setID() {
        let _random =
            Math.random() * (Date.now() - (Date.now() - 2000)) +
            (Date.now() - 2000);
        if (this.element.id) {
            let _id = this.element.id + Math.round(_random);
            return _id;
        } else if (this.element.className) {
            let _id = this.element.className + Math.round(_random);
            return _id;
        } else {
            return _random;
        }
    }
    getKey() {
        if (sessionStorage.length) {
            this.keyCounter = sessionStorage.length;
        }
        if (this.element.id) {
            let _key = this.element.id + sessionStorage.length;
            this.keyCounter++;
            return _key;
        } else if (this.element.className) {
            let _key = this.element.id + sessionStorage.length;
            this.keyCounter++;
            return _key;
        } else {
            this.keyCounter++;
            return sessionStorage.length;
        }
    }
    saveToSession() {
        sessionStorage.setItem(this.getKey(), this.input.value);
    }
}