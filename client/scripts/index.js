const button = document.body.querySelector('.button')

function check () {
    window.alert('nothing wrong, actually everything\'s perfect')
    document.body.querySelector('h1').style.color = 'blue'
}

button.addEventListener('click', check)
