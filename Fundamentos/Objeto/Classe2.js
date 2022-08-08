class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }   
}

class Pai extends Avo {
    constructor(sobrenome, profissão = 'Professor') {
        super(sobrenome)
        this.profissão = profissão //isso diz que vc será o que vc falar
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)