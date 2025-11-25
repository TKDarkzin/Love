setInterval(CarregarAmor, 1000);
setInterval(CarregarLoop, 3000);

const imgs = 7
let imgAt = 1

const horaN = 16
const minN = "00"
const secN = "00"
const diaN = 25
const mesN = "09"
const anoN = 2025

function CarregarAmor(){
    let msg = document.getElementById("msg")
    let msg1 = document.getElementById("msg1")
    let msg2 = document.getElementById("msg2")
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()+1
    let ano = data.getFullYear()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    msg.innerHTML = `Desde ${diaN}/${mesN}/${anoN} às ${horaN}:${minN}:${secN}`

    let dataInicial = new Date(anoN, Number(mesN)-1, diaN, horaN, minN, secN)
    let now = new Date(ano, mes-1, dia, hora, min, sec)
    
    let diff = now - dataInicial
    
    let dias = Math.floor(diff / (1000 * 60 * 60 * 24))
    let horas = Math.floor((diff / (1000 * 60 * 60)) % 24)
    let minutos = Math.floor((diff / (1000 * 60)) % 60)
    let segundos = Math.floor((diff / 1000) % 60)

    let hours = 0
    let minutes = 0
    let seconds = 0
    let days
    let months

    if(dia > diaN){
        days = diaN - dia
        if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
            days += 31
        }
        else if(mes == 2){
            if(ano % 4 == 0){
                days += 29
            }
            else{
                days += 28
            }
        }
        else{
            days += 30
        }
    }
    else{
        days = diaN - dia
    }

    if(mes > Number(mesN)){
        months = Number(mesN) - mes + 12
    }
    else if(mes == Number(mesN) && dia > diaN){
        months = 11
    }
    else{
        months = Number(mesN) - mes
    }

    if(hora >= horaN){
        hours = horaN - hora + 23
    }
    else if (hora <= horaN){
        hours = horaN - hora - 1
    }
    else if (hora == horaN && min > minN){
        hours = 23
    }

    if(min >= Number(minN)){
        minutes = Number(minN) - min + 59
    }
    else if(min+1 == Number(minN)){
        minutes = 0
        hours = 0
    }
    else{
        minutes = Number(minN) - min
    }
    
    if(sec > Number(secN)){
        seconds = Number(secN) - sec + 60
    }
    else{
        seconds = Number(secN) - sec
    }

    if(hours > 16 && hours < 24){
        days--;
    }


    msg1.innerHTML = `Juntos há ${dias} dias, ${horas}h ${minutos}m ${segundos}s ❤️`
    msg2.innerHTML = `Faltam ${days} dias, ${months} meses, ${hours}h ${minutes}m ${seconds}s para nosso aniversário! 💖`
}

function CarregarLoop(){
    let img = document.getElementById("img")
    loop(img)
}

function loop(element){
    element.src = `../img/Love${imgAt}.jpg`
    imgAt++
    if(imgAt > imgs){
        imgAt = 1
    }
}