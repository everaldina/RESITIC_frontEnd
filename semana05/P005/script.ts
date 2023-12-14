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

class Noticia{
    title: string;
    description: string;
    url: string;

    constructor(title: string, description: string, url: string){
        this.title = title;
        this.description = description;
        this.url = url;
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
            dados.push(new Dado(forecast.date, forecast.max, forecast.min, forecast.cloudiness, forecast.rain, forecast.rain_probability, forecast.description));
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
        let noticias: Noticia[] = [];

        // pegando os artigos
        let artigos = data.articles;
        artigos.sort(() => Math.random() - 0.5); // embaralha os artigos
        for (let i=0; i<6; i++){
            let artigo = artigos[i];
            noticias.push(new Noticia(artigo.title, artigo.description, artigo.url));
        }

        // colocando as noticias na pagina
        const sessaoNoticias = document.getElementById("news");
        const divSessaoNoticias = sessaoNoticias!.querySelector(".content");

        const sessaoResultados = document.getElementById("results");
        const divSessaoResultados = sessaoResultados!.querySelector(".content")?.querySelector("ul");
        for (let i=0; i<6; i++){
            if (i<3){
                const link = document.createElement("a");
                link.href = noticias[i].url;
                link.innerHTML = ` <h3>${noticias[i].title}</h3>
                                    <h4>${noticias[i].description}</h4>
                                `;
                divSessaoNoticias!.appendChild(link);
            }else{
                const lista = document.createElement("li");
                lista.innerHTML = ` <a href="${noticias[i].url}"><h4>${noticias[i].title}</h4></a> 
                                    <p>${noticias[i].description}</p>`;
                divSessaoResultados!.appendChild(lista);
            }
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });

