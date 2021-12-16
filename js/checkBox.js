class JSCheckBox {
    constructor(_element, _fontSize, _defaultText, _activeText, _height, _width) {
        this.element = _element;
        this.fontSize = _fontSize;
        this.defaultText = _defaultText ? _defaultText : "";
        this.activeText = _activeText ? _activeText : "";
        this.height = _height;
        this.width = _width;
        this.input = document.createElement("input");
        this.label = document.createElement("label");
        this.text = document.createElement("p");
        this.inputID = this.setID();
    }
    draw() {
        this.input.setAttribute("type", "checkbox");
        this.input.setAttribute("id", `${this.inputID}`)
        this.label.setAttribute("for", `${this.inputID}`)
        this.element.appendChild(this.input);
        this.element.appendChild(this.label);
        this.label.appendChild(this.text);
        this.eventHandler();
        this.styleDefault();
        if (this.input.checked) {
            this.styleActive();
        }
    }
    styleDefault() {
        this.text.style.fontSize = `${this.fontSize}`;
        //Label Styles
        this.label.style.width = this.width ? this.width : "auto";
        this.label.style.height = this.height ? this.height : "auto";
        this.label.style.backgroundColor = "var(--background)"
        this.label.style.boxShadow = "-4px -4px 4px var(--nmShadow2), 4px 4px 4px var(--nmShadow1)";
        this.label.style.position = "absolute";
        this.label.style.zIndex = "1";
        this.label.style.cursor = "pointer";
        this.label.style.borderRadius = "1em";
        this.label.style.display = "flex";
        this.label.style.alignItems = "center";
        this.label.style.justifyContent = "center";

        //Text Styles
        this.text.innerHTML = `${this.defaultText}`;
        this.text.style.color = "var(--textColorEnabled)";
        this.text.style.textAlign = "center";
        this.text.style.margin = ".5em"
        this.text.style.textShadow = "none";

        this.input.style.position = "absolute";
        this.input.style.visibility = "hidden";
    }
    styleActive() {
        this.label.style.backgroundColor = "var(--background)"
        this.label.style.boxShadow = "inset -4px -4px 4px var(--nmShadow2), inset 4px 4px 4px var(--nmShadow1)";
        this.text.style.color = "var(--textColorDisabled)";
        this.text.innerHTML = `${this.activeText}`;
        this.text.style.textShadow = "none";
    }
    styleHoverDefault() {
        this.text.style.color = "var(--textColorEnabledHover)";
        this.text.style.textShadow =
            "-1px -1px 16px var(--textColorEnabledHover), 1px 1px 16px var(--textColorEnabledHover)";
    }
    styleHoverActive() {
        this.text.style.color = "var(--textColorDisabledHover)";
        this.text.style.textShadow =
            "-1px -1px 16px var(--textColorDisabledHover), 1px 1px 16px var(--textColorDisabledHover)";
    }
    setID() {
        let _random = Math.random() * (Date.now() - (Date.now() - 2000)) + (Date.now() - 2000);
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
    eventHandler() {
        this.input.setAttribute("type", "checkbox");
        this.label.addEventListener("mouseenter", () => {
            if (this.input.checked) {
                this.styleHoverActive();
            } else {
                this.styleHoverDefault();
            }
        });
        this.label.addEventListener("mouseleave", () => {
            if (this.input.checked) {
                this.styleActive();
            } else {
                this.styleDefault();
            }
        });

        this.input.addEventListener("change", () => {
            if (this.input.checked) {
                this.styleActive();
            } else {
                this.styleDefault();
            }
        });
    }
}


class JSSubmitBtn extends JSCheckBox {
    constructor(_element, _fontSize, _defaultText, _activeText, _height, _width) {
        super(_element, _fontSize, _defaultText, _activeText, _height, _width);
    }
    styleActive() {
        this.label.style.backgroundColor = "var(--background)";
        this.label.style.boxShadow =
            "inset -4px -4px 4px var(--nmShadow2), inset 4px 4px 4px var(--nmShadow1)";
        this.text.style.color = "var(--textColorSecondary)";
        this.input.style.visibility = "hidden";
        this.text.innerHTML = `${this.activeText}`;
        this.text.style.textShadow = "none";
    }
    eventHandler() {
        this.input.setAttribute("type", "submit");
        this.label.addEventListener("mouseenter", () => {
            this.styleHoverDefault();
        });
        this.label.addEventListener("mouseleave", () => {
            this.styleDefault();
        });
        this.label.addEventListener("pointerdown", () => {
            this.styleActive();
        });
        this.label.addEventListener("pointerup", () => {
            this.styleDefault();
        });
    }
}