

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
