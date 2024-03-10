import { Injectable } from '@angular/core';

interface FormData {
  username: {
    value: string;
    valid: boolean;
  };
  password: {
    value: string;
    valid: boolean;
  };
  email: {
    value: string;
    valid: boolean;
  };
  full_name: {
    value: string;
    valid: boolean;
  };
  number: {
    value: string;
    valid: boolean;
  };
  address: {
    value: string;
    valid: boolean;
  };
  birthdate: {
    value: string;
    valid: boolean;
  };
  gender: {
    value: string;
    valid: boolean;
  };
  occupation: {
    value: string;
    valid: boolean;
  };
}

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  formData: FormData;
  constructor() {
    this.formData = this.returnCleanData();
  }

  attValue(name: keyof FormData, value: string) {
    this.formData[name].value = value;
  }

  attStatus(name: keyof FormData, valid: string) {
    if (valid === 'VALID') 
      this.formData[name].valid = true;
    else
      this.formData[name].valid = false;
  }

  submitForm() {
    console.log(this.formData);
    if (Object.values(this.formData).every((field) => field.valid)) {
      this.resetForm();
      return true;
    } else return false;
  }

  returnCleanData(): FormData {
    let cleanData = {
      username: {
        value: '',
        valid: false,
      },
      password: {
        value: '',
        valid: false,
      },
      email: {
        value: '',
        valid: false,
      },
      full_name: {
        value: '',
        valid: false,
      },
      number: {
        value: '',
        valid: false,
      },
      address: {
        value: '',
        valid: false,
      },
      birthdate: {
        value: '',
        valid: false,
      },
      gender: {
        value: '',
        valid: false,
      },
      occupation: {
        value: '',
        valid: false,
      },
    };

    return cleanData as FormData;
  }

  resetForm() {
    this.formData = this.returnCleanData();
  }
}
