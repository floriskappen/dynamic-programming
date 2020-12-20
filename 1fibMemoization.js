/*  Write a function `fib(n)` that takes in a number as an argument.
 ** The function should return the n-th number of the Fibonacci sequence
 ** 
 ** The 1st and 2nd number of the sequence is 1.
 ** To generate the next number of the sequence, we sum the previous two.
 */

// Recursive implementation, O(2n) time, O(n) space
const fibRecursive = (n) => {
    // Base case. When this hits we will return a predefined value.
    if (n <= 2) return 1

    return fibRecursive(n - 1) + fibRecursive(n - 2)
}

console.log(fibRecursive(6)) // 8
console.log(fibRecursive(7)) // 13
console.log(fibRecursive(8)) // 21
// console.log(fibRecursive(50)) // This hangs because it's too heavy to calculate.


/*  O(2n) is not desirable at all. So let's implement memoization.
 ** Memoization is one of the overarching strategies to solve various dynamic programming problems.
 ** Called memoization because it's just a memo. A reminder.
 ** We're going to use an Object {}. Keys will be the arguments to the function. Value will be the return value.
 ** The memo object will look something like this:
 ** {
        3: 2,
        4: 3,
        5: 5,
        6: 8,
        ...etc
    }
 */

const fibMemoization = (n, memo = {}) => {
    // Memo implementation
    if (n in memo) return memo[n]

    // Base cases. When this hits we will return a predefined value.
    if (n <= 2) return 1

    // Set memo, give memo to recursive function
    memo[n] = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo)
    
    // Return value in memo
    return memo[n]
}

console.log(fibMemoization(6)) // 8
console.log(fibMemoization(7)) // 13
console.log(fibMemoization(8)) // 21
console.log(fibMemoization(50)) // 12586269025, now it works!