const escola = "Cod3r"

console.log(escola.charAt(4))
//.charAt(4) é um comando para dizer a letra em que se encontra a casa
console.log(escola.charAt(5))
// em caso de não aver nenhum caracter ele volta como em branco
console.log(escola.charCodeAt(3))
// Ele voltou no indice html
console.log(escola.indexOf("3"))

console.log(escola.substring(1))
//ele assumiu do 1 até o final

console.log(escola.substring(0, 3))
//ele assume as letras antes do três

console.log("Escola ".concat(escola).concat("!"));

console.log(escola.replace(3, "e"))
//ele retirou o numero 3 e colocou o "e"

console.log("Ana,Maria,Pedro".split(","));
//transformou uma string em array

console.log("3" + 2);
//ele concatena pois a string tem preferencia, com - ele subtrai pois não faz sentido
