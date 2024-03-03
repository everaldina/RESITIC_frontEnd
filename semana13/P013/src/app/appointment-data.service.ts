import { Injectable } from '@angular/core';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDataService {
  listaAtendimentos: Appointment[] = [];
  constructor() { }

  addAtendimento(atendimento: Appointment) {
    this.listaAtendimentos.push(atendimento);
  }

  getAtendimentos() {
    return this.listaAtendimentos;
  }

  getAtendimento(id: number): Appointment {
    const atendimentoEncontrado = this.listaAtendimentos.find(atendimento => atendimento.id === id);
  
    if (atendimentoEncontrado)
      return atendimentoEncontrado;
    else
      return {} as Appointment;
  }
}
