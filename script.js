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

// Same as above, except with recursion instead of iteration
function fibsRec(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    let arr = fibsRec(n - 1);
  
    return arr.concat(arr[arr.length - 1] + arr[arr.length - 2]);
}