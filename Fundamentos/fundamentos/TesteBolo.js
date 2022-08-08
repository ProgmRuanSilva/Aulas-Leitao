function fazerBolo(fazer) {
 const fazerBoloSim = !!fazer    
 const naoFazer = !fazer

 return {fazerBoloSim, naoFazer}
}

console.log(fazerBolo(false))
console.log("Boa Garoto!!!")