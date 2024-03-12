import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();


  search(searchKey: string) {
    this.searchEvent.emit(searchKey);
  }

}
