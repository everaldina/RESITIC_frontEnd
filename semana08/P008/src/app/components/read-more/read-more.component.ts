import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrl: './read-more.component.css'
})
export class ReadMoreComponent {
  @Input() url: string = '';

}
