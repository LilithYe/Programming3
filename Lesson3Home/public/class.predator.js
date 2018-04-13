module.exports =class Predator  extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = round(random(5, 10));
        this.index=3;
    }
    getNewCoordinates() {
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
    chooseCell(index) {
        this.getNewCoordinates();
        return super.chooseCell(index);
    
    }


    move() {
        var empty = random(this.chooseCell(0));
        if (this.energy > 0) {
            if (empty) {
                var x = empty[0];
                var y = empty[1];
                this.energy--;
                matrix[this.y][this.x] = 0;
                matrix[y][x] = this.index;
                this.x = x;
                this.y = y;
            }
        }


    }

    dead() {
        if (this.energy <= 0) {
            for (var i in PredatorArr) {
                if ((this.x == PredatorArr[i].x) && (this.y == PredatorArr[i].y)) {
                    PredatorArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }


    eat() {
        var eatiq = random(this.chooseCell(2));
        if (eatiq) {
            matrix[this.y][this.x] = 0;
            var x = eatiq[0];
            var y = eatiq[1];
            matrix[y][x] = this.index;
            this.x = x;
            this.y = y;
            this.energy++;
            for (var i in GrassEaterArr) {
                if (x == GrassEaterArr[i].x && y == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.move();
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (this.energy > 10 && newCell) {
            var x = newCell[0];
            var y = newCell[1];
            var newEater = new Predator(x, y);
            PredatorArr.push(newEater);
            matrix[y][x] = this.index;
        }


    }
}
