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

fetch(api_tempo,)
    .then(response => response.json())
    .then(data => {
        const sessaoServicos= document.getElementById("services");
        const divSessao = sessaoServicos!.querySelector(".content");

        data.results.forecast.forEach(forecast => {
            dados.push(forecast);
        });

        dados.forEach(dado => {
            const p = document.createElement("p");
            p.innerHTML = `<strong>${dado.date}</strong> - ${dado.description} | Maximo: ${dado.max} | Minimo: ${dado.min} | probabilidade de chuva: ${dado.rain_probability}%<br>
                            Volume de chuva previsto: ${dado.rain}mm - nebulosidade: ${dado.cloudiness}%<br>`;
            divSessao!.appendChild(p);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });

