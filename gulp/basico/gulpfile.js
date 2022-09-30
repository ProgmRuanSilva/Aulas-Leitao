//gulp e feito para automatizacao de tarefas
//objtv copiar arquivos da pasta A 

const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('tarefa antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('tarefa antes 2')
    return cb()
}

function copiar(cb) {
//src para definir os arquivos de entrada 
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
//gulp.src(['pastaA/**/*.txt']) para selecionar qualquer
    //dest para transfomar os aquivos selecionados
        .pipe(gulp.dest('pastaB'))//ele cria automaticamente a pasta
    return cb()
}

const fim = cb => {
    console.log('tarefa final')
    return cb()
}


//precisamos exportar 
module.exports.default = series(
    parallel(antes1, antes2), //vc pode encadear chamadas em paralelo
    copiar,//note que nao ha garantia de que sempre a primeira funcao sera chamada 
    fim,
    )
//note que estamos exportando como series entao as chamadas seram usadas uma apos as outras

//gulp espera reber default quando exportada

//lembre-se cada funcao e uma tarefa