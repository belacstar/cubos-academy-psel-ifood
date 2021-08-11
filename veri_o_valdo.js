function solucao(obras) {
	//seu codigo aqui
    let valormax = obras[0].valor;
    let nomemax = obras[0].nome;
   for (const obra of obras) {
       if (obra.valor > valormax) {
           valormax = obra.valor;
           nomemax = obra.nome;
       }
   }  
    console.log(nomemax);
}
