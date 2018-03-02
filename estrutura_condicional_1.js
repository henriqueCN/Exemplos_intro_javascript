/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function verifiqueDados() {
  if (document.form1.tresCaracteres.value.length == 3) {
    return true;
  } else {
    alert("Informe exatamente três caracteres. " +
      document.form1.tresCaracteres.value + " não é válido.");
    return false;
  }
}