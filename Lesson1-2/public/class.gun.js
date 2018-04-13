
class Gun  extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.Check(x, y);
        this.index=4;
    }

    Check(x, y) {
        var value = matrix[y][x];


        for (var i in GrassEaterArr) {
            if (x == GrassEaterArr[i].x && y == GrassEaterArr[i].y) {
                GrassEaterArr.splice(i, 1);
                break;
            }
        }
        for (var i in grassArr) {
            if (x == grassArr[i].x && y == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
        for (var i in PredatorArr) {
            if (x == PredatorArr[i].x && y == PredatorArr[i].y) {
                PredatorArr.splice(i, 1);
                break;
            }
        }


    }

    move() {
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
            matrix[y][x] =this.index;
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

