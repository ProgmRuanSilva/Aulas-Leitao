const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs [2]()
funcs [8]()
//o erro está no var que nesse causo não tem escopo