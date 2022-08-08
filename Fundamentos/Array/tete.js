const myNumbers = [1, 42, 33, 24, 75] 
for (i = 0; i < myNumbers.length; i++) {
    console.log(myNumbers[i]);
}

myNumbers.forEach(function(myNumbers, index) {
    console.log('Numero: ' + index, myNumbers)
})