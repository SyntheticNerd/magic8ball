class GridDoc {
    constructor(_element, _childElement, _startWidthpx, _startHeightpx, _endWidthpx, _endHeightpx) {
        this.element = _element;
        this.childElement = _childElement;
        this.startWidth = _startWidthpx;
        this.startHeight = _startHeightpx;
        this.endWidth = _endWidthpx;
        this.endHeight = _endHeightpx;
        this.background = document.createElement("div");
        this.topBar = document.createElement("div");
        this.bottomGradient = document.createElement("div");
        this.titleText = document.createElement("H1");
    }

    draw() {
        this.element.appendChild(this.background);
        this.background.appendChild(this.topBar);
        // this.background.appendChild(this.bottomGradient);
        this.topBar.appendChild(this.titleText);

        this.style();
    }

    style() {
        this.background.style.backgroundColor = "var(--elev1dp)";
        this.background.style.height = this.startHeight;
        this.background.style.width = this.startWidth;
        this.background.style.position = "absolute";
        this.background.style.transform = `translate(${parseInt(this.startHeight)/2}px, ${parseInt(this.startWidth)/2}px)`;
        this.background.style.transformOrigin = "top left";
        this.background.style.zIndex = "0";
        this.background.style.transition = "all 0.3s ease";
        this.background.style.opacity = "0";
        this.background.style.paddingTop = "5em";
        this.background.style.borderRadius = "1em";
        this.background.style.overflowX = "hidden";
        this.background.style.boxShadow = "4px 4px 4px var(--nmShadow1)";


        this.topBar.style.transform = `translate(${parseInt(this.startHeight)/2}px, ${parseInt(this.startWidth)/2}px)`;
        this.topBar.style.backgroundColor = "var(--elev1dp)";
        // this.topBar.style.margin = "0px auto";
        this.topBar.style.height = "0";
        this.topBar.style.width = "0%";
        this.topBar.style.position = "sticky";
        this.topBar.style.top = "0";
        this.topBar.style.transform = `translate(0, -5em)`;
        this.topBar.style.borderRadius = "1em 1em 0 0";
        this.topBar.style.opacity = "0";
        this.topBar.style.transition = "all 0.3s ease";
        this.topBar.style.display = "flex";
        this.topBar.style.alignItems = "center";
        this.topBar.style.justifyContent = "center";
        this.topBar.style.pointerEvents = "none";
        this.topBar.style.zIndex = "1"

        this.titleText.innerHTML = "History";
        this.titleText.style.opacity = "0";
    }

    styleActive() {
        this.background.style.height = this.endHeight;
        this.background.style.width = `min(80vw, ${this.endWidth})`
        this.background.style.transform = "translate(-2em, -2em)";
        this.background.style.borderRadius = "1em 0 0 1em";
        this.background.style.opacity = "1";

        this.topBar.style.height = "6em";
        this.topBar.style.width = "100%" //`${parseInt(this.endWidth)}px`;
        this.topBar.style.opacity = "1";

        this.titleText.style.opacity = "1";
    }
}


class JSTableMaker {
    constructor(_element, _labelArray, _array) {
        this.element = _element;
        this.labelArray = _labelArray;
        this.array = _array;
        this.table = document.createElement("table");
    }
    draw() {
        this.array.map(child => {
            let _tableRow = document.createElement("tr");
            this.styleRow(_tableRow);
            if (child.length > 1) {
                child.map(data => {
                    let _dataBlock = document.createElement("td")
                    this.styleColumn(_dataBlock);
                    _dataBlock.innerHTML = data;
                    _tableRow.appendChild(_dataBlock);
                })
            } else {
                _tableRow.innerHTML = child;
            }

            this.table.appendChild(_tableRow);
        })
        this.element.appendChild(this.table);
        this.styleTable();
    }
    styleTable() {
        // this.table.style.transform = "translate(0, -5em)";
        this.table.style.position = "relative";
        this.table.style.margin = "16px";
        this.table.style.marginBottom = "2em";
        this.table.style.display = "flex";
        this.table.style.flexDirection = "column";
        this.table.style.top = "-6em";
        this.table.zIndex = "0";
        // this.table.style.alignItems = "center";
        // this.table.style.bottom = "0";
    }
    styleColumn(_element) {
        _element.style.textAlign = "center";
        _element.style.width = "300px"
        _element.style.padding = "16px";
        _element.style.border = "1px solid var(--textColorDisabled)";
    }
    styleRow(_element) {
        _element.style.width = "100%";
    }
    reDraw(newArray) {
        this.removeAllChildNodes(this.table);
        newArray.map(child => {
            let _tableRow = document.createElement("tr");
            if (child.length > 1) {
                child.map(data => {
                    let _dataBlock = document.createElement("td")
                    this.styleColumn(_dataBlock);
                    _dataBlock.innerHTML = data;
                    _tableRow.appendChild(_dataBlock);
                })
            } else {
                _tableRow.innerHTML = child;
            }

            this.table.appendChild(_tableRow);
        })
        this.element.appendChild(this.table);
        this.styleTable();
    }
    removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}