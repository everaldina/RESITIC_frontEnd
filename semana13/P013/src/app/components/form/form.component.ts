import { Component } from '@angular/core';
import { AppointmentDataService } from '../../appointment-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;

  constructor(private dataService: AppointmentDataService) { 
    this.form = new FormGroup({
      'appointment_day': new FormControl(null, [Validators.required]),
      'tutor_name': new FormControl(null, [Validators.required]),
      'pet_name': new FormControl(null, [Validators.required]),
      'pet_type': new FormControl(null, [Validators.required]),
      'pet_breed': new FormControl(null, [Validators.required]),
      'details': new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const dados = this.form.value;
    dados.id = this.dataService.getAtendimentos().length + 1;
    this.dataService.addAtendimento(dados);
    this.form.reset();
  }

}
