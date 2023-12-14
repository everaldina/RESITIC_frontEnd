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
    dados = dados.slice(0, 7);
    dados.forEach(function (dado) {
        var dia = document.createElement("div");
        dia.classList.add("dia");
        dia.innerHTML = "<h3 class=\"dia\">".concat(dado.date, "</h3>");
        divSessao.appendChild(dia);
        var previsao = document.createElement("div");
        previsao.classList.add("previsao");
        previsao.innerHTML = " ".concat(dado.description, " <br>\n                                    Maximo: ").concat(dado.max, " | Minimo: ").concat(dado.min, " <br> \n                                   Probabilidade de chuva: ").concat(dado.rain_probability, "% <br> \n                                    Volume de chuva previsto: ").concat(dado.rain, "mm <br> \n                                    Nebulosidade: ").concat(dado.cloudiness, "%<br>\n                                ");
        divSessao.appendChild(previsao);
    });
})
    .catch(function (error) {
    console.error("Error:", error);
});
// educacao
var api_educacao = "https://newsapi.org/v2/everything?q=education&apiKey=78ce31bd656b4fc2b08b42ed839f6665";
