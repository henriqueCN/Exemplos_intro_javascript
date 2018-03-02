openMyFile();
try {
  writeMyFile(theData); //Isso pode lançar um erro
} catch(e) {  
  handleError(e); // Se temos um erro temos que lidar com ele
} finally {
  closeMyFile(); // feche sempre o recurso
}

