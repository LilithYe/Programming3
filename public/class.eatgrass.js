class Xotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = round(random(0, 8));
        this.index = 2

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
        this.stanalNorKordinatner();
        return super.yntrelNorVandak(index);
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
