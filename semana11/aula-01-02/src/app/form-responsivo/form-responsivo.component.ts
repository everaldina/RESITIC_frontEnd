import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';


@Component({
  selector: 'app-form-responsivo',
  templateUrl: './form-responsivo.component.html',
  styleUrl: './form-responsivo.component.css'
})
export class FormResponsivoComponent implements OnInit{
  form: FormGroup;

  constructor() { 
    this.form = new FormGroup({
      'estacao': new FormControl(null, Validators.required),
      'email_notificacao': new FormControl(null, [Validators.required, Validators.email]),
      'localizacao': new FormControl(null, Validators.required),
      'status_instalacao': new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.form.value);
  }



}
