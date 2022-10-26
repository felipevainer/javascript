function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('fano')
    if(Number(fano.value.length == 0 || Number(fano.value > ano))){
        window.alert('[ERRO] Digite um ano válido!')
    }else{
       var fsex = window.document.getElementsByName('radsex')
        var gênero = ''
        var idade = ano - Number(fano.value)
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
       if(fsex[0].checked){
            gênero = 'homem'
            window.document.body.style.background = 'blue'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'fotojovemm.png')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                img.setAttribute('src', 'foto-idoso-m.png')
            }
       }else if(fsex[1].checked){
        gênero = 'mulher'
        window.document.body.style.background = 'pink'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'foto-bebe-f.png')
        }else if(idade < 21){
            img.setAttribute('src', 'fotojovemf.png')
        }else if(idade < 50){
            img.setAttribute('src', 'foto-adulto-f.png')
        }else{
            img.setAttribute('src', 'foto-idoso-f.png')
        }
        
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}