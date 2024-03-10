import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormControlService } from '../../form-control.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userForm: FormGroup;

  usernameSubscription!: Subscription;
  passwordSubscription!: Subscription;
  emailSubscription!: Subscription;
  fullNameSubscription!: Subscription;
  numberSubscription!: Subscription;
  addressSubscription!: Subscription;
  birthdateSubscription!: Subscription;
  genderSubscription!: Subscription;
  occupationSubscription!: Subscription;


  constructor(private formControlService: FormControlService) {
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

  valueChange(){
    this.usernameSubscription = this.userForm.get('username')!.valueChanges.subscribe((value) => {
      this.formControlService.attValue('username', value);
    });
    this.passwordSubscription = this.userForm.get('password')!.valueChanges.subscribe((value) => {
      this.formControlService.attValue('password', value);
    });
    this.emailSubscription = this.userForm.get('email')!.valueChanges.subscribe((value) => {
      this.formControlService.attValue('email', value);
    });
    this.fullNameSubscription = this.userForm.get('full_name')!.valueChanges.subscribe((value) => {
      this.formControlService.attValue('full_name', value);
    });
    this.numberSubscription = this.userForm.get('number')!.valueChanges.subscribe((value) => {
      this.formControlService.attValue('number', value);
    });
    this.addressSubscription = this.userForm.get('address')!.valueChanges.subscribe((value) => {
      this.formControlService.attValue('address', value);
    });
    this.birthdateSubscription = this.userForm.get('birthdate')!.valueChanges.subscribe((value) => {
      this.formControlService.attValue('birthdate', value);
    });
    this.genderSubscription = this.userForm.get('gender')!.valueChanges.subscribe((value) => {
      this.formControlService.attValue('gender', value);
    });
    this.occupationSubscription = this.userForm.get('occupation')!.valueChanges.subscribe((value) => {
      this.formControlService.attValue('occupation', value);
    });
  }

  statusChange(){
    this.usernameSubscription = this.userForm.get('username')!.statusChanges.subscribe((status) => {
      this.formControlService.attStatus('username', status);
    });
    this.passwordSubscription = this.userForm.get('password')!.statusChanges.subscribe((status) => {
      this.formControlService.attStatus('password', status);
    });
    this.emailSubscription = this.userForm.get('email')!.statusChanges.subscribe((status) => {
      this.formControlService.attStatus('email', status);
    });
    this.fullNameSubscription = this.userForm.get('full_name')!.statusChanges.subscribe((status) => {
      this.formControlService.attStatus('full_name', status);
    });
    this.numberSubscription = this.userForm.get('number')!.statusChanges.subscribe((status) => {
      this.formControlService.attStatus('number', status);
    });
    this.addressSubscription = this.userForm.get('address')!.statusChanges.subscribe((status) => {
      this.formControlService.attStatus('address', status);
    });
    this.birthdateSubscription = this.userForm.get('birthdate')!.statusChanges.subscribe((status) => {
      this.formControlService.attStatus('birthdate', status);
    });
    this.genderSubscription = this.userForm.get('gender')!.statusChanges.subscribe((status) => {
      this.formControlService.attStatus('gender', status);
    });
    this.occupationSubscription = this.userForm.get('occupation')!.statusChanges.subscribe((status) => {
      this.formControlService.attStatus('occupation', status);
    });
  }

  ngOnDestroy() {
    this.usernameSubscription.unsubscribe();
    this.passwordSubscription.unsubscribe();
    this.emailSubscription.unsubscribe();
    this.fullNameSubscription.unsubscribe();
    this.numberSubscription.unsubscribe();
    this.addressSubscription.unsubscribe();
    this.birthdateSubscription.unsubscribe();
    this.genderSubscription.unsubscribe();
    this.occupationSubscription.unsubscribe();
  }

  updateService(){
    this.valueChange();
    this.statusChange();
  }

  onSubmit() {
    if (this.formControlService.submitForm()) {
      alert('Serviço validou formulario, dados de status no console');
      console.log(this.userForm.value);
      this.userForm.reset();
    } else {
      alert('Serviço nao validou formulario, dados de status no console');
    }
  }
}
