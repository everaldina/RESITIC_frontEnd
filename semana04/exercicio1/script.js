class Computador{
    constructor(placa, marca){
        this.nome = nome;
        this.marca = marca;
        this.processador = processador;
        this.memoria = memoria;
        this.hd = hd;
        this.monitor = monitor;
    }
    ligar(){
        console.log("Ligando o computador " + this.nome);
    }
    desligar(){
        console.log("Desligando o computador " + this.nome);
    }
    exibirInformacoes(){
        console.log("Nome: " + this.nome);
        console.log("Marca: " + this.marca);
        console.log("Processador: " + this.processador);
        console.log("Memória: " + this.memoria);
        console.log("HD: " + this.hd);
        console.log("Monitor: " + this.monitor);
    }
}