var numero = 1
{
    var numero = 2
    console.log("dentro =", numero)
}
console.log("fora = ", numero)
//fuja do escopo global
//o comportamento do var mudou mesmo dentro de uma chave por isso o resultado foi de 2 nos dois resultados