// Fibonacci done recursively
function fibsRec(n) {
    // base cases (n ===0, n === 1, n === 3)
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    // Recursive case
    } else {
        const prev = fibsRec(n - 1);
        const last = prev[prev.length - 1];
        const secondLast = prev[prev.length - 2];
        return [...prev, last + secondLast];
    }
}

console.log(fibsRec(2)) // logs [ 0, 1 ]
console.log(fibsRec(4)) // logs [ 0, 1, 1, 2 ]
console.log(fibsRec(6)) // logs [ 0, 1, 1, 2, 3, 5 ]
