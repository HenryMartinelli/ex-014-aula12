function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora > 0 && hora < 12) {
        img.innerHTML = '<img src="manha.jpg">'
        document.body.style.background = '#c99b05'
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = '<img src="tarde.jpg">'
        document.body.style.background = '#b36308'
    } else {
        img.innerHTML = '<img src="noite.jpg">'
        document.body.style.background = '#080701'
    }
}