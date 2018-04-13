module.exports =class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = round(random(0, 8));
        this.speed = 8;
        this.index = 1;

    }

    mul() {
        this.energy++;
        var newCell = random(super.chooseCell(0));
        if (this.energy >= this.speed && newCell) {
            var x = newCell[0];
            var y = newCell[1];
            var newGrass = new Grass(x, y);
            grassArr.push(newGrass);
            matrix[y][x] = this.index;
            this.energy = 0;
        }

    }
}
