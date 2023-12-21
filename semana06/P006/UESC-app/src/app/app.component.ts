import { Component } from '@angular/core';

import { Noticia } from './Noticia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UESC-app';

  noticias: Noticia[] = this.fetchNoticias();

  fetchNoticias() : Noticia[]{
    let API = "https://newsapi.org/v2/everything?q=education&apiKey=78ce31bd656b4fc2b08b42ed839f6665";
    const n: Noticia[] = [];
    fetch(API)
        .then(response => response.json())
        .then(data => {

            // pegando os artigos
            let artigos = data.articles;
            artigos.forEach((artigo: any) => {
                let noticia = {title: artigo.title, description: artigo.description, url: artigo.url};
                n.push(noticia);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
    return n;
  }

  getNoticias(numero: number): Noticia[]{
    let noticiasAleatorias: Noticia[] = [];
    for (let i = 0; i < numero; i++) {
      let index = Math.floor(Math.random() * this.noticias.length);
      noticiasAleatorias.push(this.noticias[index]);
    }
    return noticiasAleatorias;
  }
}
