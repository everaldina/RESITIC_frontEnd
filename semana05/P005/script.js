// latitude e longitude da uesc
// -14.7967668,-39.1733824
var Dado = /** @class */ (function () {
    function Dado(date, max, min, cloudiness, rain, rain_probability, description) {
        this.date = date;
        this.max = max;
        this.min = min;
        this.cloudiness = cloudiness;
        this.rain = rain;
        this.rain_probability = rain_probability;
        this.description = description;
    }
    return Dado;
}());
var dados = [];
var api_tempo = "https://api.hgbrasil.com/weather?format=json-cors&woeid=455955&key=91076157";
fetch(api_tempo)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var sessaoServicos = document.getElementById("services");
    var divSessao = sessaoServicos.querySelector(".content");
    data.results.forecast.forEach(function (forecast) {
        dados.push(forecast);
    });
    dados.forEach(function (dado) {
        var p = document.createElement("p");
        p.innerHTML = "<strong>".concat(dado.date, "</strong> - ").concat(dado.description, " | Maximo: ").concat(dado.max, " | Minimo: ").concat(dado.min, " | probabilidade de chuva: ").concat(dado.rain_probability, "%<br>\n                            Volume de chuva previsto: ").concat(dado.rain, "mm - nebulosidade: ").concat(dado.cloudiness, "%<br>");
        divSessao.appendChild(p);
    });
})
    .catch(function (error) {
    console.error("Error:", error);
});
