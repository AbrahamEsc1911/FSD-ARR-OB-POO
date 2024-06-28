//// RETOS ARRAY, OBJETOS Y POO

//// Reto 1
const arrRamdon = (strArr : string[]) : string => {
    const numRandom : number = Math.round(Math.random() * (strArr.length - 1))
    return `length del array ${strArr.length} and letra aleatoria del array ${strArr[numRandom]}`
}

//// Reto 2
const planetasImpr = (str : string[]) : string => {
    str.forEach(planeta => {
        console.log(planeta) 
    })
    return ``
}


module.exports = {
    arrRamdon,
    planetasImpr,
}