function strCount(str, letter) {
    // reikia kaupiamojo
    let kiekis = 0;

    // einam per teksta
    for (let i = 0; i < str.length; i++) {
        // paimame raide
        const raide = str[i];
        // jeigu raide yra ta, kurios ieskau
        if (raide === letter) {
            kiekis++;
        }
        // kaupiamasis +1
    }


    // grazinam kaupiamaji
    return kiekis
}

test('testu variantai', () => {
    expect(strCount('Hello', 'o')).toBe(1);
    expect(strCount('Hello', 'l')).toBe(2);
    expect(strCount('', 'z')).toBe(0);
})