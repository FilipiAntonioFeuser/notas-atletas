let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   for(let i = 0; i < atletas.length; i++ ){
    let nome = atletas[i].nome
    let notas = atletas[i].notas

    let notasOriginais = [...notas];
    
    notas.sort((a, b)=> a - b);

    let notasValidas = notas.slice(1,4);

    let soma = 0;

    notasValidas.forEach(nota => soma += nota);

    let media = soma/notasValidas.length

    console.log(`Atleta: ${nome}`);
    console.log(`Notas Obtidas: ${notasOriginais.join(",")}`);
    console.log(`Média Válida: ${media.toFixed(6).replace('.', ',')}`);
    console.log("");
}