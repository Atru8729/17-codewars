function differenceInAges(ages) {
    let minAges = Infinity;
    let maxAges = 0;

    for (let i = 0; i < ages.length; i++) {
        const skaicius = ages[i];
        if (maxAges < skaicius) {
            maxAges = skaicius;
        }
        if (minAges > skaicius) {
            minAges = skaicius;
        }

    }
    return [minAges, maxAges, maxAges - minAges];
}


test("Basic tests", () => {
    expect(differenceInAges([82, 15, 6, 38, 35])).toStrictEqual([6, 82, 76]);
    expect(differenceInAges([57, 99, 14, 32])).toStrictEqual([14, 99, 85]);
})