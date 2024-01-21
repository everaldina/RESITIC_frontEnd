import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  name: string = 'Categoria';
  @Input() categories: string[] = [];
}
