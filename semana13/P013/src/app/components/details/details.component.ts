import { Component, Input } from '@angular/core';
import { AppointmentDataService } from '../../appointment-data.service';
import { Appointment } from '../../appointment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() atendimentoID: number = 0;
  atendimento: Appointment = {} as Appointment;

  constructor(private dataService: AppointmentDataService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.atendimento = this.dataService.getAtendimento(this.atendimentoID);
  }
  
}
