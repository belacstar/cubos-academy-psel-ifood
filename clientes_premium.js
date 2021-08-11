function solucao(precos) {
    //seu codigo aqui
  let soma = 0;
     let maior = -1;
       for (const preco of precos) {
           soma += preco;
           if (preco > maior) {
           maior = preco;
    }
       }
   if (soma > 1000) {
       if (maior > 200) {
            console.log("PREMIUM");
        } else { 
            console.log("VIP");
        }
  } else {       
console.log("NORMAL");
    }
   }
