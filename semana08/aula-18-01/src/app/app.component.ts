import { Component } from '@angular/core';
import { CoutriesServiceService } from './coutries-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula-18-01';
  paises: any[] = [];
  constructor(private servicoPais: CoutriesServiceService) { }

  ngOnInit(): void {
    this.servicoPais.getCountries().then((data: any) => {
      data.json().then((data: any) => {
        for (let i = 0; i < data.length; i++) {
          this.paises.push(
            {
              nome: data[i].name.common,
              populacao: data[i].population
            }
          );
        }
      })
    })
    console.log(this.paises);
  }
}
