// Iteratively generates a Fibonacci Sequence up to the user-specified number of digits
function fibs(num) {
    let fibonacci = [0];

    for (let i = 1; i < num; i++) {
        let fibNumber;

        if (!fibonacci[i - 1]) {
            fibNumber = 1;
            fibonacci.push(fibNumber);
        } else {
            fibNumber = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(fibNumber);
        }
    }

    return fibonacci;
}