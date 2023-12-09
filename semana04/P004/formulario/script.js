

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var local = document.getElementsByName("local")[0].value;
    var imagem = document.getElementsByName("imagem")[0].value;
    var itens = document.getElementsByName("item");
    var preco = document.getElementsByName("preco")[0].value;
    var taxas = document.getElementsByName("taxas")[0].value;
    var parcelas = document.getElementsByName("parcelas")[0].value;


    var container = document.getElementById("container");
    container.classList.add("destination-card")
    container.style.display = 'flex'; 

    var roteiro = document.createElement("section");

    roteiro.innerHTML = `
        <img class = "flex-item destination-img" src="${imagem}"> 
        <h2 class="flex-item destination-title">${local}</h2>
        <div class="flex-item" id="package-itens">
            <ul>
                <li>${itens[0].value}</li>
                <li>${itens[1].value}</li>
                <li>${itens[2].value}</li>
            </ul>
        </div>
        <div class="flex-item payment-info">
            <span class="price">R$</span>
            <span class="price value">${preco}</span>
            <p class="taxes">${taxas}</p>
            <p class="portion">${parcelas}</p>
        </div>
        <button class="flex-item">Comprar</button>
    `;

    container.appendChild(roteiro);

});