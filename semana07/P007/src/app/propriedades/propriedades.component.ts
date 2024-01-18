import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css'
})
export class PropriedadesComponent {
  prop_list: string[] = ['Name', 'Model', 'Engine', 'NumberOfPassengers', 'Autonomia', 'Alcance', 'Teto'];
  @Input() name: string = '';
}
