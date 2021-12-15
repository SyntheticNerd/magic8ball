class JSCheckBox {
    constructor(_element, _fontSize, _defaultText, _activeText) {
        this.element = _element;
        this.fontSize = _fontSize;
        this.defaultText = _defaultText ? _defaultText : "";
        this.activeText = _activeText ? _activeText : "";
        this.input = document.createElement("input");
        this.label = document.createElement("label");
        this.text = document.createElement("p");
        this.inputID = this.setID();
    }
    draw() {
        this.input.setAttribute("type", "checkbox");
        this.input.setAttribute("id", `${this.inputID}`)
        this.label.setAttribute("for", `${this.inputID}`)
        // let _labelId = document.getElementById(`${this.element.className}`);
        this.element.appendChild(this.input);
        this.element.appendChild(this.label);
        this.label.appendChild(this.text);
        this.input.addEventListener("change", () => {
            if (this.input.checked) {
                this.styleActive();
            } else {
                this.styleDefault();
            }
        })
        this.styleDefault();
    }
    styleDefault() {
        // this.element.style.width = "6em";
        // this.element.style.height = "3em";
        this.element.style.fontSize = `${this.fontSize}em`;
        //Label Styles
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

        this.input.style.position = "absolute";
        this.input.style.visibility = "hidden";
    }
    styleActive() {
        this.label.style.backgroundColor = "var(--background)"
        this.label.style.boxShadow = "inset -4px -4px 4px var(--nmShadow2), inset 4px 4px 4px var(--nmShadow1)";
        this.text.style.color = "var(--textColorDisabled)";
        this.text.innerHTML = `${this.activeText}`;
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
}