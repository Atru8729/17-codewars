function countSheeps(arrayOfSheep) {
    let counter = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            counter++;
        }
    }
    return counter;
}

// TODO May the force be with you

test("Tests", () => {
    var array1 = [true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true];

    expect(countSheeps(array1)).toBe(17)
})

/*
Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array
(true means present).
*/