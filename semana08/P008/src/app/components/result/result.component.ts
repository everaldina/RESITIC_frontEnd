import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  @Input() title: string = '';
  @Input() intro: string = '';
  link: string = 'https://pt.wikipedia.org/wiki/' + this.title.replace(' ', '%20');
}
