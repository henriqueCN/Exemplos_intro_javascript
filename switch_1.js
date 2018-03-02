/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

switch (tipofruta) {
   case "Laranja":
      console.log("O quilo da laranja está R$0,59.<br>");
      break;
   case "Maçã":
      console.log("O quilo da maçã está R$0,32.<br>");
      break;
   case "Banana":
      console.log("O quilo da banana está R$0,48.<br>");
      break;
   case "Cereja":
      console.log("O quilo da cereja está R$3,00.<br>");
      break;
   case "Manga":
      console.log("O quilo da manga está R$0,56.<br>");
       break;
   case "Mamão":
      console.log("O quilo do mamão está R$2,23.<br>");
      break;
   default:
      console.log("Desculpe, não temos " + tipofruta + ".<br>");
}
console.log("Gostaria de mais alguma coisa?<br>");
