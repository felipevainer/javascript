function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var hdia = window.document.querySelector('h1#hdia')
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        hdia.innerText = 'Bom dia!'
        img.src = 'imagens/foto-manha.png'
        msg.style.color = '#fdc186'
        window.document.body.style.background = '#fdc186'
    }else if(hora >= 12 && hora <= 18){
        hdia.innerText = 'Boa tarde!'
        img.src = 'imagens/foto-tarde.png'
        msg.style.color = '#b53c02'
        window.document.body.style.background = '#b53c02'
    }else {
        hdia.innerText = 'Boa noite!'
        img.src = 'imagens/foto-noite.png'
        msg.style.color = '#012652'
        window.document.body.style.background = '#012652'
    }
}