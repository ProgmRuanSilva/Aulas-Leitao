document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()
    
    elemento.style.borderColor = '#616161' /*se ouver uma classe nolabel ou sem nome ele aplica esse script */
    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) //para colocar antes do objeto filho 
    }
})