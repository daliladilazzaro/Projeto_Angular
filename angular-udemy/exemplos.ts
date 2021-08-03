let message: string = "Diários de um Vampiro"
console.log(message)

let episode: number = 4
console.log("Episódio atual: " + episode)
episode += 1
console.log("Próximo episódio: " + episode)

let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}

let distance = 11
console.log(`${distance} de distância é o suficiente? ${isEnoughToBeatMF(distance) ? 'SIM' : 'NÃO'}`)

let call = (name: string) => console.log(`Você está ouvindo? ${name}`)
call('R2')

function inc(speed: number, inc: number = 1): number {
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)