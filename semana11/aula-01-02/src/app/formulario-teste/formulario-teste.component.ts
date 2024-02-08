import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-teste',
  templateUrl: './formulario-teste.component.html',
  styleUrl: './formulario-teste.component.css'
})
export class FormularioTesteComponent {
  dados: any;
  onSubmit(form: NgForm) {
    let { email, senha } = form.value;
    this.dados['email'] = email;
    this.dados['senha'] = senha;
  }
}
