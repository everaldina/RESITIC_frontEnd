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
var Noticia = /** @class */ (function () {
    function Noticia(title, description, url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }
    return Noticia;
}());
var dados = [];
var api_tempo = "https://api.hgbrasil.com/weather?format=json-cors&woeid=455955&key=91076157";
fetch(api_tempo)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var sessaoServicos = document.getElementById("services");
    var divSessao = sessaoServicos.querySelector(".content");
    data.results.forecast.forEach(function (forecast) {
        dados.push(new Dado(forecast.date, forecast.max, forecast.min, forecast.cloudiness, forecast.rain, forecast.rain_probability, forecast.description));
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
fetch(api_educacao)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var _a;
    var noticias = [];
    // pegando os artigos
    var artigos = data.articles;
    artigos.sort(function () { return Math.random() - 0.5; }); // embaralha os artigos
    for (var i = 0; i < 6; i++) {
        var artigo = artigos[i];
        noticias.push(new Noticia(artigo.title, artigo.description, artigo.url));
    }
    // colocando as noticias na pagina
    var sessaoNoticias = document.getElementById("news");
    var divSessaoNoticias = sessaoNoticias.querySelector(".content");
    var sessaoResultados = document.getElementById("results");
    var divSessaoResultados = (_a = sessaoResultados.querySelector(".content")) === null || _a === void 0 ? void 0 : _a.querySelector("ul");
    for (var i = 0; i < 6; i++) {
        if (i < 3) {
            var link = document.createElement("a");
            link.href = noticias[i].url;
            link.innerHTML = " <h3>".concat(noticias[i].title, "</h3>\n                                    <h4>").concat(noticias[i].description, "</h4>\n                                ");
            divSessaoNoticias.appendChild(link);
        }
        else {
            var lista = document.createElement("li");
            lista.innerHTML = " <a href=\"".concat(noticias[i].url, "\"><h4>").concat(noticias[i].title, "</h4></a> \n                                    <p>").concat(noticias[i].description, "</p>");
            divSessaoResultados.appendChild(lista);
        }
    }
})
    .catch(function (error) {
    console.error("Error:", error);
});
