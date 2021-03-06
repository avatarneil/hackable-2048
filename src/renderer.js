var base = document.getElementById("base");
var grid = document.getElementById("grid");
var currentGrid = [];

createBaseGrid();

function createBaseGrid() {
    populateGrid();
}

function populateGrid() {
    var popCount = 0;
    var tempArray = [];
    while (popCount < 2){
    grid.innerHTML = "";
    for (var i = 0; i < 16; i++) {
        var randNum = Math.random();
        var box = document.createElement("div");
        box.setAttribute("class", "grid-item");
        if (randNum < .2 && popCount < 2) {
            box.textContent = "2";
            box.setAttribute("value", "2");
            popCount++;
        } else {
            box.textContent = "0";
            box.setAttribute("value", "0");
        }
        grid.appendChild(box);
        tempArray.push(box.textContent);
    }
    while (tempArray.length) currentGrid.push(tempArray.splice(0, 4));
    }
}



document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            collapseLeft();
            insertNewValue();
            repopulateGrid();
            break;
        case 38:
            collapseUp();
            insertNewValue();
            repopulateGrid();
            break;
        case 39:
            collapseRight();
            insertNewValue();
            repopulateGrid();
            break;
        case 40:
            collapseDown();
            insertNewValue();
            repopulateGrid();
            break;
    }
};

function collapseLeft() {
    for (var i = 0; i < currentGrid.length; i++) {
        for (var j = currentGrid[i].length; j > 0; j--) {
            if (currentGrid[i][j] == currentGrid[i][j - 1]) { //if same
                currentGrid[i][j - 1] = (currentGrid[i][j - 1] * 2);
                currentGrid[i][j] = 0;
            } else if (currentGrid[i][j - 1] == 0) { //if left is blank
                currentGrid[i][j - 1] = currentGrid[i][j];
                currentGrid[i][j] = 0;
            }
        }
        currentGrid[i] = currentGrid[i].filter(function(element) {
            return element !== undefined;
        }); //hackish way to remove undefined elements
    }
}

function collapseUp() {
    for (var i = currentGrid.length-1; i > 0; i--) {
        for (var j = currentGrid[i].length -1; j >= 0; j--) {
            if (currentGrid[i][j] == currentGrid[i - 1][j]) { //if same
                currentGrid[i - 1][j] = (currentGrid[i - 1][j] * 2);
                currentGrid[i][j] = 0;
            } else if (currentGrid[i - 1][j] == 0) { //if top is blank
                currentGrid[i - 1][j] = currentGrid[i][j];
                currentGrid[i][j] = 0;
            }
        }
        currentGrid[i] = currentGrid[i].filter(function(element) {
            return element !== undefined;
        }); //hackish way to remove undefined elements
    }
}

function collapseRight() {
    for (var i = 0; i < currentGrid.length; i++) {
        for (var j = 0; j < currentGrid[i].length; j++) {
            if (currentGrid[i][j] == currentGrid[i][j + 1]) { //if same
                currentGrid[i][j + 1] = (currentGrid[i][j + 1] * 2);
                currentGrid[i][j] = 0;
            } else if (currentGrid[i][j + 1] == 0) {
                currentGrid[i][j + 1] = currentGrid[i][j];
                currentGrid[i][j] = 0;
            }
        }
        currentGrid[i] = currentGrid[i].filter(function(element) {
            return element !== undefined;
        }); //hackish way to remove undefined elements
    }
}

function collapseDown() {
    for (var i = 0; i < currentGrid.length-1; i++) {
        for (var j = 0; j < currentGrid[i].length; j++) {
            if (currentGrid[i][j] == currentGrid[i + 1][j]) {
                currentGrid[i + 1][j] = (currentGrid[i + 1][j] * 2);
                currentGrid[i][j] = 0;
            } else if (currentGrid[i + 1][j] == 0) {
                currentGrid[i + 1][j] = currentGrid[i][j];
                currentGrid[i][j] = 0;
            }
        }
    }

}

function insertNewValue() {
    var counter = 0;
    var completeCheck = false;
    while (completeCheck == false){
        var randomSpace = randBetween(0, 15);
        for (var i=0;i<=3;i++){
            for (var j=0;j<=3;j++){
                if (counter == randomSpace){
                    if (currentGrid[i][j] == 0){
                        currentGrid[i][j] = 2;
                        completeCheck = true;
                    }
                }
                counter++;
            }
        }
    }
}

function randBetween(low, high) {
    return Math.floor(Math.random() * high) + low;
}

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function repopulateGrid(){
    grid.innerHTML = "";
    for (var i = 0; i <= 3; i++) {
        for (var j=0; j<=3; j++){
        var box = document.createElement("div");
        box.setAttribute("class", "grid-item");
        box.textContent = currentGrid[i][j];
        box.setAttribute("value", currentGrid[i][j]);
        grid.appendChild(box);
        }
    }
}