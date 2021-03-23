# Challenge #1
conditionally control **loop direction** depending on the variable `reverse`.
# Challenge #2
challenge 1 + you have to conditionally do `sum += sum + 77777777` **before or after** the loop depending on `reverse`
# Rules
1. Be faster than `'repeat yourself'` (for challenge #2, you may be a bit slower)
2. Do not repeat the inner loop: `sum = arr[i] - sum`
3. Do not repeat the conditionally beforeOrAfter code: `sum += sum + 77777777`
4. toggle `reverse` to false and see if it's still fast

...<br>
you must use both `sum = arr[i] - sum` and `sum += sum + 77777777` once and ONLY once.
## start at `Challenge 1.mjs` and go to `//your stuff here`
I suggest you checkout another branch for your solution: `git checkout -b my-solution`

# QUESTIONS
I don't understand why `'repeat yourself'` is slower in `Challenge 1 .mjs` than in `Challenge 2.mjs` which has more calculations