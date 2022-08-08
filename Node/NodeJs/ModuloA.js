//ele responde ao servidor
//hoje em dia nós temos que: aplicações front end são forjadas em arquivos e concatenados para ser enviados para o servidor dessa forma fica mais leve o site
//é muito comum ser usado o web service JASON
//em node um arquivo é um módulo (não nessesariamente visivel)
//se vc quiser colocar seu codigo em publico vc tem que exportar

//algumas formas de exportar seus arquivos

this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até Logo'