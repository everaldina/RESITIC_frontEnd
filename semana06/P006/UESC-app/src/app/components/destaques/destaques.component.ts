import { Component } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrl: './destaques.component.css'
})
export class DestaquesComponent {
  title = "Destaques"
  imagens = [
    {url: "assets/img/amarelo.jpg", descricao: "Imagem 1"},
    {url: "assets/img/azul.jpg", descricao: "Imagem 2"},
  ]
}
