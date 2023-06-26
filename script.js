const title = document.getElementById('title')
const btn = document.querySelector('.btn')
const inp = document.getElementById('inputValue')


const reverseS = () => {
    let word = ''

    for (let i = 0; i < inp.value.length; i++){
            word = inp.value[i] + word     
    }

    return word
}




btn.onclick = () => {
    

    title.innerText = reverseS()
    inp.value = ''
}
