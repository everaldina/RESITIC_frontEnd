import { Component } from '@angular/core';
import { BuscaWikiService } from './services/busca-wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'P008';
  artigos: any[] = [];

  constructor(private buscaWikiService: BuscaWikiService) {}

  search(key_search: string) {
    this.artigos = [];
    this.buscaWikiService
      .search(key_search)
      .then((response) =>
        response
          .json()
          .then((data: any) => this.artigos.push(...data.query.search))
      );
  }
}
