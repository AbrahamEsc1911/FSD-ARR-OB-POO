//// RETOS ARRAY, OBJETOS Y POO
//// Reto 1
var arrRamdon = function (strArr) {
    var numRandom = Math.round(Math.random() * (strArr.length - 1));
    return "length del array ".concat(strArr.length, " and letra aleatoria del array ").concat(strArr[numRandom]);
};
//// Reto 2
var planetasImpr = function (str) {
    str.forEach(function (planeta) {
        console.log(planeta);
    });
    return "";
};
module.exports = {
    arrRamdon: arrRamdon,
    planetasImpr: planetasImpr,
};
