// ele diz que mostrará uma função auto invocada

//isso geralmente usado em browzer 

//IIFE -> immediately invoked function Expression

(function() { // ao fazer isso vc burla o escopo global
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})() // esse padrão é obrigatorio.
//os dois console.log() estão em escopo local e não global