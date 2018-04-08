class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = round(random(0, 8));
        this.speed = 8;
        this.index = 1;

    }

    bazmanal() {
        this.energy++;
        var norVandak = random(super.yntrelNorVandak(0));
        if (this.energy >= this.speed && norVandak) {
            var x = norVandak[0];
            var y = norVandak[1];
            var norXot = new Grass(x, y);
            grassArr.push(norXot);
            matrix[y][x] = 1;
            this.energy = 0;
        }

    }
}
