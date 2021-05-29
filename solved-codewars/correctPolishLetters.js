/*
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
*/

function correctPolishLetters(string) {
    let convertedString = '';

    for (let i = 0; i < string.length; i++) {
        const raide = string[i];

        switch (raide) {
            case 'ą': convertedString += 'a'; break;
            case 'ć': convertedString += 'c'; break;
            case 'ę': convertedString += 'e'; break;
            case 'ł': convertedString += 'l'; break;
            case 'ń': convertedString += 'n'; break;
            case 'ó': convertedString += 'o'; break;
            case 'ś': convertedString += 's'; break;
            case 'ó': convertedString += 'o'; break;
            case 'ź': convertedString += 'z'; break;
            case 'ż': convertedString += 'z'; break;

            default:
                convertedString += raide;
                break;
        }
    }

    return convertedString;
}

test("Basic tests", () => {
    expect(correctPolishLetters("Jędrzej Błądziński")).toBe("Jedrzej Bladzinski");
    expect(correctPolishLetters("Lech Wałęsa")).toBe("Lech Walesa");
    expect(correctPolishLetters("Maria Skłodowska-Curie")).toBe("Maria Sklodowska-Curie");
})