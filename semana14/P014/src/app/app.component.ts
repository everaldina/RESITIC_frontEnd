import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P014';
  logged: boolean = false;

  constructor(private router: Router){
  }

  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.logged = false;
  }

  signUp(){
    this.router.navigate(['/signup']);
  }
}
