
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

