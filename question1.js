function isFibonacci(num) {
    let a = 0, b = 1, next = 0;

    if (num === 0 || num === 1) return true;

    while (next < num) {
        next = a + b;
        a = b;
        b = next;
    }

    return next === num;
}

const number = 21; // Número a ser verificado
if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}