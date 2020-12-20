# Memoization recipe

1. Make it work.
   - Visualize the problem as a tree
   - Implement the tree using recursion
   - Test it
2. Make it efficient.
   - Add a memo object. Keys are the arguments, values are the return values.
   - Add a base case to return memo values.
   - Store return values in the memo.