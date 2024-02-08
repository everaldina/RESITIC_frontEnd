import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent{
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      'user_name': new FormControl(null, [Validators.required, Validators.minLength(12)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'full_name': new FormControl(null, [Validators.required]),
      'number': new FormControl(null, [Validators.required]),
      'adress': new FormControl(null, [Validators.required]),
      'birthdate': new FormControl(null),
      'gender': new FormControl(null),
      'occupation': new FormControl(null)
   });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
