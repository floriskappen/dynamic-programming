/*  Say that you are a traveler on a 2D grid. You begin in the 
    top-left corner and your goal is to travel to the bottom-right corner.
 ** You may only move down or right.

 ** In how many ways can you travel to the goal on a grid with dimensions m * n? 
 ** Tip: Structure it like a tree.

 ** All we're doing when choosing to go either down or right, is reducing the dimensions
    of the leftover grid by one. If one of the two dimensions is 0, we cannot travel
    that way. So we'll return 0 to the parent.
 ** If both of the dimensions are 1, we will return 1 to the parent. Once we are done
    we just return the sum of each child to their parent and that's how we solve the problem.

 ** This is just a spinoff of the Fibonacci sequence.
 ** First, we will implement the basic recursive function just like with fibRecursive()
 */

const gridTraveler = (m, n) => {
    // Base cases. When this hits we will return a predefined value.
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
// console.log(gridTraveler(18, 18)) // 2333606220 <- this will hang.

/*  To understand why it's so slow, we should try to find the time complexity of this function.
 ** In order to do this we should try to recognize the height of this tree. For this we want
    to start at the top and choose preferably the longest path down to one of our base cases.

 ** Time complexity: O(2n+m) time. Because we have to calculate both the horizontal and vertical,
    because we cannot move diagnoally.

 ** To minimize the time complexity we can start looking at duplicates in the tree. Asking the
    amount of ways to travel by a 2x1 grid, is the same amount of ways to travel by a 1x2 grid.

 ** We can memoize it to change the time complexity to O(m*m) which is much faster.
 */

const gridTravelerMemoized = (m, n, memo = {}) => {
    const key = `${m},${n}`
    // Are the args in the memo?
    if (key in memo) return memo[key]

    // Base cases. When this hits we will return a predefined value.
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0

    memo[key] = gridTravelerMemoized(m - 1, n, memo) + gridTravelerMemoized(m, n - 1, memo)
    return memo[key]
}

console.log(gridTravelerMemoized(1, 1)) // 1
console.log(gridTravelerMemoized(2, 3)) // 3
console.log(gridTravelerMemoized(3, 2)) // 3
console.log(gridTravelerMemoized(3, 3)) // 6
console.log(gridTravelerMemoized(18, 18)) // 2333606220
