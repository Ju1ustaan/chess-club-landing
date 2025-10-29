const text = document.querySelector('.main__circle-text p')

text.innerHTML = text.innerText.repeat(4).split('').map((el, idx) => {
     return `<span style="transform:rotate(${idx * 2.5}deg">${el}</span>`
}).join('')

