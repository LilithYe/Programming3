class Wall  extends LivingCreature {
    constructor(x, y) {
        super(x,y);

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
    


    kill() {
        var animal = random(this.chooseCell(2));
        if (animal) {
            var x = animal[0];
            var y = animal[1];
            matrix[y][x] = 0;
            for (var i in GrassEaterArr) {
                if (x == GrassEaterArr[i].x && y == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                }
            }

        }
    }
}













