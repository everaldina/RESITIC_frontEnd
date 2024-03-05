import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logginIn = false;

  form: FormGroup;
  editMode = false;
  appointmentId = '';

  constructor(private route: ActivatedRoute) { 
    this.form = new FormGroup({
      'name': new FormControl(null, [this.signUpMode.bind(this), Validators.maxLength(100)]),
      'email': new FormControl(null, [this.signUpMode.bind(this), Validators.email]),
      'username': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'confirmPassword': new FormControl(null, [this.signUpMode.bind(this), Validators.minLength(6), Validators.maxLength(20)]),
    });
  }

  ngOnInit(): void {
    this.route.url.subscribe(
      {
        next: (url) => {
          this.logginIn = url[0].path === 'login';
        }
      }
    );
  }

  signUpMode(control: AbstractControl): {[key:string]: boolean} | null{
    const value = control.value;

    if (!this.logginIn && !value){
      return {'required': true};
    }
    return null;
  }

  

  

  onSubmit() {
    if (this.form.invalid) {
      return;
    }else if(this.logginIn){
      // fazer login
    }else{
      // fazer cadastro
    }
  }

}
