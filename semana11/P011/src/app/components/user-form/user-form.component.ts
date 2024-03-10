import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.maxLength(12), // maximo de 12 caracteres
        Validators.pattern(/^\S+$/) // nao pode possuir espacos
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[@$!%*?&_])[^\s]*$/) // pelo menos uma letra e um simbolo
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      full_name: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^.*\s.*$/) // nome e sobrenome
      ]),
      number: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\((\d{2})\)(\s?((\d{9})|(\d{5}-\d{4})))$/) // apenas numeros telefonicos
      ]),
      address: new FormControl(null, [Validators.required]),
      birthdate: new FormControl(null, [
        Validators.required,
        this.dataValidator.bind(this)
      ]),
      gender: new FormControl(null, [Validators.required]),
      occupation: new FormControl(null, [Validators.required]),
    });
  }

  dataValidator(control: AbstractControl): {[key:string]: boolean} | null {
    const today = new Date();
    const birthDate = new Date(control.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
      age--;

    if (age < 18)
      return { invalidAge: true };
    else
      return null;

  }


  onSubmit() {
    if (this.userForm.invalid) {
      alert('Formulário inválido!')
      return;
    }else{
      let json_reponse = JSON.stringify(this.userForm.value);
      alert('Usuario logado no console!')
      console.log(json_reponse);
    }
  }
}
