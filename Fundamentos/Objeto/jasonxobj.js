//Diverenças entre jason e Obj
//jason não tem funções só tem dados.
//é um formato muito simples e usado para 'explicar' em quaquer liguagem.
//quando vc trabalha com por exemplo em webservece etc.

const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj))
//jason é um formato de dados não de execução.

//console.log(JASON.parse("{a: 1, b: 2, c: 3,")) não é um formato valido
//console.log(JASON.parse("{ 'a:' 1, 'b': 2, 'c': 3}")) tambem não é um formato valido
//todos os atributos devem ser delimitado com aspas duplas
//console.log(JASON.parse('{ "a": 1, "b": 2, "c": 3 }')) não funcionou
//console.log(JASON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) JASON is not definded.

/*

{
	"Nome": "Ana",
	"idade": 56,
	"legal": true,
	"filhos": [{
		"nome": "Junior",
		"Idade": 18
	}, {
		"legal": false
	}]
}

tudo isso nós fazemos com o JASON.lint
*/
