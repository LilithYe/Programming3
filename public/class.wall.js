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













