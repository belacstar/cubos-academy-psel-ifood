function solucao(obj) {
	//seu codigo aqui
 if (obj.jaTomouVacina === false) {
     if (obj.temComorbidade || obj.idade >= 60) {
         if (obj.temComorbidade && obj.idade < 60) {
             console.log("APTA POR COMORBIDADE");
         } else {
             console.log("APTA POR IDADE");
         }
          } else {
         console.log("INAPTA");
     }
 } else {
     console.log("JA TOMOU VACINA");
 }
}   