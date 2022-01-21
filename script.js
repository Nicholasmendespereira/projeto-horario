function carregar() {
    var msg = window.document.getElementById('msg')
    var agora = new Date()
   // var hora = agora.getHours()
    var hora = 18
    var min = agora.getMinutes()
    var sec = agora.getSeconds()    
    var img = window.document.getElementById('img')
    msg.innerHTML = `Está é a sua Hora Atual ${hora}:${min}:${sec} `

    if (hora > 0 && hora < 12) {
        //Dia!
        img.scr = 'imagens/dia/dia001.png'
        
    }else if (hora >= 12 && hora < 18) {
        //Tarde!
        img.src = 'imagens/tarde/tarde001.png'
    }else if (hora >= 18) {
        //Noite
        img.src = 'imagens/noite/noite001.png'
    }


}