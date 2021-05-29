const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft;
};

test("Basic tests", () => {
    expect(zeroFuel(50, 25, 2)).toBe(true);
    expect(zeroFuel(100, 50, 1)).toBe(false);
})