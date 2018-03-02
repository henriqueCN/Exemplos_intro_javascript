/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// Cria um objeto do tipo UserException
function UserException(mensagem) {
  this.mensagem = mensagem;
  this.nome = "UserException";
}

// Realiza a conversão da exceção para uma string adequada quando usada como uma string.
// (ex. pelo console de erro)
UserException.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
}

// Cria uma instância de um tipo de objeto e lança ela
throw new UserException("Valor muito alto");