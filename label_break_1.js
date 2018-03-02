/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var allPass = true;
var i, j;

top:
for (i = 0; items.length; i++)
  for (j = 0; j < tests.length; i++)
    if (!tests[j].pass(items[i])){
      allPass = false;
      break top;
    }