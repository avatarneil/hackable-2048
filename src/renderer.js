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
    for (var i = 0; i < 16; i++) {
        var randNum = Math.random();
        console.log(randNum);
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

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            collapseLeft();
            break;
        case 38:
            alert('up');
            break;
        case 39:
            alert('right');
            break;
        case 40:
            alert('down');
            break;
    }
};

function collapseLeft() {
    for (var i = 0; i < currentGrid.length; i++) {
        for (var j = currentGrid[i].length; j > 0; j++) {
            if (currentGrid[i][j] == currentGrid[i][j - 1]) {
                currentGrid[i][j - 1] = (currentGrid[i][j - 1] * 2);
            } else if (currentGrid[i][j - 1] == 0) {
                currentGrid[i][j - 1] = currentGrid[i][j];
            }
        }
    }
    console.log(currentGrid);
}

function collapseUp() {

}

function collapseRight() {

}

function collapseDown() {

}
