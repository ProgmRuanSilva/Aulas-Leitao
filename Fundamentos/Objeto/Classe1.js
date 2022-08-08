//é possivel agora depois de 2015 começar a fazer as classes.
class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => lancamentos.push (l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contadeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contadeLuz)
console.log(contas.sumario())
