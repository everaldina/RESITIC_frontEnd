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
  searchKey: string = '';

  constructor(private buscaWikiService: BuscaWikiService) {}

  search(searchValue: string) {
    this.searchKey = searchValue;
    this.artigos = [];
    this.buscaWikiService
      .search(this.searchKey)
      .then((response) =>
        response
          .json()
          .then((data: any) => this.artigos.push(...data.query.search))
      );
  }
}
