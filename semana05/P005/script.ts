// latitude e longitude da uesc
// -14.7967668,-39.1733824

class Dado{
    date: string;
    max: number;
    min: number;
    cloudiness: number;
    rain: number;
    rain_probability: number;
    description: string;

    constructor(date: string, max: number, min: number, cloudiness: number, rain: number, rain_probability: number, description: string){
        this.date = date;
        this.max = max;
        this.min = min;
        this.cloudiness = cloudiness;
        this.rain = rain;
        this.rain_probability = rain_probability;
        this.description = description;
    }
}

let dados: Dado[] = [];

let api_tempo = "https://api.hgbrasil.com/weather?format=json-cors&woeid=455955&key=91076157";

fetch(api_tempo)
    .then(response => response.json())
    .then(data => {
        const sessaoServicos= document.getElementById("services");
        const divSessao = sessaoServicos!.querySelector(".content");

        data.results.forecast.forEach(forecast => {
            dados.push(forecast);
        });

        dados = dados.slice(0, 7);
        dados.forEach(dado => {
            const dia = document.createElement("div");
            dia.classList.add("dia");
            dia.innerHTML = `<h3 class="dia">${dado.date}</h3>`;
            divSessao!.appendChild(dia);

            const previsao = document.createElement("div");
            previsao.classList.add("previsao");
            previsao.innerHTML = ` ${dado.description} <br>
                                    Maximo: ${dado.max} | Minimo: ${dado.min} <br> 
                                   Probabilidade de chuva: ${dado.rain_probability}% <br> 
                                    Volume de chuva previsto: ${dado.rain}mm <br> 
                                    Nebulosidade: ${dado.cloudiness}%<br>
                                `;
            divSessao!.appendChild(previsao);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });

// educacao
let api_educacao = "https://newsapi.org/v2/everything?q=education&apiKey=78ce31bd656b4fc2b08b42ed839f6665";

fetch(api_educacao)
    .then(response => response.json())
    .then(data => {
        
    })
    .catch(error => {
        console.error("Error:", error);
    });