
var matrix = [];
var n = 30;
var m = 30;


var grassArr = [];
var XotakerArr = [];
var GishatichArr = [];
var GunArr = [];
var WallArr = [];
var side = 20;

function setup() {
    frameRate(5);



    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (j = 0; j < m; j++) {
            matrix[i][j] = 0;
        }
    }
    for (var i = 0; i < 15; i++) {
        var x = round(random(0, 29));
        GunArr[i] = new Gun(x, 0);
    }

    for (var i = 0; i < 250; i++) {
        var x = round(random(0, 29));
        var y = round(random(0, 29));
        matrix[y][x] = 1;
    }
    for (var i = 0; i < 20; i++) {
        var x = round(random(0, 29));
        var y = round(random(0, 29));
        matrix[y][x] = 2;
    }

    for (var i = 0; i < 20; i++) {
        var x = round(random(0, 29));
        var y = round(random(0, 29));
        matrix[y][x] = 3;
    }

    for (var i = 0; i < 10; i++) {
        var x = round(random(1, 29));
        var y = round(random(1, 29));
        matrix[y][x] = 5;

    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                XotakerArr.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                GishatichArr.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] == 5) {
                WallArr.push(new Wall(x, y));
            }
        }
    }

    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


}



function draw() {


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }

        }
    }
    



    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    
    for (var i in XotakerArr) {
        XotakerArr[i].utel();
        XotakerArr[i].bazmanal();
        XotakerArr[i].mahanal();
    }
    
    for (var i in GishatichArr) {
        GishatichArr[i].utel();
        GishatichArr[i].bazmanal();
        GishatichArr[i].mahanal();
    }

    for (var i in GunArr) {
        GunArr[i].sharjvel();
    }   
    
    for (i in WallArr) {
        WallArr[i].spanel();
    }


}




