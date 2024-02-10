    function carregar(){

        var msg = document.getElementById('msg')
        var img = document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()

        msg.innerHTML = `Agora são ${hora} horas.`

        if (hora >= 0 && hora < 12){
            // BOM DIA!
            img.src = 'fotomanha.png'
            document.body.style.background = '#a6b9c8'
            document.querySelector('h1').style.color = 'black'
        } else if(hora >= 12 && hora <= 18){
            //BOA TARDE!
            img.src = 'fototarde.png'
            document.body.style.background = '#b44c06'
            document.getElementById('footer-text').style.color = 'white'
        }
        else{
            //BOA NOITE!
            img.src = 'fotonoite.png'
            document.body.style.background = '#07314f'
            document.getElementById('footer-text').style.color = 'white'
        }
    }
