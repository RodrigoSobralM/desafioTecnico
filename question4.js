function nextInSequenceA() {
    const sequence = [1, 3, 5, 7];
    const lastNumber = sequence[sequence.length - 1];
    return lastNumber + 2; // Sequência de números ímpares
}

function nextInSequenceB() {
    const sequence = [2, 4, 8, 16, 32, 64];
    const lastNumber = sequence[sequence.length - 1];
    return lastNumber * 2; // Cada número é o dobro do anterior
}

function nextInSequenceC() {
    const sequence = [0, 1, 4, 9, 16, 25, 36];
    const nextIndex = sequence.length;
    return nextIndex * nextIndex; // Sequência de quadrados perfeitos
}

function nextInSequenceD() {
    const sequence = [4, 16, 36, 64];
    const nextIndex = (sequence.length + 1) * 2;
    return nextIndex * nextIndex; // Quadrados perfeitos pares
}

function nextInSequenceE() {
    const sequence = [1, 1, 2, 3, 5, 8];
    const length = sequence.length;
    return sequence[length - 1] + sequence[length - 2]; // Sequência de Fibonacci
}

function nextInSequenceF() {
    const sequence = [2, 10, 12, 16, 17, 18, 19];
    return 200; // A sequência é baseada em números que contêm a letra "d" quando escritos em inglês
}

console.log("a) Próximo número:", nextInSequenceA()); 
console.log("b) Próximo número:", nextInSequenceB()); 
console.log("c) Próximo número:", nextInSequenceC()); 
console.log("d) Próximo número:", nextInSequenceD()); 
console.log("e) Próximo número:", nextInSequenceE()); 
console.log("f) Próximo número:", nextInSequenceF()); 
