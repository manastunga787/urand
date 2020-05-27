const Xrand = require("../index");

test("It generates a number between 1 to 3 randomly", () => {
    const xrand = new Xrand(1, 3);
    const value = xrand.generate();
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(3);
});

test("It gives 11 numbers between -5 and 5", () => {
    const values = new Xrand(-5, 5).generateAll();
    expect(values).toHaveLength(11);
    values.forEach((v) => {
        expect(v).toBeLessThanOrEqual(5);
        expect(v).toBeGreaterThanOrEqual(-5);
    });
});

test("It must throw error if 'From' and 'To' numbers are not given", () => {
    expect(() => new Xrand()).toThrow("From and To must be integers.");
});

test("It must throw error if 'To' number is less than from 'From' number", () => {
    expect(() => new Xrand(5, 1)).toThrow();
});

test("It must return only one integer if 'From' and 'To' numbers are equal", () => {
    const values = new Xrand(5, 5).generateAll();
    expect(values).toHaveLength(1);
    expect(values[0]).toBe(5);
});

