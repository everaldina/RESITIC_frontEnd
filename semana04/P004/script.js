//cursor
//transiƟon-duraƟon
// box-shadow 
// transform

let fortaleza = document.getElementById("fortaleza");
let salvador = document.getElementById("salvador");
let campinas = document.getElementById("campinas");

let butao_fortaleza = fortaleza.querySelector("button");
let butao_salvador = salvador.querySelector("button");
let butao_campinas = campinas.querySelector("button");

butao_fortaleza.addEventListener("click", function (){
    getInfo(fortaleza);
});

butao_salvador.addEventListener("click", function (){
    getInfo(salvador);
});
butao_campinas.addEventListener("click", function (){
    getInfo(campinas);
});


function getInfo(local){
    let itens = local.querySelectorAll("li");
    let taxas = local.getElementsByClassName("taxes")[0].textContent.trim();
    let preco = local.getElementsByClassName("value")[0].textContent.trim();
    let parcela = local.getElementsByClassName("portion")[0].textContent.trim();
    let titulo = local.querySelector("h2").textContent.trim();
    
    let json = {"local": titulo, "itens": [], "preco": preco, "parcela": parcela, "taxas": taxas};
    for (let i = 0; i < itens.length; i++) {
        let item = itens[i].textContent.trim();
        json.itens.push(item);
    }    



    console.log(json);

};
