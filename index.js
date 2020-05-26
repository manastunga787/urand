
class Urand {
    constructor(from, to) {
        if (typeof from !== "number" || typeof to !== "number") {
            throw new Error("From and To must be integers.");
        }
        from = parseInt(from, 10);
        to = parseInt(to, 10);
        to += 1;
        if (from >= to)
            throw new Error("From number must be less than than To number");
        this.from = from;
        this.to = to;
        this._generatedRandoms = { length: 0 };
    }
    _giveRandom() {
        return Math.floor(this.from + Math.random() * (this.to - this.from), 10);
    }
    generate() {

        let possibilities = this._generatedRandoms.length < (this.to - this.from) ? true : false;
        while (possibilities) {
            const rnd = this._giveRandom();
            if (!this._generatedRandoms[rnd]) {
                this._generatedRandoms[rnd] = true;
                this._generatedRandoms.length += 1;
                possibilities = false;
                return rnd;
            }
        }
        return false;
    }

}

module.exports = Urand;