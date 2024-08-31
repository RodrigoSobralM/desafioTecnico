function countLetterA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

const inputString = "Abracadabra";
const count = countLetterA(inputString);

if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
} else {
    console.log("A letra 'a' não aparece na string.");
}