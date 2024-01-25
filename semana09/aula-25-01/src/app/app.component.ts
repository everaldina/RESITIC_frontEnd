import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula-25-01';

  constructor(private rotas: Router, private route: ActivatedRoute){}

  toHome(){
    this.rotas.navigate(['home']);
  }

  toAbout(){
    this.rotas.navigate(['about']);
  } 

  toServices(){
    this.rotas.navigate(['services']);
  }
}
