function positiveSum(arr) {
    // pagal nutylejima, bendra suma is pradziu lygu nuliui
    let bendraSuma = 0;

    // einam per skaiciu sarasa
    for (let i = 0; i < arr.length; i++) {
        //pasiimu skaiciu
        const skaicius = arr[i];
        // jeigu yra teigiamas
        if (skaicius > 0) {
            // tai pridedu prie bendros sumos
            bendraSuma = bendraSuma + skaicius;
        }
    }

    // grziname bendros sumos rezultata
    return bendraSuma;
}



test("Basic tests", () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
    expect(positiveSum([])).toBe(0);
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
    expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9);
})