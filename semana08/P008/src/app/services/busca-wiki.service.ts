import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaWikiService {
  endpoint: string = "https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&formatversion=2&origin=*&srsearch=";
  constructor() { }

  search(key: string) {
    return fetch(this.endpoint + encodeURIComponent(key));
  }
}
