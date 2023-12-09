

document.getElementById('formulario').addEventListener('submit', function(event) {
    alert('Formulário enviado com sucesso!');
    event.preventDefault();

    var nome = document.getElementsByName("local").value;
    var imagem = document.getElementsByName("imagem").value;
    var itens = document.getElementsByName("item");
    var preco = document.getElementsByName("preco").value;
    var taxas = document.getElementsByName("taxas");
    var parcelas = document.getElementsByName("parcelas").value;


    var container = document.getElementById("container");
    container.style.display = 'flex'; 

    var roteiro = document.createElement("section");

    roteiro.innerHTML = `
        <img class = "flex-item destination-img" src="${imagem}"> 
        <h2 class="flex-item destination-title">Destino de ${nome}</h2>
        <div class="flex-item" id="package-itens">
            <<ul>
                <li>${itens[0].textContent}</li>
                <li>${itens[1].textContent}</li>
                <li>${itens[2].textContent}</li>
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