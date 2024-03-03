import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentDataService } from '../../appointment-data.service'

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  listaAtendimentos = this.dataService.getAtendimentos();
  detailShown: number | null = null;

  constructor(private dataService: AppointmentDataService, private rota: Router) { }

  showDetails(id: number) {
    if (!this.detailShown || this.detailShown !== id)
      this.detailShown = id;
    else
      this.detailShown = null;
  }




}
