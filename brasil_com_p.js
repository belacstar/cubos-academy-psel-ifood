function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    let encontrado = false
   for (let item of palavras) {
       if (item[0] === primeiraLetra && item[1] === segundaLetra) {
           console.log(item);
           encontrado = true;
           
       }
   } 
    if (!encontrado) {
    console.log("NENHUMA");
}
}