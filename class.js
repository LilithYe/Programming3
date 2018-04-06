class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = round(random(0, 8));
        this.speed = 8;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= this.speed && norVandak) {
            var x = norVandak[0];
            var y = norVandak[1];
            var norXot = new Grass(x, y);
            grassArr.push(norXot);
            matrix[y][x] = 1;
            this.multiply = 0;
        }

    }
}



class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = round(random(0, 8));
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(index) {
        var found = [];
        this.stanalNorKordinatner();
        for (var i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == index) {
                    found.push([x, y]);
                }

            }
        }
        return found;
    }



    sharjvel() {
        var datark = random(this.yntrelVandak(0));
        if (datark) {
            var x = datark[0];
            var y = datark[1];
            this.energy--;
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
        }
        


    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in XotakerArr) {
                if ((this.x == XotakerArr[i].x) && (this.y == XotakerArr[i].y)) {
                    matrix[this.y][this.x] = 0;
                    XotakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }


    utel() {
        var uteliq = random(this.yntrelVandak(1));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            var x = uteliq[0];
            var y = uteliq[1];
            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
            this.energy++;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (this.energy > 8 && norVandak) {
            var x = norVandak[0];
            var y = norVandak[1];
            var norutox = new Xotaker(x, y);
            XotakerArr.push(norutox);
            matrix[y][x] = 2;
        }


    }

}


class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = round(random(5, 10));
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(index) {
        var found = [];
        this.stanalNorKordinatner();
        for (var i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == index) {
                    found.push([x, y]);
                }

            }
        }
        return found;
    }


    sharjvel() {
        var datark = random(this.yntrelVandak(0));
        if (this.energy > 0) {
            if (datark) {
                var x = datark[0];
                var y = datark[1];
                this.energy--;
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 3;
                this.x = x;
                this.y = y;
            }
        }


    }

    mahanal() {
        if (this.energy <= 0) {
            for (var i in GishatichArr) {
                if ((this.x == GishatichArr[i].x) && (this.y == GishatichArr[i].y)) {
                    GishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }


    utel() {
        var uteliq = random(this.yntrelVandak(2));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            var x = uteliq[0];
            var y = uteliq[1];
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
            this.energy++;
            for (var i in XotakerArr) {
                if (x == XotakerArr[i].x && y == XotakerArr[i].y) {
                    XotakerArr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (this.energy > 10 && norVandak) {
            var x = norVandak[0];
            var y = norVandak[1];
            var norutox = new Gishatich(x, y);
            GishatichArr.push(norutox);
            matrix[y][x] = 3;
        }


    }
}

class Gun {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.Check(x, y);
    }

    Check(x, y) {
        var value = matrix[y][x];


        for (var i in XotakerArr) {
            if (x == XotakerArr[i].x && y == XotakerArr[i].y) {
                XotakerArr.splice(i, 1);
                break;
            }
        }
        for (var i in grassArr) {
            if (x == grassArr[i].x && y == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
        for (var i in GishatichArr) {
            if (x == GishatichArr[i].x && y == GishatichArr[i].y) {
                GishatichArr.splice(i, 1);
                break;
            }
        }


    }

    sharjvel() {
        if (this.y <= 28) {

            for (var i in WallArr) {
                if (this.x == WallArr[i].x && this.y + 1 == WallArr[i].y) {
                    for (var i in GunArr) {
                        if ((this.x == GunArr[i].x) && (this.y == GunArr[i].y)) {
                            matrix[this.y][this.x] = 0;
                            GunArr.splice(i, 1);
                            return;
                        }
                    }
                }
            }

            matrix[this.y][this.x] = 0;

            this.Check(this.x, this.y)

            this.y++;
            var x = this.x;
            var y = this.y;
            matrix[y][x] = 4;
            this.Check(x, y);
        }
        else {
            this.Check(this.x, this.y);
            for (var i in GunArr) {
                if ((this.x == GunArr[i].x) && (this.y == GunArr[i].y)) {
                    GunArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }

    }
}



class Wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(index) {
        var found = [];
        this.stanalNorKordinatner();
        for (var i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == index) {
                    found.push([x, y]);
                }

            }
        }
        return found;
    }


    spanel() {
        var kendani = random(this.yntrelVandak(2));
        if (kendani) {
            var x = kendani[0];
            var y = kendani[1];
            matrix[y][x] = 0;
            for (var i in XotakerArr) {
                if (x == XotakerArr[i].x && y == XotakerArr[i].y) {
                    XotakerArr.splice(i, 1);
                }
            }

        }
    }
}













