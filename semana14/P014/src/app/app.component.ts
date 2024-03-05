import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P014';
  logged: boolean = false;

  login(){
    if (!this.logged)
      this.logged = true;
    else
      return;
  }

  logout(){
    if (this.logged)
      this.logged = false;
    else
      return;
  }

  signUp(){
    this.logged = !this.logged
  }
}
