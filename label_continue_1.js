/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var i, j;

loop1:
for (i = 0; i < 3; i++) {      //O primeiro 'for' é etiquetado com "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //O segundo é etiquetado com "loop2"
      if (i == 1 && j == 1) {
         continue loop1;
      } else {
         console.log("i = " + i + ", j = " + j);
      }
   }
}

// Sua saída é:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Note como pula-se "i = 1, j = 1" e "i = 1, j = 2"