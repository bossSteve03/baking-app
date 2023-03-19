const button = document.body.querySelector('.button')

function check () {
    document.body.querySelector('h1').style.color = 'blue';
    window.alert('nothing\'s wrong, actually everything\'s perfect')
}

button.addEventListener('click', check)
