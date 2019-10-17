function teste1(num){
    if(num > 7)
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ; no if ou estruturas de controle
        console.log(num)
    }
}
teste2(5)
teste2(10)