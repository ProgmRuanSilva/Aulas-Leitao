//exemplo de call back no browser
document.getElementsByTagName('body')[0].onClick = function (e) {
    console.log('O evento ocorreu')
}
// nesse caso ele só ativa a função se tiver a ação do clique