var message = "Diários de um Vampiro";
console.log(message);
var episode = 4;
console.log("Episódio atual: " + episode);
episode += 1;
console.log("Próximo episódio: " + episode);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log(distance + " de dist\u00E2ncia \u00E9 o suficiente? " + (isEnoughToBeatMF(distance) ? 'SIM' : 'NÃO'));
var call = function (name) { return console.log("Voc\u00EA est\u00E1 ouvindo? " + name); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
