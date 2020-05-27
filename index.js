const _from = Symbol();
const _to = Symbol();
const _generatedRandoms = Symbol();
const _giveRandom = Symbol();

class Xrand {
    constructor(from, to) {
        if (typeof from !== "number" || typeof to !== "number") {
            throw new Error("From and To must be integers.");
        }
        from = parseInt(from, 10);
        to = parseInt(to, 10);
        to += 1;
        if (from > to)
            throw new Error("'From' number must be less than or equla to 'To' number");
        this[_from] = from;
        this[_to] = to;
        this[_generatedRandoms] = { length: 0 };

        this[_giveRandom] = function () {
            return Math.floor(this[_from] + Math.random() * (this[_to] - this[_from]), 10);
        }
    }

    generate() {
        let possibilities = this[_generatedRandoms].length < (this[_to] - this[_from]) ? true : false;

        while (possibilities) {
            const rnd = this[_giveRandom]();
            if (!this[_generatedRandoms][rnd]) {
                this[_generatedRandoms][rnd] = true;
                this[_generatedRandoms].length += 1;
                possibilities = false;
                return rnd;
            }
        }
        return false;
    }


    generateAll() {
        const arr = [];
        const looUntil = this[_to] - this[_from];
        for (let i = 0; i < looUntil; i++) {
            arr.push(this.generate());
        }
        return arr;
    }
}

module.exports = Xrand;