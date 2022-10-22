function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var dia = data.getDay()
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var bdia = document.getElementById('bdia')
    if(dia == 0){
        var d = 'Domindo'
    }else if(dia == 1){
        var d = 'Segunda-feira'
    }else if(dia == 2){
        var d = 'Terça-feira'
    }else if(dia == 3){
        var d = 'Quarta-feira'
    }else if(dia == 4){
        var d ='Quinta-feira'
    }else if(dia == 5){
        var d = 'Sexta-feira'
    }else if(dia == 6){
        var d = 'Sábado'
    }
    msg.innerHTML = `Agora são ${hora} horas. Tenha uma ótima ${d}`
    if(hora >=0 && hora < 12){
        bdia.innerHTML = 'Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9e'
        msg.style.color= '#e2cd9e'
    }else if(hora >= 12 && hora <= 18){
        bdia.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        msg.style.color = '#b9846f'
    }else{
        bdia.innerHTML = 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        msg.style.color = '#515154'
    }
}